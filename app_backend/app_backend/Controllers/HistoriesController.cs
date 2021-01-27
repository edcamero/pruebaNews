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
    public class HistoriesController : ControllerBase
    {
        private readonly AppContextDb _context;
        private DAOHistory _daoHistory;
        private List<DTOHistory> history = new List<DTOHistory>();
        private List<History> listHistoryDao = new List<History>();

        public HistoriesController(AppContextDb context)
        {
            _context = context;
            _daoHistory = new DAOHistory(context);

        }

        // GET: api/Histories
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
                            Visibility= historyDao.CurrentWeather.Visibility
                        }
                    }
                });
            }
            return Ok(new DTOHistoryView { history = history });
        }

        // GET: api/Histories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<History>> GetHistory(int id)
        {
            var history = await _context.History.FindAsync(id);

            if (history == null)
            {
                return NotFound();
            }

            return history;
        }

        // PUT: api/Histories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHistory(int id, History history)
        {
            if (id != history.Id)
            {
                return BadRequest();
            }

            _context.Entry(history).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HistoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Histories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<History>> PostHistory(History history)
        {
            _context.History.Add(history);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHistory", new { id = history.Id }, history);
        }

        // DELETE: api/Histories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<History>> DeleteHistory(int id)
        {
            var history = await _context.History.FindAsync(id);
            if (history == null)
            {
                return NotFound();
            }

            _context.History.Remove(history);
            await _context.SaveChangesAsync();

            return history;
        }

        private bool HistoryExists(int id)
        {
            return _context.History.Any(e => e.Id == id);
        }
    }
}
