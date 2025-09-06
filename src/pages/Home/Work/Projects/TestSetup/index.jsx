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

// Technology tags for Test Setup
const TECH_TAG_KEYS = ['*python', '*matlab', '*obs', 'linux', 'data-analysis', 'automation'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const TestSetup = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  return (
    <>
      <ProjectItem
        imageSrc={image}
        title="Test Setup"
        description="Automated testing system for optimizing pod performance and validating design parameters during development."
        color='#20cc8a'
        tagKeys={preview}
        setIsOpen={setIsOpen}
        company="Delft Hyperloop"
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Test Setup" maxWidth="700px">
        <PMContainer>
          <PMTitle>Automated Test System</PMTitle>
          <PMText>
            Designed and implemented a comprehensive testing framework to optimize the Delft Hyperloop pod's performance. The system automated data collection, analysis, and reporting to accelerate development cycles and ensure design validation.
          </PMText>

          <PMSectionTitle>Technologies Used</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>Key Features</PMSectionTitle>
          <PMFeatureList>
            <li>Automated test execution and data collection</li>
            <li>Real-time performance monitoring and analysis</li>
            <li>Statistical analysis and optimization algorithms</li>
            <li>Automated report generation</li>
            <li>Integration with OBS for video recording</li>
            <li>Data visualization and trend analysis</li>
          </PMFeatureList>

          <PMSectionTitle>Impact</PMSectionTitle>
          <PMText>
            The test setup significantly reduced manual testing time and provided objective data for design decisions. It enabled the team to quickly iterate on designs and validate performance improvements before the final competition.
          </PMText>

          <PMActions>
            <Button as='a' href="#" target='_blank' rel='noopener noreferrer'>
              View Test Results
            </Button>
          </PMActions>
        </PMContainer>
      </Modal>
    </>
  );
};

export default TestSetup;
