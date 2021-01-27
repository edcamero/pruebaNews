using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using app_backend.Contexts;
using app_backend.Entities;
using app_backend.DAO;
using app_backend.DTO;

namespace app_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {
        private readonly AppContextDb _context;
        private DAOHistory _daoHistory;
        private List<DTOHistory> history = new List<DTOHistory>();
        private List<History> listHistoryDao = new List<History>();

        public HistoryController(AppContextDb context)
        {
            _context = context;
            _daoHistory = new DAOHistory(context);

        }

        // GET: api/History
        [HttpGet]
        public IActionResult GetHistory()

        {
            history.Clear();
            listHistoryDao = _daoHistory.GetHistories();

            foreach (History historyDao in listHistoryDao)
            {
                List<DTONews> dtoNewsList = new List<DTONews>();
                
                foreach( News news in historyDao.News)
                {
                    DTONews auxNews = new DTONews();
                    auxNews.Author = news.author;
                    auxNews.Content = news.content;
                    auxNews.Description = news.description;
                    auxNews.PublishedAt = news.publishedAt;
                    auxNews.Title = news.title;
                    auxNews.Url = news.url;
                    auxNews.UrlToImage = news.urlToImage;
                    dtoNewsList.Add(auxNews);
                }
                List<string> WeatherDescriptionsListString = new List<string>();
                foreach (WeatherDescription WDescriptions in historyDao.CurrentWeather.WeatherDescription)
                {
                    WeatherDescriptionsListString.Add(WDescriptions.Value);
                }
                history.Add(new DTOHistory
                {
                    City = historyDao.City,
                    Info = new DTOCity
                    {
                        News = dtoNewsList,
                        CurrentWeather=new DTOCurrentWeather
                        {
                            ObservationTime= historyDao.CurrentWeather.ObservationTime,
                            Temperature= historyDao.CurrentWeather.Temperature,
                            WindSpeed= historyDao.CurrentWeather.WindSpeed,
                            WindDegree= historyDao.CurrentWeather.WindDegree,
                            Pressure= historyDao.CurrentWeather.Pressure,
                            Humidity= historyDao.CurrentWeather.Humidity,
                            CloudCover= historyDao.CurrentWeather.CloudCover,
                            FeelsLike= historyDao.CurrentWeather.FeelsLike,
                            Visibility= historyDao.CurrentWeather.Visibility,
                            WeatherDescriptions= WeatherDescriptionsListString
                        }
                    }
                });
            }
            return Ok(new DTOHistoryView { history = history });
        }

   

    }
}
