using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace D.L.Models
{
    public class Post : Base
    {
        [StringLength(200)]
        public string Title { get; set; }
        public string Html { get; set; }
    }
}
