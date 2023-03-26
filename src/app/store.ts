import { configureStore } from "@reduxjs/toolkit"
import comicsReducer from "../features/comics/comicsSlice"

export const store = configureStore({
    reducer: {
        comics: comicsReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>