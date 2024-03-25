import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice";
import themeReducer from "./themes"


const appStore = configureStore({
    reducer:{
        cart:cartReducer,
        themes:themeReducer
    }
})

export default appStore;