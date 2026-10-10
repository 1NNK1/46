import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/exampleSlice';

// Конфигурация хранилища
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
