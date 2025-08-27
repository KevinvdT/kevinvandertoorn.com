import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../../components/ui/Button';
import ahTranslations from './i18n';
import {
  PMContainer,
  PMTitle,
  PMText,
  PMSectionTitle,
  PMTechTags,
  PMTechTag,
  PMFeatureList,
  PMActions
} from '../../ProjectModalParts';

const AlbertHeijnModalContent = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const t = ahTranslations[lang] || ahTranslations.en;

  return (
    <PMContainer>
      <PMTitle>{t.modal.title}</PMTitle>
      <PMText>{t.modal.description}</PMText>

      <PMSectionTitle>| {t.modal.technologies.title}</PMSectionTitle>
      <PMTechTags>
        {t.modal.technologies.list.map((tech, index) => (
          <PMTechTag key={index}>{tech}</PMTechTag>
        ))}
      </PMTechTags>

      <PMSectionTitle>| {t.modal.challenges.title}</PMSectionTitle>
      <PMText>{t.modal.challenges.description}</PMText>

      <PMSectionTitle>| {t.modal.features.title}</PMSectionTitle>
      <PMFeatureList>
        {t.modal.features.list.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </PMFeatureList>

      <PMActions>
        <Button as="a" href={t.modal.liveDemoUrl} target="_blank" rel="noopener noreferrer">
          {t.modal.liveDemo}
        </Button>
        <Button as="a" href={t.modal.codeUrl} target="_blank" rel="noopener noreferrer" secondary>
          {t.modal.viewCode}
        </Button>
      </PMActions>
    </PMContainer>
  );
};

export default AlbertHeijnModalContent;
