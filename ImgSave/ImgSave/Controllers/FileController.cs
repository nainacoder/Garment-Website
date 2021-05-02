using ImgSave.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Web.CodeGeneration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Controllers
{
    public class FileController : Controller

    {
        private readonly ILogger<FileController> _logger;
        private readonly AppicationDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public FileController(ILogger<FileController> logger, AppicationDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _logger = logger;
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Create(HomeViewModel vm)
        {
            string stringFileName = UploadFile(vm);
            var homeimage = new Homeimage
            {

                Section = vm.Section,
                ImageName = vm.ImageName,
                ImagePath = stringFileName,
                Comments = vm.Comments,
                AlternateText = vm.AlternateText,
                IsActive = vm.IsActive
            };
            _context.HomePageImg_tbl.Add(homeimage);
            _context.SaveChanges();
            return View();
        }
        
        private string UploadFile(HomeViewModel vm)
        {
            string filePath = null;
            if (vm.ImagePath != null)
            {

                string uploedDir = Path.Combine(_webHostEnvironment.WebRootPath, "Images//Home");
                filePath = Guid.NewGuid().ToString() + "-" + vm.ImagePath.FileName;
                string filepath = Path.Combine(uploedDir, filePath);
                using (var fileStream = new FileStream(filepath, FileMode.Create))
                {
                    vm.ImagePath.CopyTo(fileStream);
                }

            }
            return filePath;
        }
        public IActionResult MenuCreate()
        {
            return View();
        }
        [HttpPost]
        public IActionResult MenuCreate(MenuViewModel menuview)
        {
            string stringFile = Upload(menuview);
            var menu = new Menu
            {
                MenuItem = menuview.MenuItem,
                ImagePath = stringFile,
                IsActive = menuview.IsActive,
                Comments = menuview.Comments
            };
            _context.Menu_tbl.Add(menu);
            _context.SaveChanges();
            return View();
        }

        private string Upload(MenuViewModel menuview)
        {
            string filePath = null;
            if (menuview.ImagePath != null)
            {
                string uploedDir = Path.Combine(_webHostEnvironment.WebRootPath, "Images//Menu");
                filePath = Guid.NewGuid().ToString() + "-" + menuview.ImagePath.FileName;
                string filepath = Path.Combine(uploedDir, filePath);
                using (var fileStream = new FileStream(filepath, FileMode.Create))
                {
                    menuview.ImagePath.CopyTo(fileStream);
                }
            }
            return filePath;
        }
        public IActionResult ProductCreate()
        {
            return View();
        }
        [HttpPost]
        public IActionResult ProductCreate(ProductViewModel pvm)
        {
            string stringFile = ProductUpload(pvm);
            var product = new Product
            {
                PId = pvm.PId,
                SizeId = pvm.SizeId,
                Quantity = pvm.Quantity,
                Price = pvm.Price,
                ImagePath = stringFile,
                IsActive = pvm.IsActive,
                Comments = pvm.Comments
            };
            _context.ProductList_tbl.Add(product);
            _context.SaveChanges();
            return View();
        }

        private string ProductUpload(ProductViewModel pvm)
        {
            string filePath = null;
            if (pvm.ImagePath != null)
            {
                string uploedDir = Path.Combine(_webHostEnvironment.WebRootPath, "Images//Product");
                filePath = Guid.NewGuid().ToString() + "-" + pvm.ImagePath.FileName;
                string filepath = Path.Combine(uploedDir, filePath);
                using (var fileStream = new FileStream(filepath, FileMode.Create))
                {
                    pvm.ImagePath.CopyTo(fileStream);
                }
            }
            return filePath;
        }
    }
}
