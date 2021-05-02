using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ImgSave.Models
{
    public class Img
    {
        [Key]
        public int Imgid { get; set; }
        public string Imgname { get; set; }
        public string Imgpath { get; set; }
    }
}
