import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import Trans component
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import downArrow from './downarrow.svg';
import DelfHyperloop from './Projects/DelfHyperloop';
import AlbertHeijn from './Projects/AlbertHeijn';
import SaySimple from './Projects/SaySimple';

const ProjectItemsWrapper = styled.div`
  // margin-top: 1.5rem; /* Adjusted margin */
  // margin-bottom: 1.5rem; /* Adjusted margin */
`;

const SeeMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  transition: margin-top 0.5s ease-in-out;
  margin-top: ${({ showMore }) => (showMore ? '1rem' : '0')};
`;

const SeeMoreButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background: none;
  color: ${({ theme }) => theme.colors.light.primary};
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.img`
  margin-right: 0.5rem;
  transition: transform 0.3s;
  ${({ showMore }) => showMore && 'transform: rotate(180deg);'}
`;

const ShowMoreWrapper = styled.div`
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
  max-height: ${({ showMore }) => (showMore ? '1000px' : '0')};
  opacity: ${({ showMore }) => (showMore ? '1' : '0')};
`;

const Work = () => {
  const { t } = useTranslation(); // Hook to get translation function
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Container id="work">
      <SectionTitle>{t('work.title')}</SectionTitle>

      <ProjectItemsWrapper>
        <DelfHyperloop />
        <AlbertHeijn />
        <SaySimple />
      </ProjectItemsWrapper>

      {/* <ShowMoreWrapper showMore={showMore}>
      </ShowMoreWrapper>

      <SeeMoreButtonWrapper showMore={showMore}>
        <SeeMoreButton onClick={handleSeeMore}>
          <ArrowIcon src={downArrow} showMore={showMore} />
          {showMore ? t('work.seeLess') : t('work.seeMore')}
        </SeeMoreButton>
      </SeeMoreButtonWrapper> */}
    </Container>
  );
};

export default Work;
