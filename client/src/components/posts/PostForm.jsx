import React from 'react'
import { FormLocal } from '../common/FormLocal'
import { TextEditor } from '../common/TextEditor';
import {postFormData} from '../../jasonData/data'

export const PostForm = () => {
    return (
      <FormLocal title="Create a Post" body={postFormData}>
        <TextEditor></TextEditor>
      </FormLocal>
    );
}
