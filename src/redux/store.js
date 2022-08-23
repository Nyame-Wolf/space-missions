import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    // rockets: ,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
