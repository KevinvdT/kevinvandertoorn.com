import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset some basic elements */
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Inter', 'Arial', sans-serif;
  }

  *, html {
    scroll-behavior: smooth !important;
  }

  /* Remove default margin and padding */
  body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd {
    margin: 0;
    padding: 0;
  }

  /* Set a default body font and line height */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: 'Inter', 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.light.background};
    color: ${({ theme }) => theme.colors.light.primaryText};

    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) => theme.colors.dark.background};
      color: ${({ theme }) => theme.colors.dark.primaryText};
    }
  }

  /* Remove default styling for lists and form elements */
  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Reset table properties */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  /* Set typography for headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.light.secondaryText};

    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.colors.dark.secondaryText};
    }
  }
`;

export default GlobalStyle;
