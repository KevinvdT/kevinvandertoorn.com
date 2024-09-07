import React from 'react';
import styled from 'styled-components';
import { Container, PageContainer } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import Email from './Email';
import { ButtonLinkedIn, ButtonGithub, ButtonStackOverflow } from "./Buttons";

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
  return (
    <Footer>
      <PageContainer>

        <Container id="contact">
          <SectionTitle>Contact Me</SectionTitle>
          <ContactText>Ready to elevate your business?<br />Let’s make it happen!</ContactText>
          {/* <TwoCol aligntop>
            <div>
              <Label as="div">Connect</Label>
              <Email />
            </div> */}
          <div>
            <Label as="div">Follow</Label>
            <div><ButtonLinkedIn /><ButtonGithub /></div>
          </div>
          {/* </TwoCol> */}
        </Container>
      </PageContainer>
    </Footer>
  );
};

export default Contact;