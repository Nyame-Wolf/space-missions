import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    // rockets: ,
    missions: missionsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
