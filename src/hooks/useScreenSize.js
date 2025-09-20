import { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    // Default fallback for SSR
    return 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Convert breakpoint strings to numbers for comparison
  const breakpoints = {
    xs: parseInt(theme.breakpoints.xs),
    sm: parseInt(theme.breakpoints.sm),
    md: parseInt(theme.breakpoints.md),
    lg: parseInt(theme.breakpoints.lg),
  };

  // Screen size checks
  const isXs = windowWidth < breakpoints.xs;
  const isSm = windowWidth >= breakpoints.xs && windowWidth < breakpoints.sm;
  const isMd = windowWidth >= breakpoints.sm && windowWidth < breakpoints.md;
  const isLg = windowWidth >= breakpoints.md && windowWidth < breakpoints.lg;
  const isXl = windowWidth >= breakpoints.lg;

  // Convenience methods
  const isMobile = windowWidth < breakpoints.sm;
  const isTablet = windowWidth >= breakpoints.sm && windowWidth < breakpoints.md;
  const isDesktop = windowWidth >= breakpoints.md;

  return {
    windowWidth,
    breakpoints,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useScreenSize;
