using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_EmmaHelquist.Data;

namespace Mission10_EmmaHelquist.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlerDbContext _bowlerContext;
        // Controller
        // Load up the data
        public BowlerController(BowlerDbContext temp)
        {
            _bowlerContext = temp;
        }
        
        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var foodList = _bowlerContext.Bowlers.ToList();
            return (foodList);
        }
    }
}