// Central tag registry
// Usage:
// import { TAGS } from '../constants/tags';
// <TagList tags={[TAGS.React, TAGS.Redux]} /> or
// <TagList><TagItem color={TAGS.React.color}>{TAGS.React.label}</TagItem></TagList>

export const TAGS = {
  React: { label: 'React', color: '#61dafb' },
  Redux: { label: 'Redux', color: '#764abc' },
  JavaScript: { label: 'JavaScript', color: '#f7df1e' },
  TypeScript: { label: 'TypeScript', color: '#3178c6' },
  CSS: { label: 'CSS', color: '#2965f1' },
  HTML: { label: 'HTML', color: '#e34f26' },
  StyledComponents: { label: 'Styled Components', color: '#db7093' },
  Animations: { label: 'Animations', color: '#ff8a65' },
  Performance: { label: 'Performance', color: '#43a047' },
  i18n: { label: 'i18n', color: '#8e44ad' },
  Widgets: { label: 'Widgets', color: '#00bcd4' },
};

export const tagToProps = (tag) =>
  typeof tag === 'string' ? { label: tag, color: undefined } : tag;



