using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Homepage.Controllers
{
    [ApiController]
    public class BlogController : Controller
    {

        [Route("api/Blog/{blogName}")]
        [HttpGet]
        public Blog GetBlog(string blogName)
        {
            if (string.IsNullOrWhiteSpace(blogName))
            {
                return new Blog(){
                    HTML = "The Latest Blog",
                    Title = "LATEST BLOG",
                    Summary = "Blog Summary"
                };
            }
            else
            {
                return new Blog(){
                    HTML = "Blog Titled "  + blogName,
                    Title = blogName.ToUpper(),
                    Summary = blogName + " Summary"
                };
            }
        }
    }

    public class Blog
    {
        public string HTML { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
    }
}
