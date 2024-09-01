import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { HeroTitle } from '../../../components/ui/Title';
import { HeroText } from '../../../components/ui/Text';
import ProfilePicture from './ProfilePicture';

const HeroIntro = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
    return 'Good morning!';
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon!';
  } else {
    return 'Good evening!';
  }
};

const Hero = () => {
  const greeting = getGreeting();

  return (
    <Container id="home">
      <TwoCol reverse>
        <ProfilePicture />
        <HeroIntro>
          <HeroTitle>{greeting}<br />I’m Kevin</HeroTitle>
          <HeroText>A web developer based in the Netherlands.</HeroText>
        </HeroIntro>
      </TwoCol>
    </Container>
  );
};

export default Hero;
