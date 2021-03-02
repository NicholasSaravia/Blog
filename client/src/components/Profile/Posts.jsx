import React, { useState } from 'react'

export const Posts = () => {

    const [posts, setPosts] = useState([1,2,3,4,5,6])

    return (
        <div>
        {posts.map(p => <div>{p}</div>)}
        </div>
    )
}
