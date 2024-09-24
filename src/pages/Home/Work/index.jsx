import React from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next'; // Import Trans component
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import ProjectItem from './ProjectItem';
import imgAh from './img/ah.svg';
import imgSaysimple from './img/saysimple.svg';
import imgDelfthyperloop from './img/delfthyperloop.png';

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
        />
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
