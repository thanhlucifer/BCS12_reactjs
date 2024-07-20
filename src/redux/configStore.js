import { configureStore } from '@reduxjs/toolkit'
import pokemonSlide from './slides/pokemonSlide'
import dienThoaiSlide from './slides/dienThoaiSlide'
import userSlide from './slides/userSlide'

export const store = configureStore({
  reducer: {
    hoTen: () => {
        return 'Pham Van Thanh'
    },
    pokemonSlide,
    dienThoaiSlide,
    userSlide
  },
})