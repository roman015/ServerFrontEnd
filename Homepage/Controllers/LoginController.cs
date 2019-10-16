using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Homepage.Models;
using Homepage.Repositories;
using System.Net;
using System.IO;

namespace Homepage.Controllers
{
    [ApiController]
    public class LoginController : Controller
    {
        readonly string loginUrl = @"http://api.roman015.com/Authenticate/Login";

        [Route("api/Login")]
        [HttpPost]
        public ActionResult LoginUsingCredentials([FromBody]Credentials user)
        {
            var result = LoginAndGetToken(user.Email, user.Otp);

            if (!string.IsNullOrWhiteSpace(result))
            {
                return Ok(new 
                {
                    Token = result
                });
            }
            else
            {
                return StatusCode(500, "The Login Attempt Failed");
            }
        }

        string LoginAndGetToken(string Email, string Otp)
        {
            try
            {
                HttpWebRequest webRequest = (HttpWebRequest)WebRequest.Create(loginUrl);
                webRequest.Method = "POST";
                webRequest.UserAgent = "FactorioApiConsoleApp";
                webRequest.ContentType = "application/json";
                StreamWriter sw = new StreamWriter(webRequest.GetRequestStream());


                sw.WriteLine("{"
                    + "\"Email\":" + "\"" + Email + "\","
                    + "\"Otp\":" + "\"" + Otp + "\""
                    + "}");
                sw.Flush();

                Console.Write("Getting Token from server...");
                HttpWebResponse webResponse = (HttpWebResponse)webRequest.GetResponse();
                if (webResponse.StatusCode == HttpStatusCode.OK)
                {
                    // Get the token from the response
                    string token = new StreamReader(webResponse.GetResponseStream())
                                        .ReadToEnd()
                                        .Replace(Environment.NewLine, "")
                                        .Replace("{", "")
                                        .Replace("}", "")
                                        .Replace("\"", "")
                                        .Replace("token", "")
                                        .Replace(":", "")
                                        .Trim();
                    //Console.WriteLine("<" + token + ">");                    

                    return token;

                }
                else
                {
                    //Console.Error.WriteLine("Failed : Got response " + webResponse.StatusCode);
                    return string.Empty;
                }
            }
            catch (Exception e)
            {
                Console.Error.WriteLine(e.Message);
                return string.Empty;
            }
        }
    }

    public class Credentials
    {
        public string Email { get; set; }
        public string Otp { get; set; }
    }
}
