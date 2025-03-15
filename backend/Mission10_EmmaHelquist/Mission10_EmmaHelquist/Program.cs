using Mission10_EmmaHelquist.Data;
using Microsoft.EntityFrameworkCore;
using Mission10_EmmaHelquist.Data;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.AddControllers(); // Ensure controllers are recognized
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure SQLite Database
builder.Services.AddDbContext<BowlerDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("BowlerConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Add to say we're okay with stuff coming in through this port
app.UseCors(x => x.WithOrigins("http://localhost:3000"));
app.UseAuthorization();

// Ensure Controller Routes Are Mapped
app.MapControllers();

app.Run();