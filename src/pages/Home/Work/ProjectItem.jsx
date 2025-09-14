import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/ui/Title';
import { SectionText } from '../../../components/ui/Text';
import TwoCol from '../../../components/layout/TwoCol';
import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';
import ProjectDetails from '../../../components/ui/ProjectDetails';
import ReadMoreLink from './ReadMoreLink';
import Tag from '../../../components/ui/Tag';
import { IoStar } from 'react-icons/io5';
import { resolveTags } from './tagsRegistry';

// Styled components for ProjectItem
const ProjectItemContainer = styled(TwoCol)`
  column-gap: 54px; // Adjust the spacing between the image and content
  row-gap: 27px;
  > * {
    flex: initial;  /* Ensures that each child (column) DOESN'T take up equal space */
  }

  padding-top: 2.25rem; /* Adjusted padding */
  padding-bottom: 2.25rem; /* Adjusted padding */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 1.5rem; /* Adjusted padding */
    padding-bottom: 1.5rem; /* Adjusted padding */
  }
`;

const ProjectImage = styled.img`
  width: 356px; // Adjust width as needed
  height: auto; // Maintain aspect ratio
  flex-shrink: 0; // Prevent image from shrinking
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08); // More subtle shadow
  border-radius: 20px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const ProjectContent = styled.div`
  flex-grow: 1; // Allow content to grow
  
`;

const ProjectDescription = styled(SectionText)`
  font-size: 0.9375rem; // Description font size
  white-space: pre-line; // Support newlines
  line-height: 1.7rem;
  margin-bottom: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 1.71875rem;
  }
  // &::selection, & em::selection {
  //   background-color: ${({ color }) => color}55;
  // }
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
font-family: 'Inter','Arial',sans-serif;
  font-size:  1.0625rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    // line-height: 0.5rem;
  }
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
  background-color: rgba(0,0,0,0.08);
  position: relative;
  top: 1px; /* subtle nudge to better align with title baseline */
  margin-left: 6px;

  @media (prefers-color-scheme: dark) {
    color: ${({ theme }) => theme.colors.dark.primaryText};
    background-color: rgba(255,255,255,0.16);
  }
`;

const TagsRow = styled.div`
  display: flex;
  align-items: center; /* center items vertically */
  gap: 12px;
  min-height: 32px; /* approximate chip height to stabilize alignment */
  margin-bottom: 14px;
`;

const TagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center; /* ensure chips align center */
`;

const ReadMoreRow = styled.div`
  margin-top: 6px;
`;

// ProjectItem component that can handle both single and multiple descriptions
const ProjectItem = ({ imageSrc, imageSrcDark, title, description, color, projectDetails, onReadMore, setIsOpen, tagKeys = [], company, readMore = true, featured = false }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Back-compat: if legacy setIsOpen prop is provided, prefer it; else use onReadMore
  const handleReadMore = () => {
    if (typeof onReadMore === 'function') onReadMore();
    else if (typeof setIsOpen === 'function') setIsOpen(true);
    else setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ProjectItemContainer aligntop>
        {imageSrcDark ? (
          <picture>
            <source srcSet={imageSrcDark} media="(prefers-color-scheme: dark)" />
            <ProjectImage
              src={imageSrc}
              alt={title}
              onClick={readMore && (onReadMore || setIsOpen) ? handleReadMore : undefined}
            />
          </picture>
        ) : (
          <ProjectImage
            src={imageSrc}
            alt={title}
            onClick={readMore && (onReadMore || setIsOpen) ? handleReadMore : undefined}
          />
        )}
        <ProjectContent>
          {company && <ProjectCompany>{company}</ProjectCompany>}
          <TitleRow>
            <ProjectTitle
              as="h3"
              color={color}
              onClick={readMore && (onReadMore || setIsOpen) ? handleReadMore : undefined}
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
              <ProjectDescription key={index} color={color}>
                <Trans components={{ 1: <em /> }}>{desc}</Trans>
              </ProjectDescription>
            ))
          ) : (
            <ProjectDescription color={color}>
              <Trans components={{ 1: <em /> }}>{description}</Trans>
            </ProjectDescription>
          )}

          {tagKeys.length > 0 && (
            <TagsRow>
              <TagsWrap>
                {resolveTags(tagKeys).map(tag => (
                  <Tag key={tag.key} color={tag.color}>{tag.label}</Tag>
                ))}
              </TagsWrap>
            </TagsRow>
          )}

          {readMore && (onReadMore || setIsOpen) && (
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
