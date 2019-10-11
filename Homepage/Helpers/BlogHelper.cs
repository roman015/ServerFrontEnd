using Markdig;

namespace Homepage.Helpers
{
    public interface IBlogHelper
    {
        string ConvertMarkdownToHtml(string markdown);
    }
    public class BlogHelper : IBlogHelper
    {
        public string ConvertMarkdownToHtml(string markdown)
        {
            return Markdown.ToHtml(markdown);
        }
    }
}