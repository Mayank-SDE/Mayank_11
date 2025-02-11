using Insure_ease_backend_ms.net.Models;
using Microsoft.EntityFrameworkCore;

namespace Insure_ease_backend_ms.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Payment> Payments { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("Server=localhost;Database=insurance_db;User=root;Password=yourpassword;SslMode=None;");
        }
    }
}
