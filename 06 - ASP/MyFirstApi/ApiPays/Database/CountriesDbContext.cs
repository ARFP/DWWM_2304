using ApiPays.Entity;
using Microsoft.EntityFrameworkCore;

namespace ApiPays.Database
{
    public class CountriesDbContext : DbContext
    {
       // IConfiguration appConfig;

        public DbSet<Country> Countries { get; set; }

        /*public CountriesDbContext(IConfiguration config)
        {
            appConfig = config;
        }*/

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // optionsBuilder.UseSqlServer(appConfig.GetConnectionString("Default"));

            optionsBuilder.UseSqlServer("Server=(LocalDb)\\mssqllocaldb;Database=db_countries");
        }
    }
}
