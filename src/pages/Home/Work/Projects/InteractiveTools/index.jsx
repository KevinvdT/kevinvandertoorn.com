import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
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
import image from './img/image.webp';
import itTranslations from './i18n';

// Technology tags for Interactive Tools
const TECH_TAG_KEYS = ['html', 'css', 'javascript', '*react', '*redux', '*svelte'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const InteractiveTools = ({ projectId = 'interactive-tools', activeProjectId, onProjectOpen, onRouteClose, readMore = true }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  // Route state lets direct links and browser history reopen this local modal.
  const isModalOpen = isOpen || activeProjectId === projectId;

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  // Resolve current language and project-local translations for title/description
  const lang = (i18n.language || 'en').split('-')[0];
  const t = itTranslations[lang] || itTranslations.en;

  // Localized Saysimple URLs for nl/es; default for others
  const localizedLangs = new Set(['nl', 'es']);
  const widgetUrl = localizedLangs.has(lang)
    ? `https://www.saysimple.com/${lang}/whatsapp-chat-widget`
    : 'https://www.saysimple.com/whatsapp-chat-widget';
  const calculatorUrl = localizedLangs.has(lang)
    ? `https://www.saysimple.com/${lang}/whatsapp-pricing-calculator`
    : 'https://www.saysimple.com/whatsapp-pricing-calculator';

  return (
    <>
      <ProjectItem
        projectId={projectId}
        // Slug text stays in this project's own translation files.
        slug={t.slug || itTranslations.en.slug}
        onOpenProject={onProjectOpen}
        imageSrc={image}
        title={t.title}
        description={t.description}
        color='#aa88fd'
        tagKeys={preview}
        setIsOpen={setIsOpen}
        company="Saysimple"
        readMore={readMore}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsOpen(false);
          if (activeProjectId === projectId) onRouteClose?.();
        }}
        title={t.modal.title}
        maxWidth="700px"
      >
        <PMContainer>
          {/* <PMTitle>WhatsApp Chat Widget Generator</PMTitle> */}
          <PMText>
            <Trans components={{ 1: <em /> }}>{t.modal.intro}</Trans>
          </PMText>

          <PMSectionTitle>{t.modal.technologies.title}</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>{t.modal.features.title}</PMSectionTitle>
          <PMFeatureList>
            {t.modal.features.list.map((item, idx) => (
              <li key={idx}><Trans components={{ 1: <em /> }}>{item}</Trans></li>
            ))}
          </PMFeatureList>

          <PMSectionTitle>{t.modal.impact.title}</PMSectionTitle>
          <PMText>
            <Trans components={{ 1: <em /> }}>{t.modal.impact.text}</Trans>
          </PMText>

          <PMActions>
            <Button externalLink as='a' href={widgetUrl} target='_blank' rel='noopener noreferrer'>
              {t.modal.actions.widget}
            </Button>
            <Button externalLink as='a' href={calculatorUrl} target='_blank' rel='noopener noreferrer' secondary>
              {t.modal.actions.calculator}
            </Button>
          </PMActions>
        </PMContainer>
      </Modal>
    </>
  );
};

export default InteractiveTools;
