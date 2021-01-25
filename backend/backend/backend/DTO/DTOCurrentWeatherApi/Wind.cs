using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace backend.DTO.DTOCurrentWeatherApi
{
    public class Wind
    {
        [JsonProperty("speed")]
        public double Speed { get; set; }

        [JsonProperty("deg")]
        public long Deg { get; set; }

        [JsonProperty("gust")]
        public double Gust { get; set; }
    }
}
