using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace D.L.Models
{
    public class AppUser : IdentityUser
    {
        [StringLength(20)]
        public string DisplayName { get; set; }
    }
}
