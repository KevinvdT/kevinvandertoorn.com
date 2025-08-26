import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import SkillSet, { Skill } from './SkillSet';
import useWindowWidth from './useWindowWidth';
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
import { FaDocker as IconDocker } from "react-icons/fa";
import { LuBraces as IconDrf } from "react-icons/lu";

const SkillSetsWrapper = styled.div`
  margin-top: 30px;
`;

const Skills = () => {
  const { t } = useTranslation(); // Hook to get translation function
  const windowWidth = useWindowWidth(); // Get the current window width
  const xsBreakpoint = 436; // Convert the xs breakpoint to a number
  const customBreakpoint = 383; // Define the custom breakpoint for 383px

  // Determine if the screen width is smaller than the custom or xs breakpoint
  const isVerySmallScreen = windowWidth <= customBreakpoint;
  const isSmallScreen = windowWidth > customBreakpoint && windowWidth < xsBreakpoint;

  return (
    <Container id="skills">
      <SectionTitle>{t('skills.title')}</SectionTitle>
      <SectionText>{t('skills.description')}</SectionText>

      <SkillSetsWrapper>
        <TwoCol aligntop fixed>
          <SkillSet title={t('skills.frontend.title')}>
            <Skill icon={IconHtml} iconColor='#e44d25'>HTML & CSS</Skill>
            <Skill icon={IconJs} iconColor='#f1dc55'>JavaScript</Skill>
            <Skill icon={IconReact} iconColor='#61dbfb'>React & Redux</Skill>
          </SkillSet>

          <SkillSet title={t('skills.backend.title')}>
            <Skill icon={IconDjango} iconColor='#20cc8a'>Django (Python)</Skill>
            <Skill icon={IconDrf} iconColor='#ec3939'>
              {isVerySmallScreen
                ? t('skills.backend.drf.shortest')
                : isSmallScreen
                  ? t('skills.backend.drf.short')
                  : t('skills.backend.drf.full')}
            </Skill>
            <Skill icon={IconDocker} iconColor='#1d63ed'>Docker</Skill>
          </SkillSet>
        </TwoCol>

        <SkillSet title={t('skills.datascience.title')}>
          <Skill icon={IconPython} iconColor='#409de3'>Python, Numpy, Matplotlib</Skill>
          <Skill icon={IconJulia} iconColor='#c869f4'>Julia</Skill>
          <Skill icon={IconMatlab} iconColor='#ff680a'><span style={{ fontVariant: 'small-caps' }}>Matlab</span> / Octave</Skill>
        </SkillSet>
      </SkillSetsWrapper>
    </Container>
  );
};

export default Skills;
