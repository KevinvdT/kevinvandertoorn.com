import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectItem from '../../ProjectItem';
import ReadMoreLink from '../../ReadMoreLink';
import Modal from '../../../../../components/ui/Modal';
import Button from '../../../../../components/ui/Button';
import {
  PMContainer,
  PMTitle,
  PMText,
  PMSectionTitle,
  PMFeatureList,
  PMActions,
  PMTechTagList
} from '../../ProjectModalParts';
import imgAh from '../../img/ah.svg';
import ahTranslations from './i18n';

// Language-agnostic technology tags for this project
// Prefix with '*' to include on ProjectItem preview; others are modal-only.
const TECH_TAG_KEYS = ['html', 'css', 'javascript', '*react', '*linux'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

// Project card + self-managed modal for Albert Heijn.
// - Card content comes from project-local i18n (keeps Work page clean)
// - ReadMoreLink opens a local Modal (no wiring in parent)
// - Technologies are rendered as colored tags using the central registry
const AlbertHeijn = () => {
  const { i18n } = useTranslation();
  // Resolve current language (fallback to 'en') and project-local translations
  const lang = (i18n.language || 'en').split('-')[0];
  const t = ahTranslations[lang] || ahTranslations.en;

  // Local modal open/close state
  const [isOpen, setIsOpen] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  return (
    <>
      {/* Project card */}
      <ProjectItem
        imageSrc={imgAh}
        title={t.title}
        description={t.description}
        color='#52c2df'
        tagKeys={preview}
        setIsOpen={setIsOpen}
      />
      {/* Trigger modal from inside the project component */}
      {/* <ReadMoreLink onClick={() => setIsOpen(true)} /> */}

      {/* Self-managed modal with shared layout parts */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t.title} maxWidth="700px">
        <PMContainer>
          <PMTitle>{t.modal.title}</PMTitle>
          <PMText>{t.modal.description}</PMText>

          <PMSectionTitle>| {t.modal.technologies.title}</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>| {t.modal.challenges.title}</PMSectionTitle>
          <PMText>{t.modal.challenges.description}</PMText>

          <PMSectionTitle>| {t.modal.features.title}</PMSectionTitle>
          <PMFeatureList>
            {t.modal.features.list.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </PMFeatureList>

          {/* Reuse global Button styles for actions */}
          <PMActions>
            <Button as='a' href={t.modal.liveDemoUrl} target='_blank' rel='noopener noreferrer'>
              {t.modal.liveDemo}
            </Button>
            <Button as='a' href={t.modal.codeUrl} target='_blank' rel='noopener noreferrer' secondary>
              {t.modal.viewCode}
            </Button>
          </PMActions>
        </PMContainer>
      </Modal>
    </>
  );
};

export default AlbertHeijn;
