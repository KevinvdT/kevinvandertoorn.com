import styled from 'styled-components';

// Hero Text Component
export const HeroText = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.light.secondaryText};
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.secondaryText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.125rem;
  }
`;

// Section Text Component
export const SectionText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.light.secondaryText};
  margin-bottom: 1rem;
  line-height: 1.6;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.secondaryText};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;
