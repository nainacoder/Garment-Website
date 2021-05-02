using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace ImgSave.Common
{
    public class DbContext
    {
        public string ConnectionString { get; set; }
        public DbContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }
        public SqlConnection GetConnection()
        {
            return new SqlConnection(ConnectionString);
        }
    }
}
