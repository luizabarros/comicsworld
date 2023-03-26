import { createSlice } from "@reduxjs/toolkit"

interface OffsetState {
    currentOffset: number
}

const initialState: OffsetState = {
    currentOffset: 0
}

const offsetSlice = createSlice({
    name: "offset",
    initialState,
    reducers: {
        getCurrentOffset(state) {
            state.currentOffset += state.currentOffset + 8
        }
    }
})

export const { getCurrentOffset } = offsetSlice.actions
export default offsetSlice.reducer