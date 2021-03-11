import React, { useState } from "react";
import { FormLocal } from "../common/FormLocal";
import { TextEditor } from "../common/TextEditor";
import { postFormData } from "../../jasonData/data";
import { agent } from "../../api/agent";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updateCurrentPost } from "../../redux/slices/post";

export const PostForm = () => {
  const currentPost = useSelector((state) => state.posts.currentPost);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    agent.postActions.create(currentPost).then((createdPost) => {
      console.log(createdPost);
      dispatch(addPost());
    });
  };
  const handleChange = (obj) => {
    dispatch(updateCurrentPost({name: obj.name, value: obj.value}))
  };

  return (
    <FormLocal formTitle="Create Post" body={postFormData} handleSubmit={handleChange} handleChange={handleChange}>
      <TextEditor handleChange={handleChange}></TextEditor>
    </FormLocal>
  );
};
