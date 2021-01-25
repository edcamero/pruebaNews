using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTO
{
    public class DTOCity
    {
       private List<DTO.DTONews> news = new List<DTONews>();
        private DTOCurrentWeather currentWeather = null;

       public List<DTONews> News { get => news; set => news = value; }
       public DTOCurrentWeather CurrentWeather { get => currentWeather; set => currentWeather = value; }
    }
}
