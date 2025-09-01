import React from 'react';
import styled from 'styled-components';

// Given a base hex color, produce a readable fg and soft translucent bg.
// These are tuned to resemble the Notion tone feel.
const derivePalette = (hex, mode = 'light') => {
  if (!hex) return mode === 'dark'
    ? { fg: '#ffffff', bg: 'rgba(255,255,255,0.12)' }
    : { fg: '#ffffff', bg: 'rgba(0,0,0,0.12)' };

  // Parse hex to rgb
  const m = hex.replace('#', '').match(/.{1,2}/g);
  const [r, g, b] = m ? m.map(h => parseInt(h, 16)) : [0, 0, 0];

  // Light mode: deep-ish fg, very soft bg tint
  if (mode === 'light') {
    const bg = `rgba(${r}, ${g}, ${b}, 0.16)`; // soft background tint
    // darken fg slightly for readability
    const fg = `rgb(${Math.max(0, r * 0.35)}, ${Math.max(0, g * 0.35)}, ${Math.max(0, b * 0.35)})`;
    return { fg, bg };
  }

  // Dark mode: light fg, brighter translucent bg
  const bg = `rgba(${r}, ${g}, ${b}, 0.38)`;
  const fg = '#ffffff';
  return { fg, bg };
};

const TagBase = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  background-color: ${({ color }) => derivePalette(color, 'light').bg};
  color: ${({ color }) => derivePalette(color, 'light').fg};
  user-select: none;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    background-color: ${({ color }) => derivePalette(color, 'dark').bg};
    color: ${({ color }) => derivePalette(color, 'dark').fg};
  }
`;

// Props:
// - color: hex color string (e.g., #22c55e). If omitted, a neutral fallback is used.
// - children: tag label
const Tag = ({ children, color, ...rest }) => (
  <TagBase color={color} {...rest}>{children}</TagBase>
);

export default Tag;

