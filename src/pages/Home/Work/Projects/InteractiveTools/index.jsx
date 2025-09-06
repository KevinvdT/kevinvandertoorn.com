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
import image from './img/image.webp';

// Technology tags for Interactive Tools
const TECH_TAG_KEYS = ['html', 'css', 'javascript', '*react', '*svelte'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const InteractiveTools = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  return (
    <>
      <ProjectItem
        imageSrc={image}
        title="Chat Widget for WhatsApp"
        description="Developed a customizable WhatsApp chat widget generator for Saysimple's website, enabling seamless customer communication integration."
        color='#aa88fd'
        tagKeys={preview}
        setIsOpen={setIsOpen}
        company="Saysimple"
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Chat Widget for WhatsApp" maxWidth="700px">
        <PMContainer>
          {/* <PMTitle>WhatsApp Chat Widget Generator</PMTitle> */}
          <PMText>
            Created a comprehensive WhatsApp chat widget generator for Saysimple's website, allowing businesses to easily integrate WhatsApp messaging into their websites. Also developed an additional interactive tool including a dynamic pricing calculator to enhance user engagement.
          </PMText>

          <PMSectionTitle>Technologies Used</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>Key Features</PMSectionTitle>
          <PMFeatureList>
            <li>WhatsApp chat widget generator with customization options</li>
            <li>Easy integration with any website</li>
            <li>Custom styling and branding options</li>
            <li>Responsive design for all devices</li>
            <li>Real-time messaging capabilities</li>
            <li>Additional tool: dynamic pricing calculator</li>
          </PMFeatureList>

          <PMSectionTitle>Impact</PMSectionTitle>
          <PMText>
            The WhatsApp chat widget generator provided businesses with an easy way to integrate customer communication directly into their websites, significantly improving user engagement and conversion rates. The additional pricing calculator tool further enhanced the overall user experience.
          </PMText>

          <PMActions>
            <Button externalLink as='a' href="https://www.saysimple.com/whatsapp-chat-widget" target='_blank' rel='noopener noreferrer'>
              View Widget Generator
            </Button>
            <Button externalLink as='a' href="https://www.saysimple.com/whatsapp-pricing-calculator" target='_blank' rel='noopener noreferrer' secondary>
              View Pricing Calculator
            </Button>
          </PMActions>
        </PMContainer>
      </Modal>
    </>
  );
};

export default InteractiveTools;
