import React from 'react';
import styled from 'styled-components';
import { PageContainer, Container } from '../../components/layout/Container';
import Divider from '../../components/layout/Divider';
import TwoCol from '../../components/layout/TwoCol';
import { SectionTitle } from '../../components/ui/Title';
import { SectionText } from '../../components/ui/Text';
import Menu from '../../components/ui/Menu';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';




const Home = () => {
  return (
    <>
      <PageContainer>
        <Menu />

        <Hero />
        <Divider />

        <About />
        <Divider />

        <Work />
        <Divider />

        <Skills />
      </PageContainer>
      <Contact />
    </>
  );
};

export default Home;
