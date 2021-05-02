using ImgSave.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImgSave.Interfaces
{
   public interface ILogin
    {
        Login UserLogin(Login login);
    }
}
