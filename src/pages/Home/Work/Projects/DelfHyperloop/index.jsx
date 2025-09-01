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
import imgDelfthyperloop from '../../img/delfthyperloop.png';
import delfthyperloopTranslations from './i18n';

// Card component (default export) - manages its own modal
const DelfHyperloop = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const t = delfthyperloopTranslations[currentLanguage] || delfthyperloopTranslations.en;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProjectItem
        imageSrc={imgDelfthyperloop}
        title={t.title}
        description={[t.description.part1, t.description.part2]}
        color='#20cc8a'
        setIsOpen={setIsOpen}
      />
      {/* <ReadMoreLink onClick={() => setIsOpen(true)} /> */}

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={t.title}>
        <DelfHyperloopModal />
      </Modal>
    </>
  );
};

// Modal content (named export)
export const DelfHyperloopModal = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const t = delfthyperloopTranslations[currentLanguage] || delfthyperloopTranslations.en;

  return (
    <PMContainer>
      <PMTitle>{t.modal.title}</PMTitle>
      <PMText>{t.modal.description}</PMText>

      <div style={{
        background: 'linear-gradient(135deg, #20cc8a, #1aad73)',
        color: 'white',
        padding: 20,
        borderRadius: 12,
        margin: '20px 0',
        textAlign: 'center'
      }}>
        <h5 style={{ margin: 0, marginBottom: 10, fontSize: '1.1rem', fontWeight: 600 }}>🏆 SpaceX Hyperloop Pod Competition 2018</h5>
        <p style={{ margin: 0, opacity: 0.9 }}>Founded by Elon Musk • International Competition • Real-time Systems</p>
      </div>

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
  );
};

export default DelfHyperloop;
