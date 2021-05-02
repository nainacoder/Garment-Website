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
    public class RegController : ControllerBase
    {
        private readonly RegService _registrationContext;

        public RegController(RegService context)
        {
            _registrationContext = context;

        }
        [HttpPost]      
        public string InsertReg(Registration registration)
        {
            return _registrationContext.InsertReg(registration);
        }
        [HttpGet]
        [Route("GetRegistrationDeatils")]
        public List<Registration> GetRegistrationDeatils()
        {
            return _registrationContext.GetRegistrationDeatils();
        }
    }
}
