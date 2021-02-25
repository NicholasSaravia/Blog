import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {
      username: null,
      displayName: null,
      token: null,
      img: null
    }
  },
  reducers: {
    setUser: (state, action) => {
      console.log(state, action);
      state.info = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer        