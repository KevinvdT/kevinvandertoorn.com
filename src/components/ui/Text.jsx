import styled from 'styled-components';

// Section Text Component as the base
export const SectionText = styled.p`
  font-size: 1rem;
  font-weight: 500;  // Medium font weight
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

// Hero Text Component that inherits from SectionText without any additional styling
export const HeroText = styled(SectionText)``;
