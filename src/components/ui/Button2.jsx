// With slide effect, not working properly yet
// TODO: Fix the slide effect or delete file
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { LuExternalLink } from 'react-icons/lu';

/**
 * IconWrapper - Handles smooth transitions for button icons
 * 
 * When toggleIcons is enabled:
 * - Icons fade in/out with opacity transition
 * - Icons scale slightly for polished effect
 * - Width animates from auto to 0 for smooth space transitions
 * - Overflow hidden prevents content from showing during transitions
 */
const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  transition: all 0.3s ease; /* Smooth transition for all properties */
  opacity: ${({ visible }) => (visible ? 1 : 0)}; /* Fade in/out */
  transform: ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.8)')}; /* Scale effect */
  width: ${({ visible }) => (visible ? 'auto' : '0')}; /* Width animation for smooth space changes */
  overflow: hidden; /* Hide content during width transition */
  white-space: nowrap; /* Prevent text wrapping */
  flex-shrink: 0; /* Prevent shrinking in flex container */
  margin: 0; /* Remove default margins */
  padding: 0; /* Remove default padding */
`;

/**
 * TextWrapper - Ensures text content transitions smoothly
 * 
 * Provides smooth transitions for text positioning as icons toggle
 * and maintains consistent text layout during animations
 */
const TextWrapper = styled.span`
  transition: all 0.3s ease; /* Smooth transition for text positioning */
  white-space: nowrap; /* Prevent text wrapping */
  flex-shrink: 0; /* Prevent text from shrinking */
  display: inline-block; /* Better positioning control */
`;

/**
 * StyledButton - Main button component with toggleIcons support
 * 
 * Features:
 * - Dynamic width management for smooth icon transitions
 * - Secondary button variant support
 * - Dark mode support
 * - Smooth hover and active state transitions
 */
const StyledButton = styled.button`
  padding: 10px 20px; /* Padding for size and shape */
  border-radius: 30px; /* Rounded corners */
  font-size: 1rem; /* Font size */
  font-weight: 600; /* Semi-bold font weight */
  cursor: pointer; /* Cursor changes to pointer on hover */
  transition: all 0.3s ease; /* Smooth transition for hover effect */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Space between icons and text */
  height: 40px; /* Fixed height for consistency */
  width: ${({ buttonWidth }) => buttonWidth || 'auto'}; /* Dynamic width for toggleIcons */
  min-width: fit-content; /* Ensure button fits content */
  box-sizing: border-box; /* Include padding in width calculations */

  /* Primary/Secondary button styling */
  background-color: ${({ secondary }) =>
    secondary ? 'transparent' : '#006FD0'}; /* Blue background for primary, transparent for secondary */
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.light.primaryText : 'white'}; /* Text color based on variant */
  border: ${({ secondary, theme }) =>
    secondary ? `1px solid ${theme.colors.light.primaryText}` : 'none'}; /* Border for secondary variant */

  /* Hover state styling */
  &:hover {
    background-color: ${({ secondary }) =>
    secondary ? 'rgba(0, 0, 0, 0.1)' : '#0056b3'}; /* Darker blue on hover */
    color: ${({ secondary }) => (secondary ? 'black' : 'white')}; /* Text color on hover */
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    color: ${({ secondary, theme }) =>
    secondary ? theme.colors.dark.primaryText : 'white'}; /* Dark mode text colors */
    border: ${({ secondary, theme }) =>
    secondary ? `1px solid ${theme.colors.dark.primaryText}` : 'none'}; /* Dark mode borders */

    &:hover {
      background-color: ${({ secondary }) =>
    secondary ? 'rgba(255, 255, 255, 0.1)' : '#004494'}; /* Dark mode hover backgrounds */
      color: ${({ secondary, theme }) =>
    secondary ? 'white' : 'white'}; /* Dark mode hover text colors */
    }
  }
