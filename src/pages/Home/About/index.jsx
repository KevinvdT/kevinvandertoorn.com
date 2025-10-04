import React from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next'; // Import Trans for rich text handling
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import Photos from './Photos';
import useScreenSize from '../../../hooks/useScreenSize';

// Styled components specific to About
const Emph = styled.em``;

const PlusSup = styled.sup`
  position: relative;
  top: 0.075em;
`;

const Efteling = styled.span`
  transition: color 0.3s;
  &:hover {
    color: #920e29;
    @media (prefers-color-scheme: dark) {
      color: #cd5b6a;
    }
  }
`;

const About = () => {
  const { t } = useTranslation();
  const { maxMobile } = useScreenSize();

  return (
    <Container id="about">
      <TwoCol reverse>
        <div>
          <SectionTitle>{t('about.title')}</SectionTitle>
          <SectionText>
            <Trans i18nKey="about.story">
              Web developer from the Netherlands with <em>18 years of experience</em>, starting with MS Frontpage back in the day and continually advancing since then.
            </Trans>
          </SectionText>
          <SectionText>
            <Trans i18nKey="about.uvp">
              I'm passionate about <em>solving complex problems with code</em> and delivering <em>innovative solutions</em> that help businesses grow.
            </Trans>
          </SectionText>
          <SectionText>
            <Trans i18nKey="about.skills">
              I'm now working with <em>React</em> and <em>Django</em> to create dynamic web solutions. I'm also always exploring new tools to deliver <em>exceptional results</em>.
            </Trans>
          </SectionText>
          <SectionText>
            <Trans i18nKey="about.hobbies" components={{ 1: <Efteling /> }} />
          </SectionText>
        </div>
        <Photos />
      </TwoCol>
    </Container>
  );
};

export default About;
