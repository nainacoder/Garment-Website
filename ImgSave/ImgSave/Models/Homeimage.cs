using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Models
{
    public class Homeimage
    {
 
      
        [Key]
        public int Section { get; set; }
        public string ImageName { get; set; }
        public string ImagePath { get; set; }
        public string Comments { get; set; }
        public string AlternateText { get; set; }
        public bool IsActive { get; set; }
    }
}
