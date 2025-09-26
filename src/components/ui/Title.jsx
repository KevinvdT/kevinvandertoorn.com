import styled from 'styled-components';
import useScreenSize from '../../hooks/useScreenSize';

// Section Title Component as the base
export const SectionTitle = styled.h2`
  font-family: 'Inter Tight', 'Inter', 'Arial', sans-serif;
  font-size: ${({ isMobile }) => isMobile ? '1.75rem' : '2.375rem'};
  font-weight: 600;  // Semibold font weight
  color: ${({ theme }) => theme.colors.light.primaryText};
  margin-bottom: 1rem;
  line-height: 1.45; // Adjusted line-height for better readability

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
  }
`;

// Hero Title Component that inherits from SectionTitle
export const HeroTitle = styled(SectionTitle).attrs({
  as: 'h1'
})` 
  font-size: ${({ isMobile }) => isMobile ? '2.5rem' : '3.4375rem'};
  line-height: 1.3;
`;
