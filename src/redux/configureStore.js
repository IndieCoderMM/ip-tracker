import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientState/client';
import queryReducer from './queryState/query';

export default configureStore({
  reducer: {
    client: clientReducer,
    query: queryReducer,
  },
});
