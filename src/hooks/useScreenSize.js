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

  // Convenience max/min methods
  const maxMobile = windowWidth < breakpoints.sm;  // Same as isMobile
  const maxTablet = windowWidth < breakpoints.md;
  const maxDesktop = windowWidth < breakpoints.lg;
  const minMobile = windowWidth >= breakpoints.xs;
  const minTablet = windowWidth >= breakpoints.sm;
  const minDesktop = windowWidth >= breakpoints.md;

  // "Size or smaller" checks (equivalent to max-width media queries)
  const maxXs = windowWidth <= breakpoints.xs;
  const maxSm = windowWidth <= breakpoints.sm;
  const maxMd = windowWidth <= breakpoints.md;
  const maxLg = windowWidth <= breakpoints.lg;

  // "Size or larger" checks (equivalent to min-width media queries)
  const minXs = windowWidth >= breakpoints.xs;
  const minSm = windowWidth >= breakpoints.sm;
  const minMd = windowWidth >= breakpoints.md;
  const minLg = windowWidth >= breakpoints.lg;

  return {
    windowWidth,
    breakpoints,
    // Exact size checks
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    // Convenience methods
    isMobile,
    isTablet,
    isDesktop,
    // Convenience max/min methods
    maxMobile,
    maxTablet,
    maxDesktop,
    minMobile,
    minTablet,
    minDesktop,
    // "Size or smaller" checks (max-width equivalent)
    maxXs,
    maxSm,
    maxMd,
    maxLg,
    // "Size or larger" checks (min-width equivalent)
    minXs,
    minSm,
    minMd,
    minLg,
  };
};

export default useScreenSize;
