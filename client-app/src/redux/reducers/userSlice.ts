import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../interfaces/IUser'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: IUser
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer