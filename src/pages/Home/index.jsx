import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '../../components/layout/Container';
import Divider from '../../components/layout/Divider';
import Menu from '../../components/ui/Menu';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Contact from './Contact';
import LanguageSwitcher from '../../components/ui/LanguageSwitcher';
import { sectionUrlResolver } from '../../i18n';
import { getProjectTitle, projectUrlResolver } from './Work/Projects';
import { setActiveProjectId, setActiveSection } from '../../redux/slices/activeSectionSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  // React StrictMode remounts effects in development; initialize the incoming URL once.
  const initializedUrl = useRef(false);

  useEffect(() => {
    const syncLocation = (initialLoad = false) => {
      // Project paths are more specific than section paths, so resolve them first.
      const projectId = projectUrlResolver.resolveProjectPath(window.location.pathname);
      if (projectId) {
        const projectPath = projectUrlResolver.getProjectPath(projectId, i18n.resolvedLanguage);
        if (projectPath && projectPath !== window.location.pathname) {
          window.history.replaceState(window.history.state, '', projectPath);
        }
        dispatch(setActiveSection({ sectionId: 'work', scroll: false, updateUrl: false }));
        dispatch(setActiveProjectId(projectId));
        const projectTitle = getProjectTitle(projectId, i18n.resolvedLanguage);
        document.title = projectTitle
          ? `Kevin van der Toorn · ${projectTitle}`
          : `Kevin van der Toorn · ${i18n.t('menu.work')}`;
        if (initialLoad) {
          document.getElementById('work')?.scrollIntoView({ behavior: 'instant' });
        } else {
          document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      dispatch(setActiveProjectId(null));
      const sectionId = sectionUrlResolver.resolveSectionPath(window.location.pathname);
      if (!sectionId || (initialLoad && sectionId === 'home')) return;

      dispatch(setActiveSection({ sectionId, scroll: !initialLoad }));
      if (initialLoad) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'instant' });
      }
    };

    if (!initializedUrl.current) {
      initializedUrl.current = true;
      syncLocation(true);
    }

    // Back and Forward restore the section and optional project modal from the URL.
    const handlePopState = () => syncLocation(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [dispatch, i18n.resolvedLanguage]);

  return (
    <>
      <LanguageSwitcher />
      <PageContainer>
        <Menu />

        <Hero />
        <Divider />

        <About />
        <Divider />

        <Work />
        <Divider />

        <Skills />
      </PageContainer>
      <Contact />
    </>
  );
};

export default Home;
