using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_backend.DTO
{
    public class DTOCity
    {
       public List<DTONews> News { get; set; }
       public DTOCurrentWeather CurrentWeather { get; set; }
    }
}
