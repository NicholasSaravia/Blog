import React, { useState } from 'react'
import { FormLocal } from '../common/FormLocal'
import { TextEditor } from '../common/TextEditor';
import {postFormData} from '../../jasonData/data'

export const PostForm = () => {

    const [post, setPost] = useState({});
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(post);
    }
    const handleChange = (e) => {
      console.log(e);
      let postCopy = {...post};
      console.log(postCopy);
      postCopy[e.name] = e.value;
      setPost(postCopy);
    }


    return (
      <FormLocal title="Create a Post" body={postFormData} handleSubmit={handleSubmit} handleChange={handleChange}>
        <TextEditor handleChange={handleChange}></TextEditor>
      </FormLocal>
    );
}
