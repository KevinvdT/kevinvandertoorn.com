import React from 'react';
import styled from 'styled-components';
import { LuExternalLink } from 'react-icons/lu';

// Styled component for the button
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
  gap: 8px;

  /* Conditional styling based on the secondary prop */
  background-color: ${({ secondary }) =>
    secondary ? 'transparent' : '#006FD0'};
  color: ${({ secondary, theme }) =>
    secondary ? theme.colors.light.primaryText : 'white'};
  border: ${({ secondary, theme }) =>
    secondary ? `1px solid ${theme.colors.light.primaryText}` : 'none'};

  &:hover {
    background-color: ${({ secondary }) =>
    secondary ? 'rgba(0, 0, 0, 0.1)' : '#0056b3'}; /* Light transparent black for secondary on hover */
    color: ${({ secondary }) => (secondary ? 'black' : 'white')}; /* Keep text black on hover for secondary */
  }

  /* Adjust styles for dark mode */
  @media (prefers-color-scheme: dark) {
    color: ${({ secondary, theme }) =>
    secondary ? theme.colors.dark.primaryText : 'white'};
    border: ${({ secondary, theme }) =>
    secondary ? `1px solid ${theme.colors.dark.primaryText}` : 'none'};

    &:hover {
      background-color: ${({ secondary }) =>
    secondary ? 'rgba(255, 255, 255, 0.1)' : '#004494'}; /* Light transparent white for secondary on hover */
      color: ${({ secondary, theme }) =>
    secondary ? 'white' : 'white'}; /* Keep text white on hover for secondary */
    }
  }
`;

const Button = ({ children, secondary, onClick, iconBefore, iconAfter, externalLink, ...props }) => {
  // If externalLink is true, use LuExternalLink as iconAfter (unless iconAfter is explicitly provided)
  const finalIconAfter = externalLink && !iconAfter ? <LuExternalLink /> : iconAfter;

  return (
    <StyledButton secondary={secondary} onClick={onClick} {...props}>
      {iconBefore && iconBefore}
      {children}
      {finalIconAfter && finalIconAfter}
    </StyledButton>
  );
};

export default Button;
