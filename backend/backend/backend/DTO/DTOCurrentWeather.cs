using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTO
{
    public class DTOCurrentWeather
    {
        private string observationTime = null;
        private double temperature = 0;
        private List<string> weatherDescriptions = new List<string>();
        private double windSpeed = 0;
        private int windDegree = 0;
        private int pressure = 0;
        private int humidity = 0;
        private int cloudCover = 0;
        private double feelsLike = 0;
        private int visibility = 0;

        public string ObservationTime { get => observationTime; set => observationTime = value; }
        public double Temperature { get => temperature; set => temperature = value; }
        public List<string> WeatherDescriptions { get => weatherDescriptions; set => weatherDescriptions = value; }
        public double WindSpeed { get => windSpeed; set => windSpeed = value; }
        public int WindDegree { get => windDegree; set => windDegree = value; }
        public int Pressure { get => pressure; set => pressure = value; }
        public int Humidity { get => humidity; set => humidity = value; }
        public int CloudCover { get => cloudCover; set => cloudCover = value; }
        public double FeelsLike { get => feelsLike; set => feelsLike = value; }
        public int Visibility { get => visibility; set => visibility = value; }
    }
}
