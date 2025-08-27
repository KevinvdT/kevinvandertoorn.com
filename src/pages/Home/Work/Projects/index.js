import DelfHyperloop from './DelfHyperloop';
import DelfHyperloopModalContent from './DelfHyperloop/ModalContent';

// Project configurations - each project can have custom styling, behavior, etc.
export const projectConfigs = [
  {
    id: 'delfthyperloop',
    component: DelfHyperloop,
    modalContent: DelfHyperloopModalContent,
    color: '#20cc8a',
    showInList: true,
    order: 1
  }
  // Add more projects here as you create them
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectConfigs.find(project => project.id === id);
};

// Helper function to get visible projects
export const getVisibleProjects = () => {
  return projectConfigs
    .filter(project => project.showInList)
    .sort((a, b) => a.order - b.order);
};

// Individual exports for specific use cases
export { DelfHyperloop, DelfHyperloopModalContent };
