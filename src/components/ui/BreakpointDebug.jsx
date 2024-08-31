import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';  // Import your theme to use breakpoints

// Styled component for displaying the current breakpoint
const DebugWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.875rem;
  z-index: 1000; /* Ensure it's on top of other elements */
  pointer-events: none; /* Allow clicks to pass through */
`;

// Helper function to determine the current breakpoint
const getBreakpoint = (width) => {
  const breakpoints = {
    xs: parseInt(theme.breakpoints.xs),
    sm: parseInt(theme.breakpoints.sm),
    md: parseInt(theme.breakpoints.md),
    lg: parseInt(theme.breakpoints.lg),
  };

  if (width >= breakpoints.md) return 'lg';
  if (width >= breakpoints.sm) return 'md';
  if (width >= breakpoints.xs) return 'sm';
  return 'xs';
};

const BreakpointDebug = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(getBreakpoint(window.innerWidth));
  const [isVisible, setIsVisible] = useState(false); // State to toggle visibility

  useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(getBreakpoint(window.innerWidth));
    };

    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'd') {
        setIsVisible((prevVisible) => !prevVisible); // Toggle visibility on 'D' key press
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null; // Render nothing if not visible

  return <DebugWrapper>{`${currentBreakpoint}`}</DebugWrapper>;
};

export default BreakpointDebug;
