import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Slice.js";
import productReducer from "./productslice"
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product:productReducer
    },
})

export default store;