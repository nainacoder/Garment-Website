using ImgSave.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace ImgSave.Controllers
{

    public class ImgController : Controller
    {
        private readonly AppicationDbContext _adb;
        private readonly IWebHostEnvironment _iwebhost;
        public ImgController(AppicationDbContext adb, IWebHostEnvironment iwebhost)
        {
            _adb = adb;
            _iwebhost = iwebhost;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Index(IFormFile ifile, Img ic)
        {
            string imgext = Path.GetExtension(ifile.FileName);
            if (imgext == ".jpg" || imgext == ".gif" || imgext == ".png" || imgext == ".pdf" || imgext == ".jpeg")
            {
                var saveimg = Path.Combine(_iwebhost.WebRootPath, "Images", ifile.FileName);
                var stream = new FileStream(saveimg, FileMode.Create);
                await ifile.CopyToAsync(stream);


                ic.Imgname = ifile.FileName;
                ic.Imgpath = saveimg;
                await _adb.imagesave.AddAsync(ic);
                await _adb.SaveChangesAsync();
                ViewData["Message"] = "The selected  file is saved!";
            }
            else
            {
                ViewData["Message"] = "Please upload only .jpg,.png and .gif only";
            }
            return View();


        }
        [HttpGet]
        public IActionResult List()
        {

            return View(_adb.imagesave.ToList());
        }
    }
}
