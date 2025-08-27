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
  PMTechTags,
  PMTechTag,
  PMFeatureList,
  PMActions
} from '../../ProjectModalParts';
import imgSaysimple from '../../img/saysimple.svg';

// Simple inline translations as placeholder (can move to i18n like others)
const translations = {
  en: {
    title: 'Saysimple',
    description: `Created interactive elements for Saysimple's website, including a pricing calculator based on configurable options, and a customizable chat widget generator. These tools enhance website functionality and offer practical solutions to boost client interaction and engagement.`,
    modal: {
      title: 'Saysimple',
      description: `Created interactive elements for Saysimple's website, including a pricing calculator based on configurable options, and a customizable chat widget generator. These tools enhance website functionality and offer practical solutions to boost client interaction and engagement.`,
      technologies: { title: 'Technologies Used', list: ['JavaScript', 'React', 'CSS', 'Interactive Components', 'Widget Development'] },
      challenges: { title: 'Challenges & Solutions', description: 'Building flexible, configurable components that could be easily customized by clients while maintaining consistent functionality and performance across different website implementations.' },
      features: { title: 'Key Features', list: ['Interactive pricing calculator', 'Customizable chat widget generator', 'Configurable options and settings', 'Responsive design integration', 'Client customization tools'] },
      liveDemo: 'Live Demo', viewCode: 'View Code', liveDemoUrl: '#', codeUrl: '#'
    }
  }
};

const SaySimple = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const t = translations[lang] || translations.en;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProjectItem
        imageSrc={imgSaysimple}
        title={t.title}
        description={t.description}
        color='#aa88fd'
      />
      <ReadMoreLink onClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t.title} maxWidth="700px">
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
