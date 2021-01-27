using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using app_backend.Contexts;
using app_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace app_backend.DAO
{
    public class DAOHistory
    {
        
        private readonly AppContextDb _context;

        public DAOHistory(AppContextDb context)
        {
            _context = context;
        }

        public  List<History> GetHistories()
        {
                        
            return _context.History.Include("News").Include("CurrentWeather").Include("CurrentWeather.WeatherDescription").ToList();
        }

    }
}
