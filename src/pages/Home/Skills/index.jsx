import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import SkillSet, { Skill } from './SkillSet';
import useWindowWidth from './useWindowWidth';
// import theme from '../../../styles/theme';
import {
  FaReact as IconReact,
  FaHtml5 as IconHtml,
  FaPython as IconPython
} from "react-icons/fa";
import { IoLogoJavascript as IconJs } from "react-icons/io5";
import {
  SiJulia as IconJulia,
  SiOctave as IconMatlab,
  SiDjango as IconDjango
} from "react-icons/si";
import { LuBraces as IconDrf } from "react-icons/lu";

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
            <Skill icon={IconHtml} iconColor='#e44d25'>HTML & CSS</Skill>
            <Skill icon={IconJs} iconColor='#f1dc55'>JavaScript</Skill>
            <Skill icon={IconReact} iconColor='#61dbfb'>React & Redux</Skill>
          </SkillSet>
          <SkillSet title="Back-End">
            <Skill icon={IconDjango}>Django (Python)</Skill>
            <Skill icon={IconDrf}>{isVerySmallScreen ? 'Django REST Fw.' : isSmallScreen ? 'Django REST Framew.' : 'Django REST Framework'}
            </Skill>
          </SkillSet>
        </TwoCol>
        <SkillSet title="Data Science & Scientific Computing">
          <Skill icon={IconPython}>Python, Numpy, Matplotlib</Skill>
          <Skill icon={IconJulia}>Julia</Skill>
          <Skill icon={IconMatlab}>Matlab / Octave</Skill>
        </SkillSet>
      </SkillSetsWrapper>
    </Container>
  );
};

export default About;
