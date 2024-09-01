import React from 'react';
import styled from 'styled-components';
import { PageContainer, Container } from '../../components/layout/Container';
import Divider from '../../components/layout/Divider';
import TwoCol from '../../components/layout/TwoCol';
import { SectionTitle } from '../../components/ui/Title';
import { SectionText } from '../../components/ui/Text';
import Menu from '../../components/ui/Menu';
import Hero from './Hero';
import Contact from './Contact';

const HeroIntro = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  
  }
`;
const Home = () => {
  return (
    <>
      <PageContainer>
        <Menu />
        <Hero />
        <Divider />
        <Container id="about">
          <TwoCol>
            <div>
              Photos
            </div>
            <div>
              <SectionTitle>My Story</SectionTitle>
              <SectionText>
                I’m a web developer from the Netherlands with 18+ years of experience, starting with MS Frontpage back in the day and continually advancing since then.
              </SectionText>
              <SectionText>
                I’m now working with React and Django to create dynamic web solutions. I’m also always exploring new tools to deliver exceptional results.
              </SectionText>
              <SectionText>
                Outside of work, I enjoy strolling in Efteling, a Dutch park with an  unique enchanting charm. I also like to learn (human) languages.
              </SectionText>
            </div>
          </TwoCol>
        </Container>

        <Divider />

        <Container id="work">
          <SectionTitle>Things I’ve Worked On</SectionTitle>

          <SectionText>Interactive website elements</SectionText>
          <SectionText>Employee dashboard</SectionText>

        </Container>
        <Divider />
        <Container id="skills">
          <SectionTitle>Tools I Rock With</SectionTitle>
          <SectionText>I have honed my expertise in the technologies listed below. I am also always excited to explore and master new tools and frameworks that can help me deliver even better solutions.</SectionText>
        </Container>
      </PageContainer>
      <Contact />
    </>
  );
};

export default Home;
