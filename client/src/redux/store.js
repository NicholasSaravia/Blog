import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import postReducer from './slices/post';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer
  },
});