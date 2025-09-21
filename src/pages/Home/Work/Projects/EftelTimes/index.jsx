import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import ProjectItem from '../../ProjectItem';
import Modal from '../../../../../components/ui/Modal';
import {
  PMContainer,
  PMText,
  PMSectionTitle,
  PMFeatureList,
  PMTechTagList,
  PMActions
} from '../../ProjectModalParts';
import image from './img/image.webp';
import imageDark from './img/image-dark.webp';
import etTranslations from './i18n';
import Button from '../../../../../components/ui/Button';
import Ganzenhoedster from './Ganzenhoedster';
import useScreenSize from '../../../../../hooks/useScreenSize';

// Technology tags for EftelTimes
const TECH_TAG_KEYS = ['html', 'css', 'javascript', '*react', '*redux', 'tailwind', 'styled', '*django', 'drf'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const EftelTimes = ({ readMore = true }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  // Resolve current language and project-local translations
  const lang = (i18n.language || 'en').split('-')[0];
  const t = etTranslations[lang] || etTranslations.en;
  const { isXs } = useScreenSize();

  return (
    <>
      <ProjectItem
        imageSrc={image}
        imageSrcDark={imageDark}
        title={t.title}
        description={t.description}
        color='#14b8a6'
        tagKeys={preview}
        setIsOpen={setIsOpen}
        company={t.company}
        readMore={readMore}
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t.title} maxWidth="700px">
        <PMContainer>
          <Ganzenhoedster
            style={{ float: 'right', width: isXs ? '150px' : '200px', margin: '0 -40px' }}
            title={t.modal.ganzenhoedster}
          />
          {Array.isArray(t.modal.intro) ? (
            t.modal.intro.map((paragraph, index) => (
              <PMText key={index}>
                <Trans components={{ 1: <em /> }}>{paragraph}</Trans>
              </PMText>
            ))
          ) : (
            <PMText>
              <Trans components={{ 1: <em /> }}>{t.modal.intro}</Trans>
            </PMText>
          )}

          <PMSectionTitle>{t.modal.technologies.title}</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>{t.modal.features.title}</PMSectionTitle>
          <PMFeatureList>
            {t.modal.features.list.map((item, idx) => (
              <li key={idx}>
                <Trans components={{ 1: <em /> }}>{item}</Trans>
              </li>
            ))}
          </PMFeatureList>

          <PMSectionTitle>{t.modal.impact.title}</PMSectionTitle>
          <PMText>
            <Trans components={{ 1: <em /> }}>{t.modal.impact.text}</Trans>
          </PMText>
        </PMContainer>

        <PMActions>
          <Button as='a' href={'https://efteling.kevinvandertoorn.com'} target='_blank' rel='noopener noreferrer' externalLink>
            {t.modal.liveDemo}
          </Button>
          <Button as='a' href={'https://github.com/KevinvdT/efteltimes'} target='_blank' rel='noopener noreferrer' secondary externalLink>
            {t.modal.viewCode}
          </Button>
        </PMActions>
      </Modal>
    </>
  );
};

export default EftelTimes;


