// src/redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null, // { name: 'John Doe', email: 'john@example.com', role: 'user' | 'admin' }
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action) => {
        const { name, email, role } = action.payload;
        state.isAuthenticated = true;
        state.user = { name, email, role }; // Role added here
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
      },
    },
  });

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
