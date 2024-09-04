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
          title="Interactive Web Tools"
          description="Created interactive elements for Saysimple's website, including a pricing calculator based on configurable options, and a customizable chat widget generator. These tools enhance website functionality and offer practical solutions to boost client interaction and engagement."
        />
        <ProjectItem
          imageSrc={imgAh}
          title="Digital Signage Software"
          description="Created a versatile signage software for Albert Heijn's staff room display. The software showcases the current time and date, photo slideshows, announcements, and more, enhancing internal communication and creating a dynamic and informative environment for employees."
        />
      </ProjectItemsWrapper>
    </Container>
  );
};

export default About;
