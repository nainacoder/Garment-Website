using ImgSave.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly ProductDetails_Service _productContext;

        public ProductController(ProductDetails_Service context)
        {
            _productContext = context;

        }
        [HttpGet]
        public AllProductDetails Product_Details()
        {
            return _productContext.Product_Details();
        }
        [HttpPost]
        [Route("ProductList")]
        public List<Product> ProductList(InputProduct inputProduct)
        {
            return _productContext.ProductsList(inputProduct);
        }

    }
}
