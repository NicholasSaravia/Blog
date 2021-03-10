import React, { useState } from "react";
import { FormLocal } from '../common/FormLocal'
import { TextEditor } from '../common/TextEditor';
import {postFormData} from '../../jasonData/data'
import { agent } from "../../api/agent";
import { useDispatch } from "react-redux";
import {addPost} from '../../redux/slices/post';

export const PostForm = () => {

    const [post, setPost] = useState({});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      agent.postActions.create(post).then((createdPost) => {
          console.log(createdPost);
          dispatch(addPost(post));
      });
    }
    const handleChange = (obj) => {
      let postCopy = {...post};
      console.log(`postCopy`, JSON.stringify(postCopy))
      postCopy[obj.name] = obj.value;
      console.log(`update`, JSON.stringify(postCopy));
      setPost(postCopy);
      console.log(`post: ${JSON.stringify(post)}`);
    }


    return (
      <FormLocal formTitle="Create a Post" body={postFormData} handleSubmit={handleSubmit} handleChange={handleChange}>
        <TextEditor onChange={handleChange}></TextEditor>
      </FormLocal>
    );
}
