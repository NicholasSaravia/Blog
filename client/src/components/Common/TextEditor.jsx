import React, {useState, useRef, useEffect} from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export const TextEditor = props => {
    const editorRef = useRef();

    const handleChange = (content) => {
        console.log(content);
    }

  return (
    <SunEditor
      ref={editorRef}
      enableToolbar
      showToolbar
      width="100%"
      height="100%"
      onChange={handleChange}
    />
  );
};