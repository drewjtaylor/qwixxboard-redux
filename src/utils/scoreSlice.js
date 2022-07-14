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
        toggleBoxValue: (state, action) => {
            // Use a payload like this: {rowSpot: 'row1', numberIndex: 3} to access row 1, 4th number (which is 5 because it starts at 2)
            const {payload} = action;
            const {rowSpot, numberIndex} = payload;

            if (state[rowSpot][numberIndex]) {
                state[rowSpot][numberIndex] = 0
            } else {state[rowSpot][numberIndex] = 1}
        },
        resetBoard: (state) => { //doesn't work yet
            state = initialState;
        }
    }
})

export const { toggleBoxValue, resetBoard } = scoreSlice.actions;

export default scoreSlice.reducer

// stored in redux store.
// stored in state.score.whatever. i.e., state.score.row2[5]