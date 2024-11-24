import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Trans, useTranslation } from 'react-i18next'; // Import Trans component
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import ProjectItem from './ProjectItem';
import imgAh from './img/ah.svg';
import imgSaysimple from './img/saysimple.svg';
import imgDelfthyperloop from './img/delfthyperloop.png';
import downArrow from './downarrow.svg';

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
        <ProjectItem
          imageSrc={imgDelfthyperloop}
          title={t('work.projects.delfthyperloop.title')}
          description={[
            // Split the description into two parts, each wrapped in a Trans component
            <Trans i18nKey="work.projects.delfthyperloop.description.part1">
              I was part of the Delft Hyperloop team in the <em>SpaceX Hyperloop Pod Competition 2018</em>, founded by Elon Musk. I developed the Delft Hyperloop website (using Django), attracting <em>sponsors and media attention</em>.
            </Trans>,
            <Trans i18nKey="work.projects.delfthyperloop.description.part2">
              Additionally, I created a test system to optimize the pod's performance and a control interface for real-time vehicle management and safety checks, ensuring <em>smooth and safe operations</em> during tests and the competition.
            </Trans>
          ]}
          color='#20cc8a'
        />

        <ProjectItem
          imageSrc={imgAh}
          title={t('work.projects.ah.title')}
          description={
            <Trans i18nKey="work.projects.ah.description">
              Created a versatile signage software for Albert&nbsp;Heijn's staff room display. The software showcases the <em>current time and date</em>, <em>photo slideshows</em>, <em>announcements</em>, and more, enhancing internal communication and creating a dynamic and informative environment for employees.
            </Trans>
          }
          color='#52c2df'
        />
      </ProjectItemsWrapper>
      <ShowMoreWrapper showMore={showMore}>
        <ProjectItem
          imageSrc={imgSaysimple}
          title={t('work.projects.saysimple.title')}
          description={
            <Trans i18nKey="work.projects.saysimple.description">
              Created interactive elements for Saysimple's website, including a <em>pricing calculator</em> based on configurable options, and a <em>customizable chat widget generator</em>. These tools enhance website functionality and offer practical solutions to boost client interaction and engagement.
            </Trans>
          }
          color='#aa88fd'
        />
      </ShowMoreWrapper>
      <SeeMoreButtonWrapper showMore={showMore}>
        <SeeMoreButton onClick={handleSeeMore}>
          <ArrowIcon src={downArrow} showMore={showMore} />
          {showMore ? t('work.seeLess') : t('work.seeMore')}
        </SeeMoreButton>
      </SeeMoreButtonWrapper>
    </Container>
  );
};

export default Work;
