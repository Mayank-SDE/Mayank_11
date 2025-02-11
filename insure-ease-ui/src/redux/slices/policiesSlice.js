import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  policies: [],  // Holds all policies
};

const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {
    addPolicy: (state, action) => {
      state.policies.push(action.payload);
    },
    updatePolicy: (state, action) => {
      const index = state.policies.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.policies[index] = action.payload;
      }
    },
    deletePolicy: (state, action) => {
      state.policies = state.policies.filter(p => p.id !== action.payload);
    },
  },
});

export const { addPolicy, updatePolicy, deletePolicy } = policySlice.actions;
export default policySlice.reducer;
