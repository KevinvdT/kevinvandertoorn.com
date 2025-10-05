import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import smoothscroll from 'smoothscroll-polyfill';
import store from './redux/store';
import App from './App.jsx';
import './i18n';  // Import the i18n configuration
import ReactGA from 'react-ga4';
import { PostHogProvider } from 'posthog-js/react';

// Initialize Google Analytics
ReactGA.initialize('G-6K881PRR63'); // Replace with your actual Measurement ID
ReactGA.send('pageview'); // Send initial pageview

// Polyfill for smooth scrolling
smoothscroll.polyfill();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        defaults: '2025-05-24',
        capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
        debug: import.meta.env.MODE === 'development',
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </PostHogProvider>
  </StrictMode>,
);