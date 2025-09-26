import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Container, PageContainer } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import { ButtonLinkedIn, ButtonGithub } from "./Buttons";
import TwoCol from '../../../components/layout/TwoCol';
import Email from './Email';
import Button from '../../../components/ui/Button';
import { IoMdShare } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import useScreenSize from '../../../hooks/useScreenSize';

// Custom styled button that inherits from Button but uses SectionText colors
const ShareButton = styled(Button)`
  color: ${({ theme }) => theme.colors.light.secondaryText} !important;
  border: 1px solid ${({ theme }) => theme.colors.light.secondaryText} !important;

  &:hover {
    color: black !important;
  }

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.secondaryText} !important;
    border: 1px solid ${({ theme }) => theme.colors.dark.secondaryText} !important;

    &:hover {
      color: white !important;
    }
  }
`;

// Styled TwoCol with no row gap
const ContactTwoCol = styled(TwoCol)`
  row-gap: 0;
`;

// Styled divs with consistent spacing
const ContactCol = styled.div`
  margin-bottom: ${({ isMobile }) => isMobile ? '1rem' : '14px'};
`;

const Footer = styled.div`
  background: #F5F5F7;
  padding-bottom: ${({ isMobile }) => isMobile ? '60px' : '0'};
  @media (prefers-color-scheme: dark) {
    background: #0d0d0d;
  }
`;

const ContactText = styled(SectionText)`
  margin-bottom: 30px;
  white-space: pre-line;
`;

// New Label Component
export const Label = styled(SectionText)`
  color: ${({ theme }) => theme.colors.light.primaryText}; /* Set to primary color */
  font-weight: 600; /* Semibold font weight */

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText}; /* Set to primary color in dark mode */
  }
`;

const Contact = () => {
  const { t } = useTranslation(); // Get the translation function
  const { maxMobile } = useScreenSize();

  // Detect Apple platforms
  const isApplePlatform = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod|macintosh|mac os x/.test(userAgent);
  };

  // Get the appropriate share icon based on platform
  const getShareIcon = () => {
    return isApplePlatform() ? <IoShareOutline /> : <IoMdShare />;
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Kevin van der Toorn – Portfolio',
      text: 'Check out this portfolio website',
      url: 'https://kevinvandertoorn.com/'
    };

    try {
      await navigator.share(shareData);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Check if Web Share API is supported
  // const isWebShareSupported = navigator.share && navigator.canShare;
  // TODO: Enable button when design is ready
  const isWebShareSupported = false;

  return (
    <Footer isMobile={maxMobile}>
      <PageContainer>
        <Container id="contact">
          <SectionTitle isMobile={maxMobile}>{t('contact.title')}</SectionTitle>
          <ContactText>{t('contact.text')}</ContactText>

          <ContactTwoCol aligntop>
            <ContactCol isMobile={maxMobile}>
              <Label as="div">{t('contact.connect')}</Label>
              <Email />
            </ContactCol>
            <ContactCol isMobile={maxMobile}>
              <Label as="div">{t('contact.follow')}</Label>
              <div>
                <ButtonLinkedIn />
                <ButtonGithub />
              </div>
            </ContactCol>
          </ContactTwoCol>
          {isWebShareSupported && (
            <ContactTwoCol aligntop>
              <ContactCol isMobile={maxMobile}>
                <Label as="div">{t('contact.share.title')}</Label>
                <ShareButton secondary iconBefore={getShareIcon()} onClick={handleShare}>{t('contact.share.button')}</ShareButton>
              </ContactCol>
            </ContactTwoCol>
          )}
        </Container>
      </PageContainer>
    </Footer >
  );
};

export default Contact;
