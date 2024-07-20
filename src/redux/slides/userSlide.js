import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    hoten: 'Yeu Lan Anh',
}

const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    capnhathoten: (state, action) => {
        console.log(current(state))
        state.hoten = action.payload
    }
  }
});

export const { capnhathoten } = userSlide.actions

export default userSlide.reducer