import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name : 'posts',
    initialState: {
        userPosts: [],
        allPosts: [],
        currentPost: {}
    },
    reducers: {
        setUserPosts: (state, action) => {
            state.userPosts = action.payload
        },
        addPost: (state, action ) => {
            state.userPosts.push(state.currentPost);
        },
        updateCurrentPost: (state, action) => {
            state.currentPost[action.payload.name] = action.payload.value
        }
    }
});

export const {setUserPosts, addPost, updateCurrentPost} = postSlice.actions;

export default postSlice.reducer;
