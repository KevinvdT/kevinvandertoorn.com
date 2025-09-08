import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import MissionControl from './Projects/MissionControl';
import TestSetup from './Projects/TestSetup';
import MainWebsite from './Projects/MainWebsite';
import InteractiveTools from './Projects/InteractiveTools';
import EftelTimes from './Projects/EftelTimes';
import TransportNetworkModel from './Projects/TransportNetworkModel';

const ProjectItemsWrapper = styled.div`
  // margin-top: 1.5rem; /* Adjusted margin */
  // margin-bottom: 1.5rem; /* Adjusted margin */
`;


const Work = () => {
  const { t } = useTranslation(); // Hook to get translation function

  return (
    <Container id="work">
      <SectionTitle>{t('work.title')}</SectionTitle>

      <ProjectItemsWrapper>
        <MissionControl />
        <InteractiveTools readMore={false} />
        <EftelTimes />
        {/* <TestSetup /> */}
        {/* <MainWebsite /> */}
        {/* <TransportNetworkModel /> */}
      </ProjectItemsWrapper>

    </Container>
  );
};

export default Work;
