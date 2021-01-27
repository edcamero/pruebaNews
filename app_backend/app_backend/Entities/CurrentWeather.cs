using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace app_backend.Entities
{
    [Table("current_weather")]
    public class CurrentWeather
    {
        [Key]

        [Column("cuwe_id")]
        public int CurrentWeatherId { get; set; }
        [Column("cuwe_observation_time")]
        public string ObservationTime { get; set; }
        [Column("cuwe_temperature")]
        public double Temperature { get; set; }
        [Column("cuwe_wind_speed")]
        public double WindSpeed { get; set; }
        [Column("cuwe_wind_degree")]
        public int WindDegree { get; set ; }
        [Column("cuwe_pressure")]
        public int Pressure { get; set; }
        [Column("cuwe_humadity")]
        public int Humidity { get; set ; }
        [Column("cuwe_cloud_cover")]
        public int CloudCover { get ; set ; }
        [Column("cuwe_fells_like")]
        public double FeelsLike { get ; set ; }
        [Column("cuwe_visibility")]
        public int Visibility { get ; set; }
        [Key]

        [ForeignKey("hist_id")]
        public virtual History History { get; set; }
        [ForeignKey("cuwe_id")]
        public virtual List<WeatherDescription> WeatherDescription { get; set; }
    }
}
