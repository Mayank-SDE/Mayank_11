import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import policyReducer from './slices/policySlice';  // Import policy slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
    policy: policyReducer,  // Add policy reducer
  },
});
