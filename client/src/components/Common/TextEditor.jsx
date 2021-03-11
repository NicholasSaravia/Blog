import React, { useEffect } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export const TextEditor = ({handleChange}) => {

  const changeHandler = (content) => {
    handleChange({name: "html", value: content});
  }

  return (
    <SunEditor
      enableToolbar
      showToolbar
      name="html"
      height="300"
      onChange={changeHandler}
    />
  );
};