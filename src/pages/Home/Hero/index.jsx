import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { useDispatch } from 'react-redux'; // Import useDispatch
import i18next from 'i18next';
import { FaRegFilePdf } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { Container } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { HeroTitle } from '../../../components/ui/Title';
import { HeroText } from '../../../components/ui/Text';
import Button from '../../../components/ui/Button';
import ProfilePicture from './ProfilePicture';
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
    padding: 0;
    justify-content: center;
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

const getGreetingKey = () => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
    return 'hero.greeting.morning';
  } else if (hour >= 12 && hour < 18) {
    return 'hero.greeting.afternoon';
  } else {
    return 'hero.greeting.evening';
  }
};

const Hero = () => {
  const { t } = useTranslation(); // Hook to get translation function
  const dispatch = useDispatch(); // Initialize useDispatch

  const handleScrollToAbout = () => {
    dispatch(setActiveSection({ sectionId: 'about' })); // Use dispatch to call setActiveSection
  };

  const handleScrollToContact = () => {
    dispatch(setActiveSection({ sectionId: 'contact' })); // Use dispatch to call setActiveSection
  };

  const greetingKey = getGreetingKey(); // Get greeting key based on the time of day

  return (
    <HeroContainer id="home">
      <TwoCol reverse>
        <ProfilePicture />
        <HeroIntro>
          <HeroTitle>{t(greetingKey)}<br />{t('hero.introduction')}</HeroTitle>
          <HeroText>{t('hero.developer_intro')}</HeroText>
          <ButtonRow>
            {/* <Button onClick={handleScrollToContact}>{t('hero.contact_button')}</Button> */}
            <Button onClick={() => {
              const currentLang = i18next.language;
              const pdfPath = currentLang === 'nl'
                ? '/resume/Kevin-van-der-Toorn-CV.pdf'
                : '/resume/Kevin-van-der-Toorn-Resume.pdf';
              window.open(pdfPath, '_blank');
            }}>
              {/* <FaRegFilePdf /> */} {t('hero.resume_button')} <LuExternalLink />
            </Button>
          </ButtonRow>
        </HeroIntro>
      </TwoCol>
      <DownArrow><img src={downarrow} onClick={handleScrollToAbout} alt="Scroll down" /></DownArrow>
    </HeroContainer>
  );
};

export default Hero;
