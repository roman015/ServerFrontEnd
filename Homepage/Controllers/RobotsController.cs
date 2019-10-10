using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Homepage.Controllers
{    
    [ApiController]
    public class RobotsController : Controller
    {
        // This is just to keep search crawlers away
        [HttpGet("robots.txt")]
        public IActionResult GetRobotsSettings()
        {
            return Ok("User-agent: *\r\nDisallow: /");
        }
    }
}
