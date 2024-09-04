import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import SkillSet, { Skill } from './SkillSet';
import useWindowWidth from './useWindowWidth';
// import theme from '../../../styles/theme';

const SkillSetsWrapper = styled.div`
  margin-top: 30px;
`;

const About = () => {
  const windowWidth = useWindowWidth(); // Get the current window width
  const xsBreakpoint = 436; // Convert the xs breakpoint to a number
  const customBreakpoint = 383; // Define the custom breakpoint for 383px

  // Determine if the screen width is smaller than the custom or xs breakpoint
  const isVerySmallScreen = windowWidth <= customBreakpoint;
  const isSmallScreen = windowWidth > customBreakpoint && windowWidth < xsBreakpoint;


  return (
    <Container id="skills">
      <SectionTitle>Tools I Rock With</SectionTitle>
      <SectionText>I have honed my expertise in the technologies listed below. I am also always excited to explore and master new tools and frameworks that can help me deliver even better solutions.</SectionText>

      <SkillSetsWrapper>
        <TwoCol aligntop fixed>

          <SkillSet title="Front-End">
            <Skill>HTML & CSS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>React & Redux</Skill>
          </SkillSet>
          <SkillSet title="Back-End">
            <Skill>Django (Python)</Skill>
            <Skill>{isVerySmallScreen ? 'Django REST Fw.' : isSmallScreen ? 'Django REST Framew.' : 'Django REST Framework'}
            </Skill>
          </SkillSet>
        </TwoCol>
        <SkillSet title="Data Science & Scientific Computing">
          <Skill>Python, Numpy, Matplotlib</Skill>
          <Skill>Julia</Skill>
          <Skill>Matlab / Octave</Skill>
        </SkillSet>
      </SkillSetsWrapper>
    </Container>
  );
};

export default About;
