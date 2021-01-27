using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace app_backend.Entities
{
    [Table("news")]
    public class News
    {
        [Key, Column("news_id")]
        public int IdNews{ get; set; }
       
        
        [Column("news_author")]
        public string author { get; set; }
        [Column("news_title")]
        public string title { get; set; }
        [Column("news_description")]
        public string description { get; set; }
        [Column("news_url")]
        public string url { get; set; }
        [Column("news_url_image")]
        public string urlToImage { get; set; }
        [Column("news_published_at")]
        public string publishedAt { get; set; }
        [Column("news_content")]
        public string content { get; set; }


    }
}
