using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.DAO;
using backend.DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private static DAONews daoNews = new DAONews();
        private static DAOCurrentWeather daoCurrentWeather = new DAOCurrentWeather();
        // GET: api/<CityController>
        [HttpGet("{cityName}")]
        public IActionResult Get(string cityName)
        {

            DTOCity dtoCity = new DTOCity();
            dtoCity.CurrentWeather = daoCurrentWeather.GetCityCurrentWeather(cityName);
            if (dtoCity.CurrentWeather == null)
            {
                string message = "Ciudad no encontrada";
                return BadRequest(message);
            }
            dtoCity.News = daoNews.GetCityNews(cityName);
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
