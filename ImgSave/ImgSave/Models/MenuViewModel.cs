using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ImgSave.Models
{
    public class MenuViewModel
    {
        [Key]
        public string MenuItem { get; set; }
        public IFormFile ImagePath { get; set; }
        public bool IsActive { get; set; }
        public string Comments { get; set; }

    }
}
