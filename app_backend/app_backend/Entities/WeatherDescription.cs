using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace app_backend.Entities
{
    [Table("weather_description")]
    public class WeatherDescription
    {
        [Key,Column("wede_id")]
        public int WeatherDescriptionId { get; set; }

        [Column("wede_value")]
        public string Value { get; set; }
    }
}
