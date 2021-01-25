using backend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DAO
{
    public class DAOHistory
    {

        public static List<History> listHistory = new List<History>();
        
       
        public List<History> GetHistories()
        {
            listHistory.Clear();
                       
            
            return listHistory;
        }
    }
}
