import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from '../utils/scoreSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    score: scoreReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([logger])
}
});
