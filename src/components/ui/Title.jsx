import React from 'react';
import styled from 'styled-components';
import useScreenSize from '../../hooks/useScreenSize';

// Base styled component without responsive logic
const BaseSectionTitle = styled.h2`
  font-family: 'Inter Tight', 'Inter', 'Arial', sans-serif;
  font-weight: 600;  // Semibold font weight
  color: ${({ theme }) => theme.colors.light.primaryText};
  margin-bottom: 1rem;
  line-height: 1.45; // Adjusted line-height for better readability

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
  }
`;

const BaseHeroTitle = styled(BaseSectionTitle).attrs({
  as: 'h1'
})` 
  line-height: 1.3;
`;

// Self-contained Section Title Component
export const SectionTitle = ({ children, ...props }) => {
  const { maxMobile } = useScreenSize();

  return (
    <BaseSectionTitle
      {...props}
      style={{
        fontSize: maxMobile ? '1.75rem' : '2.375rem',
        ...props.style
      }}
    >
      {children}
    </BaseSectionTitle>
  );
};

// Self-contained Hero Title Component
export const HeroTitle = ({ children, ...props }) => {
  const { maxMobile } = useScreenSize();

  return (
    <BaseHeroTitle
      {...props}
      style={{
        fontSize: maxMobile ? '2.5rem' : '3.4375rem',
        ...props.style
      }}
    >
      {children}
    </BaseHeroTitle>
  );
};
