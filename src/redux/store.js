import { configureStore } from '@reduxjs/toolkit';
import activeSectionReducer from './slices/activeSectionSlice';

const store = configureStore({
  reducer: {
    activeSection: activeSectionReducer,
  },
});

export default store;
