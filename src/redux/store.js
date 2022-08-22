import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

const store = configureStore({
//   reducer: {
//     rockets: ,
//     missions: ,
//   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
