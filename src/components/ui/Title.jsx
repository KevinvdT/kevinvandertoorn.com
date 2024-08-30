import styled from 'styled-components';

// Hero Title Component
export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light.primaryText};
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

// Section Title Component
export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.light.primaryText};
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.75rem;
  }
`;
