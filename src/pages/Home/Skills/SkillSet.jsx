import React from 'react';
import styled from 'styled-components';
import { SectionText } from './../../../components/ui/Text';

// Styled components for SkillSet
const SkillSetContainer = styled.div`
  margin-bottom: 2rem; // Spacing between skill sets
`;

const SkillSetTitle = styled(SectionText)`
`;

const SkillList = styled.ul`
  list-style: none; // Remove bullet points
  padding: 0; // Remove padding
  margin: 0.5rem 0 0 0; // Add margin at the top
`;

const SkillListItem = styled(SectionText)`
  font-size: 1rem; // Skill item font size
  color: ${({ theme }) => theme.colors.light.primaryText}; // Skill item color

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText}; // Dark mode skill item color
  }
`;

const SkillSet = ({ title, children }) => (
  <SkillSetContainer>
    <SkillSetTitle as="div">{title}</SkillSetTitle>
    <SkillList>
      {children}
    </SkillList>
  </SkillSetContainer>
);

// Skill component for individual skills
export const Skill = ({ children }) => (
  <SkillListItem as="li">{children}</SkillListItem>
);

export default SkillSet;
