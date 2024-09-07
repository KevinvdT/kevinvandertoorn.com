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
import downarrow from './downarrow.svg';

const HeroIntro = styled.div`
  margin-bottom: 25px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

const HeroContainer = styled(Container)`
  padding-top: 150px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 100vh;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 27px;
  gap: 1.3125rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

const DownArrow = styled.div`
  @keyframes jumpInfinite {
    0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(20px);
    }
    80% {
      transform: translateY(0);
    }
  }
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display:flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    margin-top: 30px;
      & > img {
        display: relative;
        width: 16px;
        animation: jumpInfinite 4s infinite;
      }
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
  const handleScrollToAbout = () => {
    setActiveSection({ sectionId: 'about' }); // Dispatch the action to scroll to the contact section
  };

  const handleScrollToContact = () => {
    setActiveSection({ sectionId: 'contact' }); // Dispatch the action to scroll to the contact section
  };

  const greeting = getGreeting();

  return (
    <HeroContainer id="home">
      <TwoCol reverse>
        <ProfilePicture />
        <HeroIntro>
          <HeroTitle>{greeting}<br />I’m Kevin</HeroTitle>
          <HeroText>A web developer based in the Netherlands.</HeroText>
          <ButtonRow>
            <Button onClick={handleScrollToContact}>Say “Hello”</Button>
            {/* <Button secondary onClick={() => window.open('/resume.pdf', '_blank')}>Résumé</Button> */}
          </ButtonRow>
        </HeroIntro>
      </TwoCol>
      <DownArrow><img src={downarrow} onClick={handleScrollToAbout} /></DownArrow>
    </HeroContainer>
  );
};

// Map dispatch to props
const mapDispatchToProps = {
  setActiveSection,
};

// Connect the component to the Redux store
export default connect(null, mapDispatchToProps)(Hero);
