using System.Linq;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("[controller]")]
    //[ApiController]
    public class TestController : ControllerBase
    {
        private readonly DataContext _context;
        public TestController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public IActionResult getValues()
        {
            var values = _context.Values.ToList();
            return Ok(values);
        }

    }
}