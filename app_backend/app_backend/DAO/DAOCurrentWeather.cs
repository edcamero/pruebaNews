
using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using app_backend.DTO;
using app_backend.DTO.DTOCurrentWeatherApi;
namespace app_backend.DAO
{
    public class DAOCurrentWeather
    {
        public static DTOCurrentWeather dtoCurrentWeather = new DTOCurrentWeather();
        public DTOCurrentWeather GetCityCurrentWeatherApi(string city)
        {
            string keyApi = Environment.GetEnvironmentVariable("API_KEY_CURRENT_WEATHER");
            string url = string.Format("http://api.openweathermap.org/data/2.5/weather?q={0}&APPID={1}", city, keyApi);
            string json = null;
            try
            {
                json = new WebClient().DownloadString(url);
            }catch(Exception)
            {
                Console.WriteLine("Ciudad no existe");
            }
            
            if (json == null)
            {
                dtoCurrentWeather = null;
            }
            else
            {
                
                CurrentWeather currentWeather = CurrentWeather.FromJson(json);
               
                long beginTicks = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).Ticks;
                DateTime start = new DateTime(beginTicks + currentWeather.Dt * 10000000, DateTimeKind.Utc);
                dtoCurrentWeather = new DTOCurrentWeather
                
                {
                    ObservationTime = start.ToLocalTime().ToString(),
                    Temperature = currentWeather.Main.Temp,
                    WindSpeed = currentWeather.Wind.Speed,
                    WindDegree = Convert.ToInt32(currentWeather.Wind.Deg),
                    Pressure = Convert.ToInt32(currentWeather.Main.Pressure),
                    Humidity = Convert.ToInt32(currentWeather.Main.Humidity),
                    CloudCover = Convert.ToInt32(currentWeather.Clouds.All),
                    FeelsLike = currentWeather.Main.FeelsLike,
                    Visibility = Convert.ToInt32(currentWeather.Visibility),
                    WeatherDescriptions = new List<string>()

                };
                foreach (Weather weather in currentWeather.Weather)
                {
                    dtoCurrentWeather.WeatherDescriptions.Add(weather.Description);
                }
            }
            return dtoCurrentWeather;

        }
    }
}