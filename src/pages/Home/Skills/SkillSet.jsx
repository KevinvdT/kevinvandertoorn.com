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

const SkillItem = styled.li`
  display: flex;
  flex-direction: row;
`;

const SkillItemIcon = styled.div`
  line-height: 1.875rem;
  margin-right: 0.6rem;
  position: relative;
  top: 0.0775em;
  width: 1.05em;
  height: auto;
  
  & > svg {
    width: 1.05em;
    height: auto;
  }
`;

const SkillItemName = styled(SectionText)`
  font-size: 1rem; // Skill item font size
  color: ${({ theme }) => theme.colors.light.primaryText}; // Skill item color

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText}; // Dark mode skill item color
  }

  &::selection, & *::selection {
    background-color: ${({ color }) => color || 'inherit'}55;
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
export const Skill = ({ icon: Icon, iconColor, children }) => (
  <SkillItem>
    <SkillItemIcon >{Icon ? <Icon /> : null}</SkillItemIcon>
    <SkillItemName color={iconColor}>{children}</SkillItemName>
  </SkillItem>
);

export default SkillSet;
