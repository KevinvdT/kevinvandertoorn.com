import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
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
          description={t('work.projects.saysimple.description')}
        />
        <ProjectItem
          imageSrc={imgAh}
          title={t('work.projects.ah.title')}
          description={t('work.projects.ah.description')}
        />
      </ProjectItemsWrapper>
    </Container>
  );
};

export default Work;
