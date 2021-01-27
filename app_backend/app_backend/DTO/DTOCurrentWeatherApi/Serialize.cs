using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace app_backend.DTO.DTOCurrentWeatherApi
{
    internal static  class Serialize
    {
        public static string ToJson(this CurrentWeather self) => JsonConvert.SerializeObject(self, DTOCurrentWeatherApi.Converter.Settings);
    }
}
