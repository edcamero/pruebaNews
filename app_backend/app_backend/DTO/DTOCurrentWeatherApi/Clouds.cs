using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Newtonsoft.Json;

namespace app_backend.DTO.DTOCurrentWeatherApi
{
    public class Clouds
    {
        [JsonProperty("all")]
        public long All { get; set; }
    }
}
