using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace app_backend.Entities
{
    public class History
    {
        [Key]
        [Column("hist_id")]
        public int Id { get; set; }
        [Column("hist_city")]
        public string City { get; set; }
        [ForeignKey("hist_id")]
        public virtual List<News> News { get; set; }

        
    }
}
