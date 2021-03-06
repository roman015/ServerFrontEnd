using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using McMaster.Extensions.CommandLineUtils;

namespace Homepage
{
    public class Program
    {
        static CommandOption optionWwwRootPath;
        static CommandOption optionWwwRootDir;
        static CommandOption optionDatabaseConfigPath;
        static CommandOption optionPort;
        static CommandLineApplication app;
        static int port = 0;

        public static string DatabaseConfigPath {
            get {
                return optionDatabaseConfigPath.HasValue() 
                    ? optionDatabaseConfigPath.Value().ToString()
                    : string.Empty;
            }
        } 

        public static string WWWRootPath {
            get {
                return optionWwwRootPath.HasValue() 
                    ? optionWwwRootPath.Value().ToString()
                    : String.Empty;
            }
        }

        public static string WWWRootDir {
            get {
                return optionWwwRootDir.HasValue() 
                    ? optionWwwRootDir.Value().ToString()
                    : String.Empty;
            }
        }

        public static void Main(string[] args)
        {
            // Read Command Line Arguments
            app = new CommandLineApplication();

            app.HelpOption();
            optionPort = app.Option("-p|--port <NUM>",
                "Port to serve Webpages From",
                CommandOptionType.SingleValue);

            optionWwwRootPath = app.Option("-wp|--wwwrootPath <PATH>",
                "Virtual Path to serve static files from. Requires --wwwrootDir",
                CommandOptionType.SingleValue);

            optionWwwRootDir = app.Option("-wd|--wwwrootDir <PATH>",
                "Location of wwwroot Folder to serve static files",
                CommandOptionType.SingleValue);

            optionDatabaseConfigPath = app.Option("-d|--dbconfig <PATH>",
                "Location of Database Config Json File",
                CommandOptionType.SingleValue);

            app.OnExecute(Start);

            app.Execute(args);            
        }

        public static void Start()
        {
            port = optionPort.HasValue()
                ? Convert.ToInt32(optionPort.Value())
                : 80;

            CreateWebHostBuilder(port).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(int port) =>
            WebHost.CreateDefaultBuilder()
                .UseStartup<Startup>()
                .UseKestrel(options =>
                {
                    options.ListenLocalhost(port);
                });
    }
}
