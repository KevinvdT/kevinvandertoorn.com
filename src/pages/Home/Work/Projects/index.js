import DelfHyperloop from './DelfHyperloop';
import MissionControl from './MissionControl';
import missionControlTranslations from './MissionControl/i18n';
import InteractiveTools from './InteractiveTools';
import interactiveToolsTranslations from './InteractiveTools/i18n';
import FloodRisk from './FloodRisk';
import floodRiskTranslations from './FloodRisk/i18n';
import EftelTimes from './EftelTimes';
import eftelTimesTranslations from './EftelTimes/i18n';
import { resolveProjectSlug } from '../../../../utils/projectSlug';
import { createProjectUrlResolver } from '../../../../utils/projectUrlResolver';
import { sectionUrlResolver } from '../../../../i18n';

// Stable IDs connect routes to project-local translated slugs and modal components.
export const projectConfigs = [
  {
    id: 'mission-control',
    component: MissionControl,
    translations: missionControlTranslations,
    showInList: true,
    order: 1,
  },
  {
    id: 'interactive-tools',
    component: InteractiveTools,
    translations: interactiveToolsTranslations,
    showInList: true,
    order: 2,
  },
  {
    id: 'flood-risk',
    component: FloodRisk,
    translations: floodRiskTranslations,
    showInList: true,
    order: 3,
  },
  {
    id: 'eftel-times',
    component: EftelTimes,
    translations: eftelTimesTranslations,
    showInList: true,
    order: 4,
  },
  {
    id: 'delfthyperloop',
    component: DelfHyperloop,
    color: '#20cc8a',
    showInList: false,
    order: 5,
  },
];

export const getProjectById = (id) => {
  return projectConfigs.find(project => project.id === id);
};

export const getVisibleProjects = () => {
  return projectConfigs
    .filter(project => project.showInList)
    .sort((a, b) => a.order - b.order);
};

export const getProjectSlug = (id, language) => {
  const project = getProjectById(id);
  return project ? resolveProjectSlug(project.translations, language) : null;
};

export const getProjectTitle = (id, language) => {
  const project = getProjectById(id);
  if (!project?.translations) return null;

  const languageCode = (language || 'en').toLowerCase().split('-')[0];
  const translations = project.translations[languageCode] || project.translations.en;

  // Modal headings can differ from the shorter project-card title.
  return translations?.modal?.title || translations?.title || null;
};

export const projectUrlResolver = createProjectUrlResolver({
  projects: projectConfigs,
  sectionUrlResolver,
});

export { DelfHyperloop };
