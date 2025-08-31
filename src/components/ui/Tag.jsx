import React from 'react';
import styled from 'styled-components';

const BaseTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  background-color: ${({ color, theme }) => color || theme.colors.light.primary};
  color: #ffffff;
  user-select: none;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    background-color: ${({ color, theme }) => color || theme.colors.dark.primary};
  }
`;

const Tag = ({ children, color, ...rest }) => (
  <BaseTag color={color} {...rest}>{children}</BaseTag>
);

export default Tag;

