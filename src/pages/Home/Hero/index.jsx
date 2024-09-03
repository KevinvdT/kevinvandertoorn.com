import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { HeroTitle } from '../../../components/ui/Title';
import { HeroText } from '../../../components/ui/Text';
import Button from '../../../components/ui/Button';
import ProfilePicture from './ProfilePicture';
// import { setActiveSection } from '../../../redux/slices/activeSectionSlice'; // Import the Redux action
import { setActiveSection } from '../../../redux/slices/activeSectionSlice';

const HeroIntro = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
    return 'Good Morning!';
  } else if (hour >= 12 && hour < 18) {
    return 'Good Afternoon!';
  } else {
    return 'Good Evening!';
  }
};

const Hero = ({ setActiveSection }) => {
  const handleScrollToContact = () => {
    setActiveSection({ sectionId: 'contact' }); // Dispatch the action to scroll to the contact section
  };

  const greeting = getGreeting();

  return (
    <Container id="home">
      <TwoCol reverse>
        <ProfilePicture />
        <HeroIntro>
          <HeroTitle>{greeting}<br />I’m Kevin</HeroTitle>
          <HeroText>A web developer based in the Netherlands.</HeroText>
          <Button onClick={handleScrollToContact}>Say “Hello”</Button> <Button secondary onClick={() => window.open('/resume.pdf', '_blank')}>Résumé</Button>
        </HeroIntro>
      </TwoCol>
    </Container>
  );
};

// Map dispatch to props
const mapDispatchToProps = {
  setActiveSection,
};

// Connect the component to the Redux store
export default connect(null, mapDispatchToProps)(Hero);
