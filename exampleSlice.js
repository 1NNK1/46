import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../asyncActions/fetchData';

// Слайс пользователей
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearUsers: (state) => {
      state.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Произошла ошибка';
      });
  },
});

export const { clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
