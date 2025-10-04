import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import SkillSet, { Skill } from './SkillSet';
import useScreenSize from '../../../hooks/useScreenSize';
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
// import IconMatlab from './icon-matlab.svg';

const SkillSetsWrapper = styled.div`
  margin-top: 30px;
`;

const Skills = () => {
  const { t } = useTranslation(); // Hook to get translation function
  const { isXs, maxMobile } = useScreenSize(); // Get screen size info

  // Debug logging (remove in production)
  console.log('isXs:', isXs);

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
              {isXs ? 'Django REST Fw.' : 'Django REST Framework'}
            </Skill>
            <Skill icon={IconDocker} iconColor='#1d63ed'>Docker</Skill>
          </SkillSet>
        </TwoCol>

        <SkillSet title={t('skills.datascience.title')}>
          <Skill icon={IconPython} iconColor='#409de3'>Python, Numpy, Matplotlib</Skill>
          <Skill icon={IconJulia} iconColor='#c869f4'>Julia</Skill>
          <Skill icon={IconMatlab} iconColor='#ff680a'>Matlab / Octave</Skill>
        </SkillSet>
      </SkillSetsWrapper>
    </Container>
  );
};

export default Skills;
