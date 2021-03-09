import React, { useEffect, useState } from 'react'
import { agent } from '../../api/agent'
import { Post } from './Post'

export const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        agent.postActions.getUserPosts()
        .then((data) => {
            console.log(data);
            setPosts(data);
        });        
    }, [])

    return (
      <div>
        {posts.map((p, i) => (
          <Post key={i} title={p.title} body={p.html}></Post>
        ))}
      </div>
    );
}
