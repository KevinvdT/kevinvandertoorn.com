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
import image from './img/image.png';

// Technology tags for Transport Network Model
const TECH_TAG_KEYS = ['*python', '*matlab', 'optimization', 'simulation', 'data-analysis', 'transport'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const TransportNetworkModel = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  return (
    <>
      <ProjectItem
        imageSrc={image}
        title="Transport Network Model"
        description="Mathematical model for optimizing transport networks and analyzing traffic flow patterns using advanced simulation techniques."
        color='#ff6b35'
        tagKeys={preview}
        setIsOpen={setIsOpen}
        company="TU Delft"
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Transport Network Model" maxWidth="700px">
        <PMContainer>
          <PMTitle>TU Delft Transport Network Model</PMTitle>
          <PMText>
            Developed a comprehensive mathematical model for analyzing and optimizing transport networks. The model uses advanced simulation techniques to predict traffic flow patterns and identify optimal network configurations for improved efficiency.
          </PMText>

          <PMSectionTitle>Technologies Used</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>| Key Features</PMSectionTitle>
          <PMFeatureList>
            <li>Mathematical optimization algorithms</li>
            <li>Traffic flow simulation and prediction</li>
            <li>Network topology analysis</li>
            <li>Performance metrics and visualization</li>
            <li>Scalable model for different network sizes</li>
            <li>Integration with real-world traffic data</li>
          </PMFeatureList>

          <PMSectionTitle>| Impact</PMSectionTitle>
          <PMText>
            The transport network model provides valuable insights for urban planning and traffic management. It helps identify bottlenecks, optimize traffic light timing, and suggest infrastructure improvements for better traffic flow.
          </PMText>

          <PMActions>
            <Button as='a' href="#" target='_blank' rel='noopener noreferrer'>
              View Research Paper
            </Button>
            <Button as='a' href="#" target='_blank' rel='noopener noreferrer' secondary>
              View Source Code
            </Button>
          </PMActions>
        </PMContainer>
      </Modal>
    </>
  );
};

export default TransportNetworkModel;
