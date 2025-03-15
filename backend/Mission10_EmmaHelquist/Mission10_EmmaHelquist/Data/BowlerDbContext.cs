using Microsoft.EntityFrameworkCore;

namespace Mission10_EmmaHelquist.Data;

// Db context stuff and constructor
public class BowlerDbContext : DbContext
{
    public BowlerDbContext(DbContextOptions<BowlerDbContext> options) : base(options)
    {
        
    }
    
    public DbSet<Bowler> Bowlers { get; set; }
}