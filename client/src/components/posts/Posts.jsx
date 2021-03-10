import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { agent } from '../../api/agent'
import { setUserPosts } from '../../redux/slices/post';
import { Post } from './Post'

export const Posts = () => {

    const userPosts = useSelector(state => state.posts.userPosts);
    const dispatch = useDispatch();

    useEffect(() => {
      if (userPosts.length === 0) {
        agent.postActions.getUserPosts().then((posts) => {
            dispatch(setUserPosts(posts)) ;
        });
      }
    }, []);

    return (
      <div>
        {userPosts.map((p, i) => (
          <Post key={i} title={p.title} body={p.html}></Post>
        ))}
      </div>
    );
}
