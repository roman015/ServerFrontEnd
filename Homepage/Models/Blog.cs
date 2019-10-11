using System;

namespace Homepage.Models
{
    public class Blog
    {
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public string Tags { get; set; }
        public string Markdown { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string HTML { get; set; }
    }
}