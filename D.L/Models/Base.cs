using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace D.L.Models
{
    public class Base
    {
        public int Id { get; set; }
        public DateTime DateCreated {  get;  set; }
        public bool Disabled { get; set; }

    }
}
