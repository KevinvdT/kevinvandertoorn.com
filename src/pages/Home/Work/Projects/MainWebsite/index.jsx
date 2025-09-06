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

// Technology tags for Main Website
const TECH_TAG_KEYS = ['*django', '*python', '*html', '*css', '*javascript', 'linux'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const MainWebsite = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  return (
    <>
      <ProjectItem
        imageSrc={image}
        title="Main Website"
        description="Official Delft Hyperloop website built with Django, attracting sponsors and media attention during the SpaceX competition."
        color='#20cc8a'
        tagKeys={preview}
        setIsOpen={setIsOpen}
        company="Delft Hyperloop"
      />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Main Website" maxWidth="700px">
        <PMContainer>
          <PMTitle>Delft Hyperloop Website</PMTitle>
          <PMText>
            Developed the official website for the Delft Hyperloop team using Django. The website served as the primary platform for attracting sponsors, showcasing team achievements, and providing media coverage during the SpaceX Hyperloop Pod Competition 2018.
          </PMText>

          <PMSectionTitle>Technologies Used</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>Key Features</PMSectionTitle>
          <PMFeatureList>
            <li>Dynamic content management with Django admin</li>
            <li>Team member profiles and achievements</li>
            <li>Project timeline and milestone tracking</li>
            <li>Sponsor showcase and recognition</li>
            <li>Media gallery and press coverage</li>
            <li>Contact forms and inquiry management</li>
          </PMFeatureList>

          <PMSectionTitle>Impact</PMSectionTitle>
          <PMText>
            The website played a crucial role in attracting sponsors and generating media attention for the team. It served as the central hub for all team communications and helped establish credibility in the international hyperloop community.
          </PMText>

          <PMActions>
            <Button as='a' href="#" target='_blank' rel='noopener noreferrer'>
              View Live Site
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

export default MainWebsite;
