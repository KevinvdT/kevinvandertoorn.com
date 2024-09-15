import React from 'react';
import { PageContainer } from '../../components/layout/Container';
import Divider from '../../components/layout/Divider';
import Menu from '../../components/ui/Menu';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';
import LanguageSwitcher from '../../components/ui/LanguageSwitcher';

const Home = () => {
  return (
    <>
      <LanguageSwitcher />
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
