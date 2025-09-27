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
import { FaLinkedin } from "react-icons/fa";
import useScreenSize from '../../../hooks/useScreenSize';


const HeroIntro = styled.div`
  margin-bottom: 25px;
  text-align: ${({ isMobile }) => isMobile ? 'center' : 'left'};
`;

const HeroContainer = styled(Container)`
  padding-top: ${({ isMobile }) => isMobile ? '10svh' : '150px'};
  padding-bottom: ${({ isMobile }) => isMobile ? '0' : '8.125rem'};
  height: ${({ isMobile }) => isMobile ? 'calc(100svh + 2px)' : 'auto'};
  justify-content: ${({ isMobile }) => isMobile ? 'center' : 'flex-start'};
  // border: 1px solid red;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 27px;
  gap: 1.3125rem;
  justify-content: ${({ isMobile }) => isMobile ? 'center' : 'flex-start'};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 45px;
  }
`;

const DownArrow = styled.div`
  @keyframes jumpInfinite {
    0% {
      transform: translateY(-10px);
    }
    30% {
      transform: translateY(20px);
    }
    70% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
  display: ${({ isMobile }) => isMobile ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  & > img {
    display: relative;
    width: 16px;
    animation: jumpInfinite 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const DownArrowText = styled.span`
  font-size: 0.75rem;
  // color: ${({ theme }) => theme.colors.light.secondaryText};
  font-weight: 500;
  text-align: center;
  animation: fadeInOut 6s infinite;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  color: #5D5D5D;
  font-weight: 500;
  @media (prefers-color-scheme: dark) {
    // color: ${({ theme }) => theme.colors.dark.secondaryText};
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
  const { maxMobile } = useScreenSize();

  const handleScrollToAbout = () => {
    dispatch(setActiveSection({ sectionId: 'about' })); // Use dispatch to call setActiveSection
  };

  const handleScrollToContact = () => {
    dispatch(setActiveSection({ sectionId: 'contact' })); // Use dispatch to call setActiveSection
  };

  const greetingKey = getGreetingKey(); // Get greeting key based on the time of day

  return (
    <HeroContainer id="home" isMobile={maxMobile}>
      <TwoCol reverse>
        <ProfilePicture />
        <HeroIntro isMobile={maxMobile}>
          <HeroTitle>{t(greetingKey)}<br />{t('hero.introduction')}</HeroTitle>
          <HeroText>{t('hero.developer_intro')}</HeroText>
          <ButtonRow isMobile={maxMobile}>
            {/* <Button onClick={handleScrollToContact}>{t('hero.contact_button')}</Button> */}
            <Button
              iconBefore={<FaRegFilePdf />}
              toggleIcons
              onClick={() => {
                const currentLang = i18next.language;
                const pdfPath = currentLang === 'nl'
                  ? '/resume/Kevin-van-der-Toorn-CV.pdf'
                  : '/resume/Kevin-van-der-Toorn-Resume.pdf';
                window.open(pdfPath, '_blank');
              }}
            >
              {/* <FaRegFilePdf /> */} {t('hero.resume_button')}
            </Button>
            <Button
              secondary
              iconBefore={<FaLinkedin />}
              onClick={() => {
                window.open('https://www.linkedin.com/in/kevinvandertoorn/', '_blank');
              }}
            >
              {t('hero.linkedin_button')}
            </Button>
          </ButtonRow>
        </HeroIntro>
      </TwoCol>
      <DownArrow isMobile={maxMobile} onClick={handleScrollToAbout}>
        <img src={downarrow} alt="Scroll down" />
        <DownArrowText>{t('hero.scroll_down')}</DownArrowText>
      </DownArrow>
    </HeroContainer>
  );
};

export default Hero;
