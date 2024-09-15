import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Add this

// Import translation files
import translationEN from './translations/en.json';
import translationNL from './translations/nl.json';
import translationDE from './translations/de.json';
import translationDA from './translations/da.json';
import translationFR from './translations/fr.json';
import translationES from './translations/es.json';
import translationJA from './translations/ja.json';

const resources = {
  en: {
    translation: translationEN,
  },
  nl: {
    translation: translationNL,
  },
  de: {
    translation: translationDE,
  },
  da: {
    translation: translationDA,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
  ja: {
    translation: translationJA,
  },
};

i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Fallback to English if language not found
    debug: true, // Enable debug in the console

    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
