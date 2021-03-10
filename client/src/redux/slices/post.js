import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name : 'posts',
    initialState: {
        userPosts: [],
        allPosts: []
    },
    reducers: {
        setUserPosts: (state, action) => {
            state.userPosts = action.payload
        },
        addPost: (state, action ) => {
            state.userPosts.push(action.payload);
        }
    }
});

export const {setUserPosts, addPost} = postSlice.actions;

export default postSlice.reducer;
