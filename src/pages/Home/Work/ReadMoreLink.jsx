import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.light.primary};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ReadMoreLink = ({ onClick, children = 'Read More' }) => (
  <Link href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }}>
    {children}
  </Link>
);

export default ReadMoreLink;
