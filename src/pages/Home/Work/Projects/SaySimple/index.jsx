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
import imgSaysimple from '../../img/saysimple.svg';
import saySimpleTranslations from './i18n';

// Language-agnostic technology tags for this project with star logic
const TECH_TAG_KEYS = ['*react', '*javascript', 'css'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const SaySimple = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const t = saySimpleTranslations[lang] || saySimpleTranslations.en;
  const [isOpen, setIsOpen] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  return (
    <>
      <ProjectItem
        imageSrc={imgSaysimple}
        title={t.title}
        description={t.description}
        color='#aa88fd'
        tagKeys={preview}
        setIsOpen={setIsOpen}
      />
      {/* <ReadMoreLink onClick={() => setIsOpen(true)} /> */}

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

export default SaySimple;
