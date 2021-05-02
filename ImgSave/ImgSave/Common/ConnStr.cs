using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using ImgSave.Common;
using ImgSave;

namespace ImgSave.Common
{
    public class ConnStr
    {
        public readonly DbContext _context;
        public ConnStr(DbContext context)
        {
            _context = context;
            _context.GetConnection();
        }
        public static string GetDefaultConnectionString()
        {
            return Startup.connectionString;
        }
        public static object DataAccess { get; private set; }

        public static SqlConnection OpenConnection()
        {
            try
            {
                SqlConnection cn = new DbContext(GetDefaultConnectionString()).GetConnection();
                if (cn.State == ConnectionState.Closed)
                {
                    cn.Open();
                }
                return cn;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        public static SqlConnection CloseConnection()
        {
            SqlConnection cn = new DbContext(GetDefaultConnectionString()).GetConnection();
            try
            {
                if (cn.State == ConnectionState.Open)
                {
                    cn.Close();
                }
            }
            catch (Exception ex)
            {
            }
            return cn;
        }
        public static int ExecuteQuery(string strQuery)
        {
            SqlConnection cn;
            SqlCommand cmd;
            cn = OpenConnection();
            int intRows = 0;
            try
            {
                cmd = new SqlCommand(strQuery, cn);
                intRows = cmd.ExecuteNonQuery();
                return intRows;
            }
            catch (Exception ex)
            {
            }
            return intRows;
        }
        public static DataTable GetDataTable(string query)
        {
            SqlConnection cn = new SqlConnection();

            cn = OpenConnection();
            SqlDataAdapter da = new SqlDataAdapter(query, cn);

            var dt = new DataTable();
            try
            {
                da.Fill(dt);
                cn.Close();
            }
            catch (Exception ex)
            {
            }
            finally
            {
                CloseConnection();
            }
            return dt;
        }


            public static DataSet GetDataSet(string query)
        {
            SqlConnection cn = new SqlConnection();

            cn = OpenConnection();
            SqlDataAdapter da = new SqlDataAdapter(query, cn);


            var ds = new DataSet();
            try
            {
                da.Fill(ds);
                cn.Close();
            }
            catch (Exception ex)
            {
            }
            finally
            {
                CloseConnection();
            }
            return ds;
        }
    }
}

