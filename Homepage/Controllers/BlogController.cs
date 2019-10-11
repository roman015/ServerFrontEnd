using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Homepage.Models;
using Homepage.Repositories;

namespace Homepage.Controllers
{
    [ApiController]
    public class BlogController : Controller
    {
        private readonly IBlogRepository blogRepository;

        public BlogController(IBlogRepository blogRepository)
        {
            this.blogRepository = blogRepository;
        }

        [Route("api/Blog/{blogName}")]
        [HttpGet]
        public Blog GetBlog(string blogName)
        {
            if (string.IsNullOrWhiteSpace(blogName))
            {
                return blogRepository.FindLatestBlog();
            }
            else
            {
                return blogRepository.FindSpecificBlog(blogName);
            }
        }
    }
}
