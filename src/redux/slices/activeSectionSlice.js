import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next'; // Import i18next
import sectionNames from '../../constants/sectionNames';
import posthog from 'posthog-js';

// TODO: Add a way to set the active section from the URL

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
        if (sectionId === 'home') {
          window.history.replaceState(null, '', '/');
          document.title = `Kevin van der Toorn`;
        } else {
          window.history.replaceState(null, '', `/${urlSectionName}`);
          document.title = `Kevin van der Toorn · ${translatedSectionName}`;
        }

        // Track section changes with PostHog
        posthog.capture('section_view', {
          section: sectionId,
          section_name: translatedSectionName,
          language: i18next.resolvedLanguage,
          url: window.location.href,
          timestamp: new Date().toISOString()
        });
      }
    },
  },
});

export const { setActiveSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;
