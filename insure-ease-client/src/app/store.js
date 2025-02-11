import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import policyReducer from '../features/policies/policySlice';
import adminReducer from '../features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    policies: policyReducer,
    admin: adminReducer,
  },
});

export default store;
