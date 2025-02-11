import { createSlice } from '@reduxjs/toolkit';

// Initial state: no user is logged in (guest)
const initialState = {
  user: null,        // Will hold user info when logged in
  isAdmin: false,    // True if logged in as admin
  isAuthenticated: false, // True if logged in as user or admin
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAdmin = false;
    },
    loginAdmin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAdmin = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isAdmin = false;
    },
  },
});

export const { loginUser, loginAdmin, logout } = authSlice.actions;
export default authSlice.reducer;
