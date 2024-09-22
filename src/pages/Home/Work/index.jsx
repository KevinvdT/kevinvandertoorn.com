import React from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next'; // Import Trans component
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import ProjectItem from './ProjectItem';
import imgAh from './img/ah.svg';
import imgSaysimple from './img/saysimple.svg';

const ProjectItemsWrapper = styled.div`
  margin-top: 3rem;
`;

const Work = () => {
  const { t } = useTranslation(); // Hook to get translation function

  return (
    <Container id="work">
      <SectionTitle>{t('work.title')}</SectionTitle>

      <ProjectItemsWrapper>
        <ProjectItem
          imageSrc={imgSaysimple}
          title={t('work.projects.saysimple.title')}
          description={
            <Trans i18nKey="work.projects.saysimple.description">
              Created interactive elements for Saysimple's website, including a <em>pricing calculator</em> based on configurable options, and a <em>customizable chat widget generator</em>. These tools enhance website functionality and offer practical solutions to boost client interaction and engagement.
            </Trans>
          }
        />
        <ProjectItem
          imageSrc={imgAh}
          title={t('work.projects.ah.title')}
          description={
            <Trans i18nKey="work.projects.ah.description">
              Created a versatile signage software for Albert&nbsp;Heijn's staff room display. The software showcases the <em>current time and date</em>, <em>photo slideshows</em>, <em>announcements</em>, and more, enhancing internal communication and creating a dynamic and informative environment for employees.
            </Trans>
          }
        />
      </ProjectItemsWrapper>
    </Container>
  );
};

export default Work;
