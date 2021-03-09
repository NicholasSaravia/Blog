using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using D.L.Models;
using MediatR;
using P.L.Context;

namespace A.L.Services.Posts
{
    public class UserList
    {
        public class Query : IRequest<List<Post>>
        {
            public string AppUserId { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<Post>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Post>> Handle(Query request, CancellationToken cancellationToken)
            {
                return  _context.Posts.Where(x => x.AppUserId == request.AppUserId).ToList();
            }
        }
    }
}
