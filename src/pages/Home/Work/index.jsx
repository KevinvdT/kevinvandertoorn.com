import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../../components/layout/Container';
import { SectionTitle } from '../../../components/ui/Title';
import { sectionUrlResolver } from '../../../i18n';
import { setActiveProjectId } from '../../../redux/slices/activeSectionSlice';
import { getProjectTitle, getVisibleProjects } from './Projects';

const ProjectItemsWrapper = styled.div`
  // margin-top: 1.5rem; /* Adjusted margin */
  // margin-bottom: 1.5rem; /* Adjusted margin */
`;


const Work = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const activeProjectId = useSelector((state) => state.activeSection.activeProjectId);

  const openProject = (projectId, slug) => {
    // Project details are separate history entries; section movement replaces its entry.
    const workPath = sectionUrlResolver.getSectionPath('work', i18n.resolvedLanguage);
    if (!workPath || !slug) return;

    const projectPath = `${workPath.replace(/\/$/, '')}/${encodeURIComponent(slug)}`;
    window.history.pushState({
      ...window.history.state,
      projectNavigation: projectId,
    }, '', projectPath);
    dispatch(setActiveProjectId(projectId));
    const projectTitle = getProjectTitle(projectId, i18n.resolvedLanguage);
    document.title = projectTitle
      ? `Kevin van der Toorn · ${projectTitle}`
      : `Kevin van der Toorn · ${t('menu.work')}`;
  };

  const closeRoutedProject = () => {
    // Return to the prior section for in-app opens, or Work for a direct link.
    if (window.history.state?.projectNavigation) {
      window.history.back();
      return;
    }

    dispatch(setActiveProjectId(null));
    const workPath = sectionUrlResolver.getSectionPath('work', i18n.resolvedLanguage);
    if (workPath) {
      window.history.replaceState(window.history.state, '', workPath);
    }
    document.title = `Kevin van der Toorn · ${t('menu.work')}`;
  };

  return (
    <Container id="work">
      <SectionTitle>{t('work.title')}</SectionTitle>

      <ProjectItemsWrapper>
        {/* The same visible-project list powers both rendering and URL resolution. */}
        {getVisibleProjects().map(({ id, component: Project }) => (
          <Project
            key={id}
            projectId={id}
            activeProjectId={activeProjectId}
            onProjectOpen={openProject}
            onRouteClose={closeRoutedProject}
          />
        ))}
      </ProjectItemsWrapper>

    </Container>
  );
};

export default Work;
