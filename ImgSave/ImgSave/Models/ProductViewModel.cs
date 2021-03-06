using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Models
{
    public class ProductViewModel
    {
        [Key]
        public int PId { get; set; }
        public int SizeId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public IFormFile ImagePath { get; set; }
        public string Comments { get; set; }
        public Boolean IsActive { get; set; }
    }
}
