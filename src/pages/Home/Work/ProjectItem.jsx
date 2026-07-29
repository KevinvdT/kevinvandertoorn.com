import React, { useLayoutEffect, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import TwoCol from '../../../components/layout/TwoCol';
import Modal from '../../../components/ui/Modal';
import ReadMoreLink from './ReadMoreLink';
import Tag from '../../../components/ui/Tag';
import { IoStar } from 'react-icons/io5';
import { resolveTags } from './tagsRegistry';
import useScreenSize from '../../../hooks/useScreenSize';

gsap.registerPlugin(ScrollTrigger);

const ProjectItemContainer = styled(TwoCol)`
  column-gap: 54px;
  row-gap: 27px;

  > * {
    flex: initial;
  }

  padding-top: ${({ isMobile }) => (isMobile ? '1.5rem' : '2.25rem')};
  padding-bottom: ${({ isMobile }) => (isMobile ? '1.5rem' : '2.25rem')};
`;

const ProjectImage = styled.img`
  width: 356px;
  height: auto;
  flex-shrink: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  max-width: ${({ isMobile }) => (isMobile ? '100%' : '356px')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '10px' : '0')};
`;

const ProjectContent = styled.div`
  flex-grow: 1;
`;

const ProjectDescription = styled(SectionText)`
  font-size: 0.9375rem;
  white-space: pre-line;
  line-height: ${({ isMobile }) =>
    isMobile ? '1.71875rem' : '1.7rem'};
  margin-bottom: 10px;
`;

const ProjectCompany = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.light.secondaryText};
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.secondaryText};
  }
`;

const ProjectTitle = styled(SectionTitle)`
  font-family: 'Inter', 'Arial', sans-serif;
  font-size: 1.0625rem;
  margin-bottom: 0;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;

const TitleRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;

const FeaturedBadge = styled(Tag)`
  padding: 4px 8px;
  font-size: 12px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.light.primaryText};
  background-color: rgba(0, 0, 0, 0.08);
  position: relative;
  top: 1px;
  margin-left: 6px;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
    background-color: rgba(255, 255, 255, 0.16);
  }
`;

const TagsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 32px;
  margin-bottom: ${({ isMobile }) => (isMobile ? '24px' : '14px')};
`;

const TagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;

const ReadMoreRow = styled.div`
  margin-top: 6px;
`;

const ProjectItem = ({
  imageSrc,
  imageSrcDark,
  title,
  description,
  color,
  projectDetails,
  onReadMore,
  setIsOpen,
  tagKeys = [],
  company,
  readMore = true,
  featured = false,
}) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { maxMobile } = useScreenSize();
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
            // markers: true,
          },
        }
      );
    }, containerRef);

    return () => context.revert();
  }, []);

  const handleReadMore = () => {
    if (typeof onReadMore === 'function') {
      onReadMore();
    } else if (typeof setIsOpen === 'function') {
      setIsOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const canOpenProject = readMore && (onReadMore || setIsOpen);

  return (
    <>
      <ProjectItemContainer
        ref={containerRef}
        aligntop
        isMobile={maxMobile}
      >
        {imageSrcDark ? (
          <picture>
            <source
              srcSet={imageSrcDark}
              media="(prefers-color-scheme: dark)"
            />

            <ProjectImage
              src={imageSrc}
              alt={title}
              onClick={canOpenProject ? handleReadMore : undefined}
              isMobile={maxMobile}
            />
          </picture>
        ) : (
          <ProjectImage
            src={imageSrc}
            alt={title}
            onClick={canOpenProject ? handleReadMore : undefined}
            isMobile={maxMobile}
          />
        )}

        <ProjectContent>
          {company && <ProjectCompany>{company}</ProjectCompany>}

          <TitleRow>
            <ProjectTitle
              as="h3"
              color={color}
              onClick={canOpenProject ? handleReadMore : undefined}
            >
              {title}
            </ProjectTitle>

            {featured && (
              <FeaturedBadge>
                <IoStar aria-hidden="true" />
                {t('work.featured')}
              </FeaturedBadge>
            )}
          </TitleRow>

          {Array.isArray(description) ? (
            description.map((desc, index) => (
              <ProjectDescription
                key={index}
                color={color}
                isMobile={maxMobile}
              >
                <Trans components={{ 1: <em /> }}>{desc}</Trans>
              </ProjectDescription>
            ))
          ) : (
            <ProjectDescription color={color} isMobile={maxMobile}>
              <Trans components={{ 1: <em /> }}>{description}</Trans>
            </ProjectDescription>
          )}

          {tagKeys.length > 0 && (
            <TagsRow isMobile={maxMobile}>
              <TagsWrap>
                {resolveTags(tagKeys).map(tag => (
                  <Tag key={tag.key} color={tag.color}>
                    {tag.label}
                  </Tag>
                ))}
              </TagsWrap>
            </TagsRow>
          )}

          {canOpenProject && (
            <ReadMoreRow>
              <ReadMoreLink onClick={handleReadMore} />
            </ReadMoreRow>
          )}
        </ProjectContent>
      </ProjectItemContainer>

      {projectDetails && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={title}
        >
          <div>Project details would go here</div>
        </Modal>
      )}
    </>
  );
};

export default ProjectItem;