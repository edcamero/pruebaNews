using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Entities
{
    public class History
    {   [Key]
        public int hist_id { get; set; }
        public int hist_city { get; set; }
    }
}
