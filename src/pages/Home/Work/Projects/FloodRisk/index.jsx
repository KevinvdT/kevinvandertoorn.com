import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
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
  PMTechTagList,
  BulletList
} from '../../ProjectModalParts';
import image from './img/image.webp';
import podImage from './img/pod_light_background.png';
import screenshot from './img/screenshot.webp';
import videoCover from './img/video-cover.png';
import frTranslations from './i18n';

const PodImageContainer = styled.div`
  text-align: center;
  margin-top: 58px;
`;

const PodImage = styled.img`
  width: 30%;
  height: auto;
  opacity: 0.85;
  transition: opacity 0.3s ease;
  // cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const ScreenshotImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-top: 32px;
`;

const VideoPreview = styled.div`
  position: relative;
  width: 100%;
  margin: 24px 0;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  // &:hover {
  //   transform: scale(1.02);
  // }
`;

const VideoCoverImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    // background: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 20px solid rgb(238, 238, 238);
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    margin-left: 4px;
  }
`;

// Technology tags for Flood Risk
const TECH_TAG_KEYS = ['python', 'pytorch', 'yolov8'];

const splitPreviewAndAll = (keys = []) => {
  const cleaned = keys.map(k => String(k).trim());
  const all = cleaned.map(k => k.replace(/^\*/, '').toLowerCase());
  const starred = cleaned
    .filter(k => k.startsWith('*'))
    .map(k => k.replace(/^\*/, '').toLowerCase());
  const preview = starred.length ? starred : all;
  return { preview, all };
};

const FloodRisk = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const { preview, all } = splitPreviewAndAll(TECH_TAG_KEYS);

  // Resolve current language and project-local translations
  const lang = (i18n.language || 'en').split('-')[0];
  const t = frTranslations[lang] || frTranslations.en;

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setShowVideo(false); // Reset video state when modal closes
  };

  return (
    <>
      <ProjectItem
        imageSrc={image}
        title={t.title}
        description={t.description}
        color='#20cc8a'
        tagKeys={preview}
        setIsOpen={setIsOpen}
        company={t.company}
      />

      <Modal isOpen={isOpen} onClose={handleModalClose} title={t.title} maxWidth="700px">
        <PMContainer>
          {/* <PMTitle>Mission Control System</PMTitle> */}
          <PMText>
            <Trans components={{ 1: <em /> }}>{t.modal.intro}</Trans>
          </PMText>

          <PMSectionTitle>{t.modal.technologies.title}</PMSectionTitle>
          <PMTechTagList items={all} />

          <PMSectionTitle>{t.modal.features.title}</PMSectionTitle>
          <BulletList items={t.modal.features.list} />



          {/* <ScreenshotImage
            src={screenshot}
            alt="Mission Control Screenshot"
          /> */}

          <PMSectionTitle>{t.modal.video.title}</PMSectionTitle>
          {!showVideo ? (
            <VideoPreview onClick={handleVideoClick}>
              <VideoCoverImage
                src={videoCover}
                alt={t.modal.video.alt}
              />
              <PlayButton />
            </VideoPreview>
          ) : (
            <div style={{ marginBottom: '24px' }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/sVmX9w6SfAs?autoplay=1&mute=1&start=8"
                title="Flood Risk Assessment from Street View Imagery"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ borderRadius: '12px', aspectRatio: '1189/669', height: 'auto' }}
              ></iframe>
            </div>
          )}
          <PMSectionTitle>{t.modal.impact.title}</PMSectionTitle>
          {Array.isArray(t.modal.impact.text) ? (
            t.modal.impact.text.map((paragraph, index) => (
              <PMText key={index}>
                <Trans components={{ 1: <em /> }}>{paragraph}</Trans>
              </PMText>
            ))
          ) : (
            <PMText>
              <Trans components={{ 1: <em /> }}>{t.modal.impact.text}</Trans>
            </PMText>
          )}





          <PodImageContainer>
            <PodImage
              src={podImage}
              alt="Delft Hyperloop ATLAS Pod"
            />
          </PodImageContainer>

          {/* <PMActions>
            <Button as='a' href="#" target='_blank' rel='noopener noreferrer'>
              View Competition Results
            </Button>
          </PMActions> */}
        </PMContainer>
      </Modal>
    </>
  );
};

export default FloodRisk;
