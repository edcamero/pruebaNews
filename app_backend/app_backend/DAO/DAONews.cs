using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NewsAPI;
using NewsAPI.Constants;
using NewsAPI.Models;
using app_backend.DTO;

namespace app_backend.DAO
{
    public class DAONews
    {
        public static List<DTO.DTONews> listDtoNews = new List<DTONews>();
        public List<DTONews> GetCityNews (string city)
        {
            listDtoNews.Clear();
            string keyApi = Environment.GetEnvironmentVariable("API_KEY_NEWSAPI");
            var newsApiClient = new NewsApiClient(keyApi);
            var articlesResponse = newsApiClient.GetEverything(new EverythingRequest
            {
                Q = city,
                Language = Languages.ES

            });
            if (articlesResponse.Status == Statuses.Ok)
            {
                // total results found
                Console.WriteLine(articlesResponse.TotalResults);
                // here's the first 20
                foreach (var article in articlesResponse.Articles)
                {
                    listDtoNews.Add(new DTONews
                    { 
                        Author = article.Author,
                        Title = article.Title,
                        Description = article.Description,
                        Url = article.Url,
                        UrlToImage = article.UrlToImage,
                        PublishedAt = article.PublishedAt.ToString(),
                        Content = article.Content

                    });
                }
            }
            

            return listDtoNews;
        }
    }
}
