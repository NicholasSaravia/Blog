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
        }
    }
});

export const {setUserPosts} = postSlice.actions;

export default postSlice.reducer;
