import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './Slices/cartSlice'

export default configureStore({
  reducer: {
    cartDetails: cartSlice
  }
})