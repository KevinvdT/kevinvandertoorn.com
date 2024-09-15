import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import smoothscroll from 'smoothscroll-polyfill';
import store from './redux/store';
import App from './App.jsx';
import './i18n';  // Import the i18n configuration

// Polyfill for smooth scrolling
smoothscroll.polyfill();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
