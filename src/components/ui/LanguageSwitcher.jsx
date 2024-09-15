import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitcherContainer = styled.div`
  position: absolute;
  top: 30px;
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
    isActive ? 'white' : theme.colors.light.secondaryText};
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  
  &:hover {
    background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.light.secondaryText : '#f0f0f0'};
  }

  @media (prefers-color-scheme: dark) {
    background: ${({ isActive, theme }) =>
    isActive ? theme.colors.dark.secondaryText : 'transparent'};
    color: ${({ isActive, theme }) =>
    isActive ? 'white' : theme.colors.dark.secondaryText};

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
    'EN',
    'NL',
    // 'DE',
  ];
  const currentLanguage = i18n.language; // Get the current language

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.toLowerCase()); // Switch to the selected language
  };

  return (
    <SwitcherContainer>
      {languages.map((language) => (
        <LanguageButton
          key={language}
          isActive={currentLanguage === language.toLowerCase()}
          onClick={() => handleLanguageChange(language)}
        >
          {language}
        </LanguageButton>
      ))}
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
