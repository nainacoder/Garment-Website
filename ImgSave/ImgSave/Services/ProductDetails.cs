using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace ImgSave.Services
{
    public class AllProductDetails
    {
        public List<HomeImages> HomeImages { get; set; }
        public List<CategoryName> CategoryNames { get; set; }
    }
    public class HomeImages
    {
        public int Section { get; set; }
        public List<HomeImageDetails> HomeImageDetails { get; set; }
    }

    public class HomeImageDetails
    {
        public string ImageName { get; set; }
        public string ImagePath { get; set; }
    }


    public class CategoryName
    {
        public string CatName { get; set; }
        public List<SubCategoryName> SubCategoryNames { get; set; }



    }
    public class SubCategoryName
    {
        public string SubCatName { get; set; }
        public List<ProductName> ProductName { get; set; }
      
    }
    public class ProductName
    {
        public string PName { get; set; }
        public int PID { get; set; }

        // public List<Product> Products { get; set; }
    }
    public class Product
    {
        public int PlID { get; set; }
        public string SizeName { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string ImagePath { get; set; }
        public string Comments { get; set; }
    }
    public class InputProduct
    {
        public int PID { get; set; }
    }
}
