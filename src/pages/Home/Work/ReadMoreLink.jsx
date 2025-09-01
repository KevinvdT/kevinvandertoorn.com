import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  /* Remove top margin to allow perfect vertical centering in flex row */
  margin-top: 0;
  line-height: 1; /* avoid baseline misalignment */
  color: ${({ theme }) => theme.colors.light.primary};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9375rem;

  &:hover {
    // text-decoration: underline;
  }
`;

const ReadMoreLink = ({ onClick, children }) => {
  const { t } = useTranslation();

  return (
    <Link href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}>
      {children || t('work.readMore')} ›
    </Link>
  );
};

export default ReadMoreLink;
