import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    example: userReducer,
    user: userReducer,
  },
});

export default store;
