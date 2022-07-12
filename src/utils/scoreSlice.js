import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    penalties: [0, 0, 0, 0]
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        testToggler: (state) => {
            if (state.row1[0] === 1) {
                state.row1[0] = 0
            } else {
                state.row1[0] = 1
            }
        }
    }
})

export const {testToggler} = scoreSlice.actions;

export default scoreSlice.reducer