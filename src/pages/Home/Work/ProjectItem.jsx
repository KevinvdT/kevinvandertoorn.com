import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import TwoCol from '../../../components/layout/TwoCol';
import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';
import ProjectDetails from '../../../components/ui/ProjectDetails';

// Styled components for ProjectItem
const ProjectItemContainer = styled(TwoCol)`
  column-gap: 54px; // Adjust the spacing between the image and content
  row-gap: 27px;
  > * {
    flex: initial;  /* Ensures that each child (column) DOESN'T take up equal space */
  }

  padding-top: 2.25rem; /* Adjusted padding */
  padding-bottom: 2.25rem; /* Adjusted padding */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 1.5rem; /* Adjusted padding */
    padding-bottom: 1.5rem; /* Adjusted padding */
  }
`;

const ProjectImage = styled.img`
  width: 356px; // Adjust width as needed
  height: auto; // Maintain aspect ratio
  flex-shrink: 0; // Prevent image from shrinking
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08); // More subtle shadow
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const ProjectContent = styled.div`
  flex-grow: 1; // Allow content to grow
  
`;

const ProjectDescription = styled(SectionText)`
  font-size: 0.9375rem; // Description font size
  white-space: pre-line; // Support newlines
  margin-bottom: 0.5em;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 1.71875rem;
  }
  // &::selection, & em::selection {
  //   background-color: ${({ color }) => color}55;
  // }
`;

const ProjectTitle = styled(SectionTitle)`
font-family: 'Inter','Arial',sans-serif;
  font-size:  1.0625rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 0.5rem;
  }
  /* font-weight: 600; */
  // &::selection {
  //   background-color: ${({ color }) => color}55;
  // }
`;

const ProjectActions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 10px;
`;

// ProjectItem component that can handle both single and multiple descriptions
const ProjectItem = ({ imageSrc, title, description, color, projectDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ProjectItemContainer aligntop>
        <ProjectImage src={imageSrc} alt={title} />
        <ProjectContent>
          <ProjectTitle as="h3" color={color}>{title}</ProjectTitle>
          {Array.isArray(description) ? (
            // If description is an array, map over it and render each item in its own ProjectDescription
            description.map((desc, index) => (
              <ProjectDescription key={index} color={color}>{desc}</ProjectDescription>
            ))
          ) : (
            // If description is a single string, render it in a single ProjectDescription
            <ProjectDescription color={color}>{description}</ProjectDescription>
          )}
          {projectDetails && (
            <ProjectActions>
              <Button onClick={openModal} secondary>
                Read More
              </Button>
            </ProjectActions>
          )}
        </ProjectContent>
      </ProjectItemContainer>

      {projectDetails && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={title}
        >
          <ProjectDetails {...projectDetails} />
        </Modal>
      )}
    </>
  );
};

export default ProjectItem;
