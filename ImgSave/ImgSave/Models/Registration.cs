using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Models
{
    public class Registration
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public string Password { get; set; }
        public string Address { get; set; }
    
        public string PhoneNo { get; set; }
        public Boolean IsVerified { get; set; }
        public Boolean IsActive { get; set; }
    }
}
