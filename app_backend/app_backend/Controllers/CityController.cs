using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using app_backend.DAO;
using app_backend.DTO;
using app_backend.Contexts;
using app_backend.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace app_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly AppContextDb _context;
        private DAOHistory _daoHistory;
        private static DAONews daoNews = new DAONews();
        private static DAOCurrentWeather daoCurrentWeather = new DAOCurrentWeather();
        List<News> newsList = new List<News>();
        public CityController(AppContextDb context)
        {
            _context = context;
            _daoHistory = new DAOHistory(context);

        }
        // GET: api/<CityController>
        [HttpGet("")]
        public IActionResult Get(string name)
        {

            DTOCity dtoCity = new DTOCity();
            dtoCity.CurrentWeather = daoCurrentWeather.GetCityCurrentWeatherApi(name);
            if (dtoCity.CurrentWeather == null)
            {
                
                return NotFound(
                    new DTOMessage {
                        code=404,
                        Message= "City not found" 
                    });
            }
            dtoCity.News = daoNews.GetCityNews(name);
            newsList.Clear();
            foreach (DTONews news in dtoCity.News)
            {
                News newsObject = new News
                {
                    author = news.Author,
                    content = news.Content,
                    description=news.Description,
                    publishedAt=news.PublishedAt,
                    title=news.Title,
                    url=news.Url,
                    urlToImage=news.UrlToImage
                    
                };
                newsList.Add(newsObject);
            }
            List<WeatherDescription> weatherDescriptions = new List<WeatherDescription>();

            foreach (string value in dtoCity.CurrentWeather.WeatherDescriptions)
            {
                weatherDescriptions.Add(new WeatherDescription { Value = value });
            }
            CurrentWeather currentWeatherAux = new CurrentWeather
            {
                CloudCover = dtoCity.CurrentWeather.CloudCover,
                Humidity = dtoCity.CurrentWeather.Humidity,
                ObservationTime = dtoCity.CurrentWeather.ObservationTime,
                Temperature = dtoCity.CurrentWeather.Temperature,
                FeelsLike = dtoCity.CurrentWeather.FeelsLike,
                WindDegree = dtoCity.CurrentWeather.WindDegree,
                WindSpeed = dtoCity.CurrentWeather.WindSpeed,
                Visibility = dtoCity.CurrentWeather.Visibility,
                Pressure = dtoCity.CurrentWeather.Pressure,
                WeatherDescription = weatherDescriptions
            };
            
            History history = new History
            {
                City = name,
                News= newsList,
                CurrentWeather= currentWeatherAux
            };
            _context.History.Add(history);
            _context.SaveChanges();
            return Ok(dtoCity);
        } 
    }
}
