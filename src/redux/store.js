import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    //     missions: ,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
