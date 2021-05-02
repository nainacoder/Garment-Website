using ImgSave.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Services
{
    public class ProductDetails_Service
    {
        private readonly DbContext _context;
        public ProductDetails_Service(DbContext context)
        {
            _context = context;
            _context.GetConnection();
        }
        //public ProductList Product_Details()
        public AllProductDetails Product_Details()
        {
            AllProductDetails objallProductDet = new AllProductDetails();
            SqlConnection connection = _context.GetConnection();
            try
            {
                string SqlString = "getHomeimage";
                DataSet ds = ConnStr.GetDataSet(SqlString);

                if (ds != null && ds.Tables.Count > 0)
                {
                    DataTable dtHomePage = ds.Tables[0];
                    List<HomeImages> lstHome = new List<HomeImages>();

                    #region HomeImages -- Start

                    HomeImages objHome = new HomeImages();
                    HomeImageDetails objHomeImageDetails = new HomeImageDetails();
                    List<HomeImageDetails> lstHomeImageDetails = new List<HomeImageDetails>();

                    if (dtHomePage.Rows.Count > 0)
                    {
                        List<DataTable> dts = GetGroupByDatables(dtHomePage, "Section");
                        if (dts != null)
                        {
                            if (dts.Count > 0)
                            {
                                foreach (DataTable dtHome in dts)
                                {
                                    objHome = new HomeImages();
                                    lstHomeImageDetails = new List<HomeImageDetails>();
                                    objHome.Section = Convert.ToInt32(dtHome.Rows[0]["Section"]);
                                    foreach (DataRow dr in dtHome.Rows)
                                    {
                                        objHomeImageDetails = new HomeImageDetails();
                                        objHomeImageDetails.ImageName = Convert.ToString(dr["ImageName"]);
                                        objHomeImageDetails.ImagePath = Convert.ToString(dr["ImagePath"]);

                                        lstHomeImageDetails.Add(objHomeImageDetails);
                                        objHome.HomeImageDetails = lstHomeImageDetails;
                                    }
                                    lstHome.Add(objHome);
                                }
                            }
                        }
                        #endregion HomeImages -- End

                        #region Category Detail -- Start

                        CategoryName objcategoryName = new CategoryName();
                        List<CategoryName> lstCategoryName = new List<CategoryName>();

                        SubCategoryName objsubCategoryName = new SubCategoryName();
                        List<SubCategoryName> lstSubCategoryName = new List<SubCategoryName>();

                        ProductName objProductName = new ProductName();
                        List<ProductName> lstProductName = new List<ProductName>();

                        DataTable dtCatgory = ds.Tables[1];
                        DataTable dtSubCatgory = ds.Tables[2];
                        DataTable dtProductName = ds.Tables[3];

                        if (dtCatgory != null)
                        {
                            if (dtCatgory.Rows.Count > 0)
                            {
                                foreach (DataRow drCat in dtCatgory.Rows)
                                {

                                    objcategoryName = new CategoryName();
                                    objcategoryName.CatName = Convert.ToString(drCat["CName"]);

                                    int CatID = Convert.ToInt32(drCat["CID"]);

                                    if (dtSubCatgory != null)
                                    {
                                        if (dtSubCatgory.Rows.Count > 0)
                                        {
                                            DataRow[] SubCatrows = dtSubCatgory.Select("CatID = " + CatID);
                                            if (SubCatrows != null)
                                            {
                                                if (SubCatrows.Length > 0)
                                                {
                                                    foreach (DataRow drSubCat in SubCatrows)
                                                    {
                                                        //lstSubCategoryName = new List<SubCategoryName>();

                                                        objsubCategoryName = new SubCategoryName();
                                                        objsubCategoryName.SubCatName = Convert.ToString(drSubCat["SubCatName"]);

                                                        int SubCatID = Convert.ToInt32(drSubCat["SubCatID"]);

                                                        if (dtProductName != null)
                                                        {
                                                            if (dtProductName.Rows.Count > 0)
                                                            {
                                                                DataRow[] Productsrows = dtProductName.Select("SubCatID = " + SubCatID);

                                                                if (Productsrows != null)
                                                                {
                                                                    if (Productsrows.Length > 0)
                                                                    {
                                                                        foreach (DataRow drProduct in Productsrows)
                                                                        {
                                                                            objProductName = new ProductName();
                                                                            objProductName.PName = Convert.ToString(drProduct["PName"]);
                                                                            objProductName.PID = Convert.ToInt32(drProduct["PID"]);

                                                                            lstProductName.Add(objProductName);

                                                                        }
                                                                        objsubCategoryName.ProductName = lstProductName;

                                                                        lstProductName = new List<ProductName>();

                                                                        lstSubCategoryName.Add(objsubCategoryName);

                                                                    }

                                                                }

                                                            }
                                                        }

                                                    }

                                                    objcategoryName.SubCategoryNames = lstSubCategoryName;
                                                    lstCategoryName.Add(objcategoryName);

                                                    lstSubCategoryName = new List<SubCategoryName>();
                                                }

                                            }

                                        }
                                    }


                                }

                            }
                        }


                        objallProductDet.CategoryNames = lstCategoryName;
                        objallProductDet.HomeImages = lstHome;
                    }

                    #endregion Category Detail -- End

                }
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
            }
            finally
            {
                if (connection != null)
                    connection.Close();
            }
            return objallProductDet;
        }


        public List<DataTable> GetGroupByDatables(DataTable dt, string ColumnName)
        {
            List<DataTable> lstOut = null;
            try
            {

                var resultCat = from rows in dt.AsEnumerable()
                                group rows by new { Name = rows[ColumnName] } into grp
                                select grp;
                if (resultCat != null)
                {
                    lstOut = new List<DataTable>();
                }

                foreach (var item in resultCat)
                {
                    lstOut.Add(item.CopyToDataTable());
                }

                if (lstOut == null || lstOut.Count <= 0)
                { lstOut = null; }


            }
            catch (Exception ex)
            { }

            return lstOut;
        }


        //public List<Product> ProductList(int PID)
        //{
        //    List<Product> lstProduct = new List<Product>();
        //    SqlConnection connection = _context.GetConnection();
        //    try
        //    {
        //        string SqlString = "ProductList + '"+ PID + "'";
        //        DataSet ds = ConnStr.GetDataSet(SqlString);

        //        if (ds != null && ds.Tables.Count > 0)
        //        {
        //            DataTable dtProductList = ds.Tables[0];

        //            if (dtProductList != null)
        //            {
        //                if (dtProductList.Rows.Count > 0)
        //                {

        //                    foreach (DataRow drProduct in dtProductList.Rows)
        //                    {
        //                        Product objProduct = new Product();
        //                        objProduct.PlID = Convert.ToInt32(drProduct["PlId"]);
        //                        objProduct.SizeName = Convert.ToString(drProduct["SizeName"]);
        //                        objProduct.Quantity = Convert.ToInt32(drProduct["Quantity"]);
        //                        objProduct.Price = Convert.ToDecimal(drProduct["Price"]);
        //                        objProduct.ImagePath = Convert.ToString(drProduct["ImagePath"]);
        //                        objProduct.Comments = Convert.ToString(drProduct["Comments"]);

        //                        lstProduct.Add(objProduct);
        //                    }
        //                }
        //            }
        public List<Product> ProductsList(InputProduct pdls)
        {
            SqlConnection connection = _context.GetConnection();
            List<Product> productLists = new List<Product>();
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = connection;
                cmd.CommandText = "ProductList '" + pdls.PID + "'";
                cmd.Prepare();
                cmd.Prepare();
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        productLists.Add(new Product()
                        {


                        PlID = Convert.ToInt32(reader["PlId"]),
                        SizeName = Convert.ToString(reader["SizeName"]),
                        Quantity = Convert.ToInt32(reader["Quantity"]),
                        Price = Convert.ToDecimal(reader["Price"]),
                        ImagePath = Convert.ToString(reader["ImagePath"]),
                        Comments = Convert.ToString(reader["Comments"])

                    });
                    }
                }

            }
            
            catch (Exception ex)
            {
                ex.Message.ToString();
            }
            finally
            {
                if (connection != null)
                    connection.Close();
            }
            return productLists;
        }


    }
}
