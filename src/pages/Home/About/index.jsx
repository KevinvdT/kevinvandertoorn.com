import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import Photos from './Photos';

// Styled components specific to About
const Emph = styled.em`
  /* color: white;
  font-style: normal; */
`;


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
  return (
    <Container id="about">
      <TwoCol reverse>
        <div>
          <SectionTitle>My Story</SectionTitle>
          <SectionText>
            I’m a web developer from the Netherlands with <Emph>18<PlusSup>+</PlusSup> years of experience</Emph>, starting with MS Frontpage back in the day and continually advancing since then.
          </SectionText>
          <SectionText>
            I’m now working with <Emph>React and Django to create dynamic web solutions</Emph>. I’m also always exploring new tools to deliver exceptional results.
          </SectionText>
          <SectionText>
            Outside of work, I enjoy strolling in <Efteling>Efteling</Efteling>, a Dutch park with a unique enchanting charm. I also like to learn (human) languages.
          </SectionText>
        </div>
        <Photos />
      </TwoCol>
    </Container>
  );
};

export default About;
