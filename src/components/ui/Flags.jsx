import React from 'react';
import styled from 'styled-components';

// Styled component for the SVG element to make it inline
const StyledSVG = styled.svg`
  box-sizing: border-box;
  display: inline-block;  /* Allows the SVG to be used inline like text */
  vertical-align: -0.15em; /* Aligns the SVG vertically with the middle of the text */
  height: 1em;  /* Match the height of the current font size (1rem) */
  width: 1.5em;  /* Width adjusted to maintain a 3:2 ratio (1.5 times the height) */
  margin: 0 0.0em;
  @media (prefers-color-scheme: light) {
    outline: 1px solid ${({ theme }) => theme.colors.light.secundary};
  }
  border-radius: 3px; /* Adds a slight border radius to the corners */
`;

export const FlagNL = ({ width = 30, height = 20 }) => {
  return (
    <StyledSVG

      viewBox="0 0 3 2" /* ViewBox set to 3:2 ratio */
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3" height="2" fill="#21468B" /> {/* Blue stripe */}
      <rect width="3" height="1.333" fill="#FFFFFF" /> {/* White stripe */}
      <rect width="3" height="0.667" fill="#AE1C28" /> {/* Red stripe */}
    </StyledSVG>
  );
};
