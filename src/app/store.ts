import { configureStore } from "@reduxjs/toolkit"
import comicsReducer from "../features/comics/comicsSlice"
import offsetReducer from "../features/offset/offsetSlice"

export const store = configureStore({
    reducer: {
        comics: comicsReducer,
        offset: offsetReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>