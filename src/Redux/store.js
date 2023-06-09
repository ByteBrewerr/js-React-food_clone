import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import productPopUpSlice from './slices/productPopUpSlice'
import cartSlice from './slices/cartSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        productPopUp: productPopUpSlice,
        cart: cartSlice,
        user: userSlice
    },
})