`;

/**
 * Button Component with ToggleIcons Feature
 * 
 * @param {React.ReactNode} children - Button text content
 * @param {boolean} secondary - Whether to use secondary button styling
 * @param {function} onClick - Click handler function
 * @param {React.ReactNode} iconBefore - Icon to show before text (normally visible)
 * @param {React.ReactNode} iconAfter - Icon to show after text (normally visible)
 * @param {boolean} externalLink - Whether to show external link icon
 * @param {boolean} toggleIcons - Whether to toggle icons on hover/click
 * @param {object} props - Additional props passed to button element
 */
const Button = ({ children, secondary, onClick, iconBefore, iconAfter, externalLink, toggleIcons = false, ...props }) => {
  // State for tracking hover and active states
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // State for managing button width when toggleIcons is enabled
  const [buttonWidth, setButtonWidth] = useState('auto');

  // State for storing measured icon widths
  const [beforeIconWidth, setBeforeIconWidth] = useState('auto');
  const [afterIconWidth, setAfterIconWidth] = useState('auto');

  // Ref for accessing the button DOM element
  const buttonRef = useRef(null);

  // Auto-generate external link icon if externalLink is true and no custom iconAfter provided
  const finalIconAfter = externalLink && !iconAfter ? <LuExternalLink /> : iconAfter;

  // Determine icon visibility based on toggleIcons prop and current state
  // When toggleIcons is true: show before icon normally, after icon on hover/active
  // When toggleIcons is false: show both icons normally (backward compatibility)
  const showBeforeIcon = toggleIcons ? (!isHovered && !isActive) : true;
  const showAfterIcon = toggleIcons ? (isHovered || isActive) : true;

  /**
   * Width Measurement Effect
   * 
   * When toggleIcons is enabled, we need to measure the actual icon widths
   * and button width to enable smooth transitions.
   */
  useEffect(() => {
    if (toggleIcons && buttonRef.current) {
      // Create a temporary hidden clone of the button to measure widths
      const tempButton = buttonRef.current.cloneNode(true);
      tempButton.style.position = 'absolute';
      tempButton.style.visibility = 'hidden';
      tempButton.style.width = 'auto';
      tempButton.style.height = 'auto';

      // Measure before icon width
      const beforeIcon = tempButton.querySelector('[data-icon="before"]');
      const afterIcon = tempButton.querySelector('[data-icon="after"]');

      if (beforeIcon) {
        beforeIcon.style.display = 'flex';
        beforeIcon.style.width = 'auto';
        beforeIcon.style.opacity = '1';
      }
      if (afterIcon) {
        afterIcon.style.display = 'none'; // Hide after icon for before measurement
      }

      document.body.appendChild(tempButton);
      const beforeWidth = beforeIcon ? beforeIcon.offsetWidth : 0;

      // Measure after icon width
      if (afterIcon) {
        afterIcon.style.display = 'flex';
        afterIcon.style.width = 'auto';
        afterIcon.style.opacity = '1';
      }
      if (beforeIcon) {
        beforeIcon.style.display = 'none'; // Hide before icon for after measurement
      }

      const afterWidth = afterIcon ? afterIcon.offsetWidth : 0;

      // Measure full button width (with both icons)
      if (beforeIcon) beforeIcon.style.display = 'flex';
      if (afterIcon) afterIcon.style.display = 'flex';

      const fullWidth = tempButton.offsetWidth;
      document.body.removeChild(tempButton);

      // Store measured widths
      setBeforeIconWidth(`${beforeWidth}px`);
      setAfterIconWidth(`${afterWidth}px`);
      setButtonWidth(`${fullWidth}px`);
    } else {
      // Normal behavior: let button size itself based on content
      setButtonWidth('auto');
      setBeforeIconWidth('auto');
      setAfterIconWidth('auto');
    }
  }, [toggleIcons, iconBefore, finalIconAfter]);

  // Mouse event handlers for tracking hover and active states
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <StyledButton
      ref={buttonRef}
      secondary={secondary}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      buttonWidth={buttonWidth} // Pass measured width for toggleIcons
      {...props}
    >
      {/* Before icon - shows normally when toggleIcons is false, toggles on hover/active when true */}
      {iconBefore && (
        <IconWrapper visible={showBeforeIcon} data-icon="before">
          {iconBefore}
        </IconWrapper>
      )}

      {/* Button text content with smooth transitions */}
      <TextWrapper>{children}</TextWrapper>

      {/* After icon - shows normally when toggleIcons is false, toggles on hover/active when true */}
      {finalIconAfter && (
        <IconWrapper visible={showAfterIcon} data-icon="after">
          {finalIconAfter}
        </IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
