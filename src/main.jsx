import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import smoothscroll from 'smoothscroll-polyfill';
import store from './redux/store';
import App from './App.jsx';
import './i18n';  // Import the i18n configuration
import ReactGA from 'react-ga4'; // Import react-ga4

// Initialize Google Analytics
ReactGA.initialize('G-6K881PRR63'); // Replace with your actual Measurement ID
ReactGA.send('pageview'); // Send initial pageview

// Polyfill for smooth scrolling
smoothscroll.polyfill();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
