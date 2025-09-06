import React from 'react';
import styled from 'styled-components';
import { SectionText } from '../../../components/ui/Text';
import { SectionTitle as BaseTitle } from '../../../components/ui/Title';
import Tag from '../../../components/ui/Tag';
import { TAGS } from './tagsRegistry';

export const PMContainer = styled.div`
  color: #333;
  padding-bottom: 20px;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
  }
`;

export const PMTitle = styled(BaseTitle).attrs({ as: 'h3' })`
  font-size: 1.25rem;
  margin: 0 0 16px 0;
`;

export const PMText = styled(SectionText)`
  margin: 0 0 24px 0;
`;

export const PMSectionTitle = styled(BaseTitle).attrs({ as: 'h4' })`
  font-size: 1rem;
  margin: 24px 0 12px 0;
`;

export const PMTechTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const PMTechTag = styled(Tag)``;

export const PMFeatureList = styled.ul`
  text-align: left;
  padding-left: 20px;
  margin: 16px 0 24px 0;
  list-style-type: disc;
  
  li {
    margin-bottom: 8px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.light.secondaryText};
    font-weight: 500;

    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.colors.dark.secondaryText};
    }
  }
`;

export const PMActions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

// Renders a list of technology tags using the central TAGS registry for colors/labels.
// Falls back to plain tags when an item isn't present in the registry.
export const PMTechTagList = ({ items = [] }) => (
  <PMTechTags>
    {items.map((item, idx) => {
      const key = String(item).toLowerCase();
      const reg = TAGS[key];
      if (reg) return <PMTechTag key={reg.key} color={reg.color}>{reg.label}</PMTechTag>;
      return <PMTechTag key={`${key}-${idx}`}>{String(item)}</PMTechTag>;
    })}
  </PMTechTags>
);

// Links container used by LinkList
export const PMLinkList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 16px 0 24px 0;
`;

// Simple gallery grid
export const PMGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin: 16px 0 24px 0;
`;

export const PMGalleryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
`;

// Reusable building blocks
export const Section = ({ title, children }) => (
  <section>
    {title ? <PMSectionTitle>{title}</PMSectionTitle> : null}
    {children}
  </section>
);

export const BulletList = ({ items, children }) => {
  if (items && items.length) {
    return (
      <PMFeatureList>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </PMFeatureList>
    );
  }
  return <PMFeatureList>{children}</PMFeatureList>;
};

export const Bullet = ({ children }) => <li>{children}</li>;

export const LinkList = ({ links = [], children }) => {
  const hasArray = links && links.length;
  return (
    <PMLinkList>
      {hasArray && links.map(({ label, href }, index) => (
        <a key={index} href={href} target="_blank" rel="noreferrer noopener">{label}</a>
      ))}
      {!hasArray && children}
    </PMLinkList>
  );
};

export const LinkItem = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer noopener">{children}</a>
);

export const TagList = ({ tags = [], children }) => {
  const hasArray = tags && tags.length;
  return (
    <PMTechTags>
      {hasArray && tags.map((tag, index) => {
        const { label, color } = typeof tag === 'string' ? { label: tag, color: undefined } : tag;
        return (
          <PMTechTag key={`${label}-${index}`} color={color}>{label}</PMTechTag>
        );
      })}
      {!hasArray && children}
    </PMTechTags>
  );
};

export const TagItem = ({ color, children }) => (
  <PMTechTag color={color}>{children}</PMTechTag>
);

export const Gallery = ({ images = [], children }) => {
  const hasArray = images && images.length;
  return (
    <PMGallery>
      {hasArray && images.map((img, index) => {
        const { src, alt } = typeof img === 'string' ? { src: img, alt: '' } : img;
        return <PMGalleryImage key={`${src}-${index}`} src={src} alt={alt} />;
      })}
      {!hasArray && children}
    </PMGallery>
  );
};

export const GalleryImage = ({ src, alt = '' }) => (
  <PMGalleryImage src={src} alt={alt} />
);
