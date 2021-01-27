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
        
        public static List<History> listHistory = new List<History>();
        private readonly AppContextDb _context;

        public DAOHistory(AppContextDb context)
        {
            _context = context;
        }

        public  List<History> GetHistories()
        {
            return  _context.History.Include("News").ToList();
        }

    }
}
