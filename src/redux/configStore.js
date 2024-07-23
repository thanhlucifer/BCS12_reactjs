import { configureStore } from '@reduxjs/toolkit'
import pokemonSlide from './slides/pokemonSlide'
import dienThoaiSlide from './slides/dienThoaiSlide'
import userSlide from './slides/userSlide'
import xingauSlide from './slides/xingauSlide'

export const store = configureStore({
  reducer: {
    hoTen: () => {
        return 'Pham Van Thanh'
    },
    pokemonSlide,
    dienThoaiSlide,
    userSlide,
    xingauSlide
  },
})