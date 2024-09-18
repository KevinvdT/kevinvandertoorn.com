import React from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next'; // Import Trans for rich text handling
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import Photos from './Photos';

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

  return (
    <Container id="about">
      <TwoCol reverse>
        <div>
          <SectionTitle>{t('about.title')}</SectionTitle>
          <SectionText>
            <Trans
              i18nKey="about.story"
              components={{
                0: <em />
              }}
            />
          </SectionText>
          <SectionText>
            {t('about.skills')}
          </SectionText>
          <SectionText>
            {/* Use Trans and pass Efteling as a direct component */}
            <Trans i18nKey="about.hobbies" components={{ 0: <Efteling /> }} />
          </SectionText>
        </div>
        <Photos />
      </TwoCol>
    </Container>
  );
};

export default About;
