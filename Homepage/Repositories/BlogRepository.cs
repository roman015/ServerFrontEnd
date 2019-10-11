using Homepage.Helpers;
using Homepage.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Homepage.Repositories
{
    public interface IBlogRepository
    {
        Blog FindLatestBlog();
        Blog FindSpecificBlog(string name);
        bool CreateBlog(string name, string title, string markdown, string tags, string summary);
    }

    public class BlogRepository : IBlogRepository
    {
        private readonly BlogContext Context;
        private readonly IBlogHelper BlogHelper;
        public BlogRepository(BlogContext Context, IBlogHelper BlogHelper)
        {
            this.Context = Context;
            this.BlogHelper = BlogHelper;
        }

        public bool CreateBlog(string name, string title, string markdown, string tags, string summary)
        {
            try
            {
                var blog = new Blog()
                {
                    Name = name,
                    Title = title,
                    Markdown = markdown,
                    Tags = tags,
                    Summary = summary
                };

                Context.Blogs.Add(blog);
                Context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return false;
            }
        }

        public Blog FindLatestBlog()
        {
            var blog = Context
                .Blogs
                .OrderBy(item => item.Created)
                .FirstOrDefault();

            if (blog != null)
                blog.HTML = BlogHelper.ConvertMarkdownToHtml(blog.Markdown);

            return blog;
        }

        public Blog FindSpecificBlog(string name)
        {
            var blog = Context
                .Blogs
                .Where(item => item.Name.Equals(name, StringComparison.CurrentCultureIgnoreCase))
                .FirstOrDefault();

            if (blog != null)
                blog.HTML = BlogHelper.ConvertMarkdownToHtml(blog.Markdown);

            return blog;
        }
    }
}