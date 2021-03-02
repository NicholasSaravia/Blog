using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace D.L.Models
{
    public class Post : Base
    {
        [StringLength(200)]
        public string Title { get; set; }
        public string Html { get; set; }
        public int AppUserId { get; set; }
    }
}
