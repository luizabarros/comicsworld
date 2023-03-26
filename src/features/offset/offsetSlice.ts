import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface OffsetState {
    currentOffset: number,
}

const initialState: OffsetState = {
    currentOffset: 0,
}

const offsetSlice = createSlice({
    name: "offset",
    initialState,
    reducers: {
        getCurrentOffset(state, action: PayloadAction<number>) {
            state.currentOffset = 10 * action.payload
        }
    }
})

export const { getCurrentOffset } = offsetSlice.actions
export default offsetSlice.reducer