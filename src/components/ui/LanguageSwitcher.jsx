import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import posthog from 'posthog-js';

const SwitcherContainer = styled.div`
  position: absolute;
  top: 34px;
  right: 20px;
  z-index: 1000; /* Ensures the switcher is always on top of other content */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px; /* Use gap to create space between the buttons */

  /* Switch to fixed when the viewport width is at least 1406px */
  @media (min-width: 1406px) {
    position: fixed; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 15px;
    right: 15px;
    gap: 4px; /* Adjust the gap for smaller screens */
  }
`;

const LanguageButton = styled.button`
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.light.secondaryText : 'transparent'};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.light.background : theme.colors.light.secondaryText};
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  text-transform: uppercase; /* Transform text to uppercase */
  
  &:hover {
    background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.light.secondaryText : '#f0f0f0'};
  }

  @media (prefers-color-scheme: dark) {
    background: ${({ isActive, theme }) =>
    isActive ? theme.colors.dark.secondaryText : 'transparent'};
    color: ${({ isActive, theme }) =>
    isActive ? theme.colors.dark.background : theme.colors.dark.secondaryText};

    &:hover {
      background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.dark.secondaryText : '#404040'};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.8rem;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = [
    'en',
    'nl',
    'de',
    // 'fr',
    // 'es',
    // 'da',
  ];
  const [currentLanguage, setCurrentLanguage] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    // Update currentLanguage whenever i18n.resolvedLanguage changes
    setCurrentLanguage(i18n.resolvedLanguage);

    // Track initial language detection
    posthog.capture('language_detected', {
      detected_language: i18n.resolvedLanguage,
      browser_language: navigator.language,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
  }, [i18n.resolvedLanguage]);

  const handleLanguageChange = (language) => {
    const previousLanguage = i18n.resolvedLanguage;
    i18n.changeLanguage(language); // Switch to the selected language

    // Track language change with PostHog
    posthog.capture('language_changed', {
      from_language: previousLanguage,
      to_language: language,
      timestamp: new Date().toISOString(),
      url: window.location.href
    });
  };

  return (
    <SwitcherContainer>
      {languages.map((language) => (
        <LanguageButton
          key={language}
          isActive={currentLanguage === language}
          onClick={() => handleLanguageChange(language)}
        >
          {language.toUpperCase()}
        </LanguageButton>
      ))}
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
