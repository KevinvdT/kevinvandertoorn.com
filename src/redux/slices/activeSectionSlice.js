import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 'home', // Default active section
};

const activeSectionSlice = createSlice({
  name: 'activeSection',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;

      // Update the URL whenever the active section changes
      const url = action.payload === 'home' ? '/' : `/${action.payload}`;
      window.history.pushState(null, '', url);
    },
  },
});

export const { setActiveSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;
