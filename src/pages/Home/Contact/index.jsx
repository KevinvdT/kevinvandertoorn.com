import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { Container, PageContainer } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import { ButtonLinkedIn, ButtonGithub } from "./Buttons";

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

  return (
    <Footer>
      <PageContainer>
        <Container id="contact">
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <ContactText>{t('contact.text')}</ContactText>

          <div>
            <Label as="div">{t('contact.follow')}</Label>
            <div>
              <ButtonLinkedIn />
              <ButtonGithub />
            </div>
          </div>
        </Container>
      </PageContainer>
    </Footer>
  );
};

export default Contact;
