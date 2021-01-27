using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using app_backend.Entities;

namespace app_backend.Contexts
{
    public class AppContextDb : DbContext
    {
        public AppContextDb (DbContextOptions<AppContextDb> options)
            : base(options)
        {
        }

        public DbSet<app_backend.Entities.History> History { get; set; }
        public DbSet<app_backend.Entities.News> News { get; set; }
        public DbSet<app_backend.Entities.CurrentWeather> CurrentWeather { get; set; }
        public DbSet<app_backend.Entities.WeatherDescription> WeatherDescription { get; set; }

       

    }
}
