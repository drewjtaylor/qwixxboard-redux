import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from '../utils/scoreSlice';
import logger from 'redux-logger';
import undoable from 'redux-undo';

export const store = configureStore({
  reducer: {
    score: undoable(scoreReducer),
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([logger])
}
});
