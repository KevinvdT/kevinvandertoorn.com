import React from 'react';
import styled from 'styled-components';
import { Container, PageContainer } from '../../../components/layout/Container';
import TwoCol from '../../../components/layout/TwoCol';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';

const Footer = styled.div`
  background: #F5F5F7;
  @media (prefers-color-scheme: dark) {
    background: #0d0d0d;
  }
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
          <SectionText>Ready to elevate your business?<br />Let’s make it happen!</SectionText>
          <TwoCol>
            <div>
              <Label as="div">Connect</Label>
            </div>
            <div>
              <Label as="div">Follow</Label>
            </div>
          </TwoCol>
        </Container>
      </PageContainer>
    </Footer>
  );
};

export default Contact;