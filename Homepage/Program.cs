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
        static CommandOption optionPort;
        static CommandLineApplication app;
        static int port = 0;

        public static void Main(string[] args)
        {
            // Read Command Line Arguments
            app = new CommandLineApplication();

            app.HelpOption();
            optionPort = app.Option("-p|--port <NUM>",
                "Port to serve Webpages From",
                CommandOptionType.SingleValue);

            app.OnExecute(Start);

            app.Execute(args);

            
        }

        public static void Start()
        {
            port = optionPort.HasValue()
                ? Convert.ToInt32(optionPort.Value())
                : 0;

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
