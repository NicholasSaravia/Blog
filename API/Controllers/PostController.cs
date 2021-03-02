using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using A.L.Services.Posts;
using D.L.Models;
using MediatR;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IMediator _mediator;

        public PostController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("home")]
        public async Task<List<Post>> ListAllPosts()
        {
            return await _mediator.Send(new List.Query());
        }

    }
}
