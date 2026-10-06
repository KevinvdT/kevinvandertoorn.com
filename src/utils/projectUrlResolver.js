import { resolveProjectSlug } from './projectSlug.js';

const normalizePathPart = (part) => part.normalize('NFC').toLowerCase();

export const createProjectUrlResolver = ({ projects, sectionUrlResolver }) => {
  // Hidden projects have no public route until they are added to the Work list.
  const visibleProjects = projects.filter((project) => project.showInList);
  const projectsById = new Map(visibleProjects.map((project) => [project.id, project]));
  const projectIdsBySlug = new Map();

  const addSlug = (slug, projectId) => {
    if (!slug) return;

    const normalizedSlug = normalizePathPart(slug);
    const existingProjectId = projectIdsBySlug.get(normalizedSlug);

    if (existingProjectId && existingProjectId !== projectId) {
      throw new Error(`Project URL slug "${slug}" is shared by multiple projects`);
    }

    projectIdsBySlug.set(normalizedSlug, projectId);
  };

  // Index each locale's effective slug so old-language links still find the project.
  for (const project of visibleProjects) {
    for (const language of Object.keys(project.translations || {})) {
      addSlug(resolveProjectSlug(project.translations, language), project.id);
    }
  }

  return {
    getProjectPath(projectId, language = 'en') {
      const project = projectsById.get(projectId);
      const workPath = sectionUrlResolver.getSectionPath('work', language);
      const slug = project && resolveProjectSlug(project.translations, language);

      if (!workPath || !slug) return null;
      return `${workPath.replace(/\/$/, '')}/${encodeURIComponent(slug)}`;
    },

    resolveProjectPath(pathname) {
      let pathParts;

      try {
        pathParts = pathname
          .split('/')
          .filter(Boolean)
          .map((part) => decodeURIComponent(part));
      } catch {
        return null;
      }

      // Project routes always have exactly a Work path and a project slug.
      if (pathParts.length !== 2 || pathParts.some((part) => part.includes('/'))) {
        return null;
      }

      if (sectionUrlResolver.resolveSectionPath(`/${pathParts[0]}`) !== 'work') {
        return null;
      }

      return projectIdsBySlug.get(normalizePathPart(pathParts[1])) || null;
    },
  };
};