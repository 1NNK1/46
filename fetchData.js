import { createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронное действие для загрузки пользователей
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
