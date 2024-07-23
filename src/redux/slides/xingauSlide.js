import { createSlice } from '@reduxjs/toolkit'
import { getRandom } from '../../utils/utils';

// const randomXingau = () => {
//   return Math.floor(Math.random() * 6) + 1
// }

const initialState = {
  xingau: {
    xingau1: 2,
    xingau2: 3,
    xingau3: 6
  },
  tongsobanthang: 0,
  tongsobanchoi: 0,
  // tai = true, xiu = false
  banchon: true
}

const xingauSlide = createSlice({
  name: 'xingauSlide',
  initialState,
  reducers: {
    luachonnguoidung: (state, action) => {
      console.log(action)
      state.banchon = action.payload
    },
    playgame: (state, action) => {
      console.log(action)
      let xingau1 = getRandom()
      let xingau2 = getRandom()
      let xingau3 = getRandom()
      console.log(xingau1, xingau2, xingau3)
      state.xingau = {
        xingau1,
        xingau2,
        xingau3
      }
      state.tongsobanchoi++;
      let checked = (xingau1 + xingau2 + xingau3) > 11 ? true : false
      // if (state.banchon === checked) {
      //   state.tongsobanthang++
      // }
      checked == state.banchon && state.tongsobanthang++  
    },
  },
});

export const { luachonnguoidung, playgame } = xingauSlide.actions

export default xingauSlide.reducer