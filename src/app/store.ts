import { configureStore } from "@reduxjs/toolkit"
import comicsReducer from "../features/comics/comicsSlice"
import offsetReducer from "../features/offset/offsetSlice"
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({
    reducer: {
        comics: comicsReducer,
        offset: offsetReducer,
        itemsCart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>