import styled from 'styled-components';

// Section Title Component as the base
export const SectionTitle = styled.h2`
  font-family: 'Inter Tight', 'Inter', 'Arial', sans-serif;
  font-size: 2.375rem;
  font-weight: 600;  // Semibold font weight
  color: ${({ theme }) => theme.colors.light.primaryText};
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.75rem;
  }
`;

// Hero Title Component that inherits from SectionTitle
export const HeroTitle = styled(SectionTitle).attrs({
  as: 'h1'
})` 
  font-size: 3.4375rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;
