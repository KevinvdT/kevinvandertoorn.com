import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const DetailsContainer = styled.div`
  color: #333;
  padding-bottom: 20px; /* Add bottom padding for better scrolling experience */
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #333;
  font-family: 'Inter', 'Arial', sans-serif;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
  color: #555;
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 24px 0 12px 0;
  color: #333;
  font-family: 'Inter', 'Arial', sans-serif;
`;

const TechTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background-color: #006FD0;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
`;

const FeatureList = styled.ul`
  text-align: left;
  padding-left: 20px;
  margin: 16px 0 24px 0;
  
  li {
    margin-bottom: 8px;
    line-height: 1.5;
    color: #555;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
  padding-bottom: 10px; /* Extra padding at bottom for better scrolling */
`;

const ProjectDetails = ({
  title,
  description,
  technologies = [],
  challenges = '',
  features = [],
  liveDemoUrl,
  codeUrl
}) => {
  return (
    <DetailsContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>

      {technologies.length > 0 && (
        <>
          <SectionTitle>| Technologies Used</SectionTitle>
          <TechTags>
            {technologies.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechTags>
        </>
      )}

      {challenges && (
        <>
          <SectionTitle>| Challenges & Solutions</SectionTitle>
          <ProjectDescription>{challenges}</ProjectDescription>
        </>
      )}

      {features.length > 0 && (
        <>
          <SectionTitle>| Key Features</SectionTitle>
          <FeatureList>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </FeatureList>
        </>
      )}

      {(liveDemoUrl || codeUrl) && (
        <ActionButtons>
          {liveDemoUrl && (
            <Button as="a" href={liveDemoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Button>
          )}
          {codeUrl && (
            <Button as="a" href={codeUrl} target="_blank" rel="noopener noreferrer" secondary>
              View Code
            </Button>
          )}
        </ActionButtons>
      )}
    </DetailsContainer>
  );
};

export default ProjectDetails;
