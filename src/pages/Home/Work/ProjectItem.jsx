import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';

const Card = styled.article`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.06);
  column-gap: 1.25rem;
  align-items: stretch;
  padding: 1.2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    column-gap: 0;
  }
`;

const ImageWrap = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  display: flex;
  padding: 0; /* uniform padding handled by Card */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: none;
    max-width: none;
    width: 100%;
    padding: 0.75rem 0.75rem 0 0.75rem;
  }
`;

const Cover = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 180px; /* stacked layout on mobile */
  }
`;

const Eyebrow = styled.div`
  padding: 0 0 0.25rem 0;
  color: ${({ theme }) => theme.colors.light.secondaryText};
  font-size: 0.625rem; // ~10px
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-block;
  white-space: nowrap;
`;

const Body = styled.div`
  padding: 0 0.75rem 0.75rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0; // allow text to wrap within available space
`;

const Title = styled(SectionTitle).attrs({ as: 'h3' })`
  display: block;
  font-size: 1rem; // 16px
  margin: 0 0 0.3125rem 0; // 5px
  color: ${({ theme }) => theme.colors.light.primaryText};
  font-weight: 600;
`;

const Description = styled(SectionText)`
  font-size: 14px; // 13px
  line-height: 1.5;
  margin: 0;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem 0 0 0;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 8px;
  font-size: 0.6875rem; // 11px
  color: ${({ theme }) => theme.colors.light.secondaryText};
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.375rem;
  padding: 0.75rem 0 0 0;
`;

const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: ${({ theme }) => theme.colors.light.primary};
  font-weight: 600;
  text-decoration: none;
  font-size: 0.8125rem; // 13px
  &:hover { text-decoration: underline; }
`;

const Bullet = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.light.secondaryText};
`;

// Updated ProjectItem to a card-style component. Supports array or single descriptions.
const ProjectItem = ({ imageSrc, eyebrow, title, description, tags = [], ctaHref, ctaLabel = 'Learn more', color }) => (
  <Card>
    {imageSrc && (
      <ImageWrap>
        <Cover src={imageSrc} alt={title} />
      </ImageWrap>
    )}
    <Body>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {Array.isArray(description) ? (
        description.map((desc, index) => (
          <Description key={index}>{desc}</Description>
        ))
      ) : (
        <Description>{description}</Description>
      )}
      {tags.length > 0 && (
        <TagList>
          {tags.map((t, idx) => (
            <Tag key={idx}>{t}</Tag>
          ))}
        </TagList>
      )}
      {ctaHref && (
        <Footer>
          <Cta href={ctaHref} target="_blank" rel="noreferrer">{ctaLabel}</Cta>
          <Bullet>›</Bullet>
        </Footer>
      )}
    </Body>
  </Card>
);

export default ProjectItem;
