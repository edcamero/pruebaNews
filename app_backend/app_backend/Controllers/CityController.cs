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
        [HttpGet("{cityName}")]
        public IActionResult Get(string cityName)
        {

            DTOCity dtoCity = new DTOCity();
            dtoCity.CurrentWeather = daoCurrentWeather.GetCityCurrentWeatherApi(cityName);
            if (dtoCity.CurrentWeather == null)
            {
                string message = "Ciudad no encontrada";
                return BadRequest(message);
            }
            dtoCity.News = daoNews.GetCityNews(cityName);
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

            History history = new History
            {
                City = cityName,
                News = newsList
            };
            _context.History.Add(history);
            _context.SaveChanges();
            return Ok(dtoCity);
        }

      
        // POST api/<CityController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CityController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CityController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
