// TODO: This is a draft implementation and yet to be completed
import { useState, useEffect } from 'react';

const useColorScheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // Default fallback for SSR
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    // Listen for changes to the color scheme preference
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup the event listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Color scheme values
  const colorScheme = isDark ? 'dark' : 'light';
  const isLight = !isDark;

  return {
    colorScheme,
    isDark,
    isLight,
    // For future manual toggle functionality
    toggleColorScheme: () => {
      // This will be implemented when we add manual theme control
      console.log('Manual color scheme toggle not yet implemented');
    },
  };
};

export default useColorScheme;
