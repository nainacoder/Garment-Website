using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ImgSave.Models;

namespace ImgSave.Models
{
    public class AppicationDbContext:DbContext
    {
        public AppicationDbContext(DbContextOptions<AppicationDbContext> options):base(options)
        {

        }

        public DbSet<Img> imagesave { get; set; }
        public DbSet<Homeimage>HomePageImg_tbl { get; set; }
        public DbSet<Menu> Menu_tbl { get; set; }
        public DbSet<Product> ProductList_tbl { get; set; }
        // public DbSet<Homeimage> Homeimage { get; set; }
    }
}
    