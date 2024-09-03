import React from 'react';
import styled from 'styled-components';
import { SectionText } from '../../../components/ui/Text';

const ReversedEmail = styled(SectionText)`
  unicode-bidi: bidi-override;
  direction: rtl;
  text-align: left;
  user-select: none;
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);

  &::first-letter {
    color: #00000000;
  }
`;

const Email = () => {
  const email1 = 'rmxoc.nroxotredna';
  const email2 = 'vnisveks@olslsesssh';
  return <ReversedEmail>{email1.replace(/x/g, '')}<span style={{ display: 'none' }}>@</span>{email2.replace(/s/g, '')}</ReversedEmail>;
};

export default Email;