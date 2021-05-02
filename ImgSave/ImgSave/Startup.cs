using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImgSave.Models;
using ImgSave.Common;
using ImgSave.Services;
using Microsoft.EntityFrameworkCore;
using DbContext = ImgSave.Common.DbContext;
using GarmentWebSite.Services;
using System.IO;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

namespace ImgSave
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public static string connectionString { get; private set; }
    

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => {
                options.AddPolicy("cors", policy => {
                    policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });

            //Comment here

            services.AddMvc(option => option.EnableEndpointRouting = false);
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "simple/build";
            });


            services.AddControllersWithViews();
            connectionString = Configuration["ConnectionStrings:Myconnection"];
           
            services.AddTransient<DbContext>(_ => new DbContext(connectionString));
           
            services.AddDbContext<AppicationDbContext>(Options => Options.UseSqlServer(Configuration.GetConnectionString("Myconnection")));
          
            services.AddTransient<LoginService>();
            services.AddTransient<RegService>();
            
            services.AddTransient<ProductDetails_Service>();
            services.AddDistributedMemoryCache();
            services.AddSession(options => {
                options.Cookie.Name = ".CookieAuthentication.Session";
                options.IdleTimeout = System.TimeSpan.FromSeconds(30);
                options.Cookie.IsEssential = true;
            });
            services.AddAuthentication("CookieAuthentication")
                        .AddCookie("CookieAuthentication", config => {
                            config.Cookie.Name = "UserLoginCookie";
                            config.LoginPath = "/api/Login/UserLogin";
                        });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options =>
                options.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod());
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors("cors");
            app.UseRouting();
            app.UseAuthentication();
            app.UseSession();
            app.UseAuthorization();

            //And Here
            app.UseSpaStaticFiles();
            app.UseMvc();
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = Path.Join(env.ContentRootPath, "simple");

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Img}/{action=Index}/{id?}");
            });
        }
    }
}
