import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SectionText } from '../../../components/ui/Text';
import { MdContentCopy } from "react-icons/md";

const EmailText = styled(SectionText)`
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CopyIcon = styled(MdContentCopy)`
  flex-shrink: 0;
  vertical-align: middle;
  transform: scale(-1, 1);
  font-size: 1.05em;
`;

const Email = () => {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  // Simple obfuscation: email with extra characters that get removed
  // This makes it harder for crawlers while keeping text selectable
  const obfuscated = 'hxexlxlxoxあkxexvxixnxvxaxnxdxexrxtxoxoxrxnx.cxoxmx';
  const email = obfuscated.replace(/x/g, '').replace(/あ/g, '@');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const getDisplayText = () => {
    if (isCopied) return t('contact.copied');
    return email;
  };

  return (
    <EmailText
      onClick={handleCopy}
    >
      {getDisplayText()}
      <CopyIcon />
    </EmailText>
  );
};

export default Email;