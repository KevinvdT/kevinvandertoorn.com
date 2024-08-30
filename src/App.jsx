import React, { Component } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

import Home from './pages/Home';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );
  }
}
