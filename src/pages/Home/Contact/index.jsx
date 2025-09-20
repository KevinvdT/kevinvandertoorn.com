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

const Footer = styled.div`
  background: #F5F5F7;
  @media (prefers-color-scheme: dark) {
    background: #0d0d0d;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-bottom: 60px;
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
  const isWebShareSupported = navigator.share && navigator.canShare;

  return (
    <Footer>
      <PageContainer>
        <Container id="contact">
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <ContactText>{t('contact.text')}</ContactText>

          <TwoCol aligntop style={{ marginBottom: '14px' }}>
            <div>
              <Label as="div">Connect</Label>
              <Email />
            </div>
            <div>
              <Label as="div">{t('contact.follow')}</Label>
              <div>
                <ButtonLinkedIn />
                <ButtonGithub />
              </div>
            </div>
          </TwoCol>
          {isWebShareSupported && (
            <TwoCol aligntop>
              <div>
                <Label as="div">{t('contact.share.title')}</Label>
                <ShareButton secondary iconBefore={<IoMdShare />} onClick={handleShare}>{t('contact.share.button')}</ShareButton>
              </div>
            </TwoCol>
          )}
        </Container>
      </PageContainer>
    </Footer >
  );
};

export default Contact;
