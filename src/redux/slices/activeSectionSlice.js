import { createSlice } from '@reduxjs/toolkit';
import i18next from 'i18next';
import posthog from 'posthog-js';
import { sectionUrlResolver } from '../../i18n';

const initialState = {
  activeSection: 'home',
  activeProjectId: null,
};

const activeSectionSlice = createSlice({
  name: 'activeSection',
  initialState,
  reducers: {
    setActiveSectionState: (state, action) => {
      state.activeSection = action.payload;
    },
    setActiveProjectId: (state, action) => {
      state.activeProjectId = action.payload;
    },
  },
});

const { setActiveProjectId } = activeSectionSlice.actions;
const { setActiveSectionState } = activeSectionSlice.actions;

// Keep DOM, history, and analytics effects out of the reducer.
export const setActiveSection = ({ sectionId, scroll = true, updateUrl = true }) => (dispatch) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  if (scroll) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const currentScrollPosition = window.scrollY;

    if (Math.abs(sectionTop - currentScrollPosition) > 1) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  dispatch(setActiveSectionState(sectionId));

  const translatedSectionName = i18next.t(`menu.${sectionId}`);
  const sectionPath = sectionUrlResolver.getSectionPath(sectionId, i18next.resolvedLanguage);
  if (updateUrl && sectionPath) {
    window.history.replaceState(window.history.state, '', sectionPath);
  }

  document.title = sectionId === 'home'
    ? 'Kevin van der Toorn'
    : `Kevin van der Toorn · ${translatedSectionName}`;

  posthog.capture('section_view', {
    section: sectionId,
    section_name: translatedSectionName,
    language: i18next.resolvedLanguage,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
};

export { setActiveProjectId };
export default activeSectionSlice.reducer;
