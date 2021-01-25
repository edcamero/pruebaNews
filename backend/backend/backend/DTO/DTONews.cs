using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTO
{
    public class DTONews
    {
        private string author = null;
        private string title = null;
        private string description = null;
        private string url = null;
        private string urlToImage = null;
        private string publishedAt = null;
        private string content = null;

    
        public string Author {
            get => author; 
            set => author = value;
        }
        public string Title {
            get => title;
            set => title = value;
        }
        public string Description {
            get => description;
            set => description = value; 
        }
        public string Url {
            get => url;
            set => url = value;
        }
        public string UrlToImage { 
            get => urlToImage;
            set => urlToImage = value;
        }
        public string PublishedAt { 
            get => publishedAt; 
            set => publishedAt = value;
        }
        public string Content { 
            get => content;
            set => content = value; 
        }
    }

}
