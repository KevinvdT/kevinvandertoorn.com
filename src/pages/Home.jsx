import React from 'react';
import Container from '../components/layout/Container';
import TwoCol from '../components/layout/TwoCol';
import { HeroTitle, SectionTitle } from '../components/ui/Title';
import { HeroText, SectionText } from '../components/ui/Text';

const Home = () => {
  return (
    <main>
      <Container>
        <HeroTitle>Good morning! I'm Kevin</HeroTitle>
        <HeroText>A web developer based in the Netherlands.</HeroText>
      </Container>

      <Container>
        <SectionTitle>My Story</SectionTitle>
        <TwoCol>
          <div>
            <SectionText>
              I'm a web developer from the Netherlands with 18+ years of experience...
            </SectionText>
          </div>
          <div>
            <SectionText>
              Outside of work, I enjoy strolling in Efteling, a Dutch park with a unique enchanting charm.
            </SectionText>
          </div>
        </TwoCol>
      </Container>

      <Container>
        <SectionTitle>Things I've Worked On</SectionTitle>
        <TwoCol fixed>
          <SectionText>Interactive website elements</SectionText>
          <SectionText>Employee dashboard</SectionText>
        </TwoCol>
      </Container>
    </main>
  );
};

export default Home;
