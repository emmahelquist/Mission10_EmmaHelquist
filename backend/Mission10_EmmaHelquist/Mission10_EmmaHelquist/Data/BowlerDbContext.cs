using Microsoft.EntityFrameworkCore;

namespace Mission10_EmmaHelquist.Data;

// Db context stuff and constructor
public class BowlerDbContext : DbContext
{
    public BowlerDbContext(DbContextOptions<BowlerDbContext> options) : base(options)
    {
        
    }
    
    // Table names
    public DbSet<Bowler> Bowlers { get; set; }
    public DbSet<Team> Teams { get; set; }
    
}