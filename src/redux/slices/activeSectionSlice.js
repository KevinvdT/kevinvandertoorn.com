import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next'; // Import i18next
import sectionNames from '../../constants/sectionNames';

const initialState = {
  activeSection: 'home',
};

// Utility function to convert special characters to URL-friendly format
const toUrlFriendly = (str) => {
  return str
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]/g, '-'); // Replace any non-alphanumeric characters with hyphens
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

        // Get the translated section name using the correct translation key
        const translatedSectionName = i18next.t(`menu.${sectionId}`);

        // Convert the translated section name to a URL-friendly format
        const urlSectionName = toUrlFriendly(translatedSectionName);

        // Update the URL and document title with the translated section name
        // @TODO: Replace pushState with replaceState to avoid polluting browser history
        if (sectionId === 'home') {
          window.history.pushState(null, '', '/');
          document.title = `Kevin van der Toorn`;
        } else {
          window.history.pushState(null, '', `/${urlSectionName}`);
          document.title = `Kevin van der Toorn · ${translatedSectionName}`;
        }
      }
    },
  },
});

export const { setActiveSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;
