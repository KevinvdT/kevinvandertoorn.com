import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import TwoCol from '../../../components/layout/TwoCol';

// Styled components for ProjectItem
const ProjectItemContainer = styled(TwoCol)`
  column-gap: 54px; // Adjust the spacing between the image and content
  row-gap: 27px;
  > * {
    flex: initial;  /* Ensures that each child (column) DOESN'T take up equal space */
  }

  margin-bottom: 75px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 60px;
  }
`;

const ProjectImage = styled.img`
  width: 356px; // Adjust width as needed
  height: auto; // Maintain aspect ratio
  flex-shrink: 0; // Prevent image from shrinking
  box-shadow: 0 4px 6px 0 rgba(0,0,0,0.12);
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 300px;
  }
`;

const ProjectContent = styled.div`
  flex-grow: 1; // Allow content to grow
  `;

const ProjectDescription = styled(SectionText)`
  font-size:  0.9375rem; // Description font size
  /* line-height: 1.71875rem; */
`;
const ProjectTitle = styled(SectionTitle)`
  font-size:  1.0625rem;
  /* font-weight: 600; */
`;


const ProjectItem = ({ imageSrc, title, description }) => (
  <ProjectItemContainer aligntop>
    <ProjectImage src={imageSrc} alt={title} />
    <ProjectContent>
      <ProjectTitle as="h3">{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectContent>
  </ProjectItemContainer>
);

export default ProjectItem;
