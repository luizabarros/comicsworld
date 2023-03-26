import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IComic } from "../../components/Card/Card"

interface ComicsState {
    comics: IComic[] | []
}

const initialState: ComicsState = {
    comics: [],
} 

const comicsSlice = createSlice({
    name: "comics",
    initialState,
    reducers: {
        getComics(state, action: PayloadAction<IComic[]>) {
            state.comics = action.payload
        }
    }
})

export const { getComics } = comicsSlice.actions
export default comicsSlice.reducer