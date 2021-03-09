import React, { useEffect, useState } from 'react'
import { agent } from '../../api/agent'

export const Posts = () => {

    const [posts, setPosts] = useState([1,2,3,4,5,6])

    useEffect(() => {
        agent.postActions.getUserPosts()
        .then((data) => {
            console.log(data);
            setPosts(data); 
        });        
    }, [])

    return (
        <div>
            {posts.map((p, i) => <div key={i}>{p.html}</div>)}
        </div>
    )
}
