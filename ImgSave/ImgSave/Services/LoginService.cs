using ImgSave.Common;
using ImgSave.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentWebSite.Services
{
    public class LoginService
    {

        private readonly DbContext _context;

        public LoginService(DbContext context)
        {
            _context = context;
            _context.GetConnection();
        }
        public Login UserLogin(Login login)
        {
            SqlConnection connection = _context.GetConnection();
            Login adminIsLogin = new Login();
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = connection;
                cmd.CommandText = "select UserId from User_tbl where Email= '" + login.Email + "' AND password= '" + login.Password + "'";
                cmd.Prepare();

                adminIsLogin.UserId = Convert.ToInt32(cmd.ExecuteScalar());
            }
            catch (Exception ex)
            {
                ex.Message.ToString();
            }
            finally
            {
                if (connection != null)
                {
                    connection.Close();
                }
            }
            return adminIsLogin;
        }
    }
}
