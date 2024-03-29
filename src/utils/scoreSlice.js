import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  row1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  row2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  row3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  row4: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  penalties: [0, 0, 0, 0],
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    toggleBoxValue: (state, action) => {
      // Use a payload like this: {rowSpot: 'row1', numberIndex: 3} to access row 1, 4th number (which is 5 because it starts at 2)
      const { payload } = action;
      const { rowSpot, numberIndex } = payload;
      const boxesCheckedToTheRight = state[rowSpot]
        .slice(numberIndex + 1)
        .find((item) => item); // used to check if any boxes are checked off to the RIGHT--making this selection invalid per the rules

      console.log(boxesCheckedToTheRight);

      if (boxesCheckedToTheRight) {
        alert(
          "You already checked a box farther right, so this is blocked off."
        );
      } else if (
        (numberIndex === 10 &&
          state[rowSpot].reduce((prev, current) => prev + current) > 4) ||
        numberIndex < 10
      ) {
        if (state[rowSpot][numberIndex]) {
          state[rowSpot][numberIndex] = 0;
        } else {
          state[rowSpot][numberIndex] = 1;
        }
      }
    },
    resetBoard: (state) => {
      // Just "state = initialState" didn't work. Seems to work separated out though.
      state.row1 = initialState.row1;
      state.row2 = initialState.row2;
      state.row3 = initialState.row3;
      state.row4 = initialState.row4;
      state.penalties = initialState.penalties;
    },
  },
});

export const { toggleBoxValue, resetBoard } = scoreSlice.actions;

export default scoreSlice.reducer;

// stored in redux store.
// stored in state.score.whatever. i.e., state.score.row2[5]
