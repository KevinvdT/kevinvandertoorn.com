import { createSlice } from '@reduxjs/toolkit';
import sectionNames from '../../constants/sectionNames';

const initialState = {
  activeSection: 'home',
};

const activeSectionSlice = createSlice({
  name: 'activeSection',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      const { sectionId, scroll = true } = action.payload; // Destructure with a default value for `scroll`
      const section = document.getElementById(sectionId);

      if (section) {
        if (scroll) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          const currentScrollPosition = window.scrollY;

          // Scroll if not already at the section
          if (Math.abs(sectionTop - currentScrollPosition) > 1) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Update the active section in the state
        state.activeSection = sectionId;

        // Update the URL to reflect the current section
        if (sectionId === 'home') {
          window.history.pushState(null, '', '/');
          document.title = `Kevin van der Toorn`;
        } else {
          window.history.pushState(null, '', `${sectionId}`);
          document.title = `Kevin van der Toorn · ${sectionNames[sectionId]}`;
        }
      }
    },
  },
});

export const { setActiveSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;
