using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImgSave.Models;
using ImgSave.Common;
using System.Data.SqlClient;

namespace ImgSave.Services
{
    public class RegService
    {

        private readonly DbContext _context;


        public RegService(DbContext context)
        {
            _context = context;
            _context.GetConnection();
        }
        public string InsertReg(Registration reg)
        {
            SqlConnection connection = _context.GetConnection();
            try
            {

                connection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = connection;
                cmd.CommandText = "insert into User_tbl(Name,Email,Address,Password,PhoneNo,IsVerified,IsActive) VALUES(@Name,@Email,@Address,@Password,@PhoneNo,@IsVerified,@IsActive)";
                cmd.Prepare();
                cmd.Parameters.AddWithValue("@Name", reg.Name);
                cmd.Parameters.AddWithValue("@Email", reg.Email);
                cmd.Parameters.AddWithValue("@Address", reg.Address);
                cmd.Parameters.AddWithValue("@Password", reg.Password);
                cmd.Parameters.AddWithValue("@PhoneNo", reg.PhoneNo);
                cmd.Parameters.AddWithValue("@IsVerified", reg.IsVerified);
                cmd.Parameters.AddWithValue("@IsActive", reg.IsActive);
                cmd.ExecuteNonQuery();
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
            return "Done!";
        }
        public List<Registration> GetRegistrationDeatils()
        {
            SqlConnection connection = _context.GetConnection();
            List<Registration> registrations = new List<Registration>();
            try
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = connection;
                cmd.CommandText = "SELECT * FROM User_tbl";
                cmd.Prepare();
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        registrations.Add(new Registration()
                        {
                          
                           
                            Name = reader["Name"].ToString(),
                            Email = reader["Email"].ToString(),
                            Address = reader["Address"].ToString(),
                            Password = reader["Password"].ToString(),
                            PhoneNo = reader["PhoneNo"].ToString(),
                            UserId = Convert.ToInt32(reader["UserId"]),
                            IsVerified = Convert.ToBoolean(reader["IsVerified"]),
                            IsActive = Convert.ToBoolean(reader["IsActive"]),
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
                {
                    connection.Close();
                }
            }
            return registrations;
        }
    }
}
