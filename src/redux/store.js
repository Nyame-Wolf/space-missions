import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rocketReducer from './rockets/rockets';

import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
