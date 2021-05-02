using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Models
{
    public class Menu
    {
       [Key]
        public string MenuItem { get; set; }
        public string ImagePath { get; set; }
        public bool IsActive { get; set; }
        public string Comments { get; set; }

    }
}
