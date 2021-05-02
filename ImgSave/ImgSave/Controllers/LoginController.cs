using GarmentWebSite.Services;
using ImgSave.Models;
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
    public class LoginController : ControllerBase
    {
        private readonly LoginService _loginContext;

        public LoginController(LoginService context)
        {
            _loginContext = context;

        }
        [HttpPost]
        [Route("UserLogin")]
        public IActionResult UserLogin(Login user)
        {
             Login isLogin = _loginContext.UserLogin(user);
          
               if (isLogin.UserId > 0)
               {

                HttpContext.Session.SetInt32("userID", isLogin.UserId);
                HttpContext.Session.SetString("userEmailID", user.Email);
                HttpContext.Session.SetString("UserPwd", user.Password);
                return Ok(new { usertype = isLogin.UserId });
               }
                else
               {
                 return Unauthorized();
                }
        }
    }
}


