import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import BreakpointDebug from './components/ui/BreakpointDebug';
import Home from './pages/Home';
import i18next from 'i18next'; // Import i18next for language toggling

export default class App extends Component {
  // List of supported languages
  languages = ['en', 'nl', 'de', 'fr'];

  // Function to toggle through languages in the list
  toggleLanguage = () => {
    const currentLanguage = i18next.language;
    const currentIndex = this.languages.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % this.languages.length; // Cycle through languages
    const newLanguage = this.languages[nextIndex];
    i18next.changeLanguage(newLanguage);
  };

  // Set up the keydown event listener when the component mounts
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Clean up the event listener when the component unmounts
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Event handler for key presses
  handleKeyDown = (event) => {
    if (event.key === 't' || event.key === 'T') {
      this.toggleLanguage(); // Call toggleLanguage when 'T' is pressed
    }
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BreakpointDebug />
        <Home />
      </ThemeProvider>
    );
  }
}
