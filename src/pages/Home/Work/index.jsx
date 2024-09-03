import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import ProjectItem from './ProjectItem';
import imgAh from './img/ah.svg';
import imgSaysimple from './img/saysimple.svg';

const ProjectItemsWrapper = styled.div`
  margin-top: 3rem;
`;


const About = () => {
  return (
    <Container id="work">
      <SectionTitle>Things I’ve Worked On</SectionTitle>

      <ProjectItemsWrapper>


        <ProjectItem
          imageSrc={imgSaysimple}
          title="Interactive website elements"
          description="Create and implement interactive components for a company's website, improving user experience and functionality. Work on projects for prominent clients, contributing to responsive and accessible web design. Collaborate with cross-functional teams, share knowledge, and develop reusable components to enhance efficiency within the engineering department."
        />
        <ProjectItem
          imageSrc={imgAh}
          title="Employee dashboard"
          description="Design and implement a dynamic dashboard display system for the staff room, enhancing communication and real-time information sharing. Develop responsive and visually engaging signage that integrates seamlessly with existing systems. Collaborate with IT and design teams to ensure smooth deployment, and create reusable components for easy updates and maintenance."
        />
      </ProjectItemsWrapper>
    </Container>
  );
};

export default About;
