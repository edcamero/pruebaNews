using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace app_backend.DTO
{
    public class DTOCurrentWeather
    {  public string ObservationTime { get; set; }
        public double Temperature { get; set; }
        public List<string> WeatherDescriptions { get; set; }
        public double WindSpeed { get; set; }
        public int WindDegree { get; set; }
        public int Pressure { get; set; }
        public int Humidity { get; set; }
        public int CloudCover { get; set; }
        public double FeelsLike { get; set; }
        public int Visibility { get; set; }
    }
}
