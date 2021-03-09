using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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

        [HttpGet]
        public async Task<List<Post>> ListAllPosts()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("posts")]
        public async Task<List<Post>> GetUserPosts()
        {
            var appUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return await _mediator.Send(new UserList.Query { AppUserId = appUserId });
        }

        [HttpPost()]
        public async Task<Post> Create(Post post)
        {
            post.AppUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return await _mediator.Send(new Add.Command { Post = post });
        }


    }
}
