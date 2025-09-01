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
import imgAh from '../../img/ah.svg';
import ahTranslations from './i18n';

const AlbertHeijn = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const t = ahTranslations[lang] || ahTranslations.en;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProjectItem
        imageSrc={imgAh}
        title={t.title}
        description={t.description}
        color='#52c2df'
        setIsOpen={setIsOpen}
      />


      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t.title}>
        <PMContainer>
          <PMTitle>{t.modal.title}</PMTitle>
          <PMText>{t.modal.description}</PMText>

          <PMSectionTitle>{t.modal.technologies.title}</PMSectionTitle>
          <PMTechTags>
            {t.modal.technologies.list.map((tech, index) => (
              <PMTechTag key={index}>{tech}</PMTechTag>
            ))}
          </PMTechTags>

          <PMSectionTitle>{t.modal.challenges.title}</PMSectionTitle>
          <PMText>{t.modal.challenges.description}</PMText>

          <PMSectionTitle>{t.modal.features.title}</PMSectionTitle>
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

export default AlbertHeijn;
