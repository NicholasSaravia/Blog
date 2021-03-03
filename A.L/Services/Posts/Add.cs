using System.Threading;
using System.Threading.Tasks;
using D.L.Models;
using MediatR;
using P.L.Context;

namespace A.L.Services.Posts
{
    public class Add
    {
        public class Command : IRequest<Post>
        {
            public Post Post
            {
                get;
                set;
            }
        }

        public class Handler : IRequestHandler<Command, Post>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Post> Handle(Command request, CancellationToken cancellationToken)
            {
                await _context.Posts.AddAsync(request.Post);
                _context.SaveChanges();
                return request.Post;
            }
        }
    }
}
