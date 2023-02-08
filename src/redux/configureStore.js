import { configureStore } from '@reduxjs/toolkit';
import clientReducer from './clientState/client';

export default configureStore({
  reducer: {
    client: clientReducer,
  },
});
