const toLegacyUrlSlug = (label) => label
  .toLowerCase()
  .replace(/ä/g, 'ae')
  .replace(/ö/g, 'oe')
  .replace(/ü/g, 'ue')
  .replace(/ß/g, 'ss')
  .replace(/[^a-z0-9]/g, '-');

const toUnicodeUrlSlug = (label) => label
  .normalize('NFC')
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-');

const normalizePathPart = (part) => part.normalize('NFC').toLowerCase();

export const createSectionUrlResolver = (translationsByLanguage) => {
  const aliases = new Map();
  const englishSlugs = translationsByLanguage.en?.urlSlugs || {};
  const sectionIds = Object.keys(englishSlugs);

  const addAlias = (alias, sectionId) => {
    if (!alias) return;

    const normalizedAlias = normalizePathPart(alias);
    const existingSectionId = aliases.get(normalizedAlias);

    if (existingSectionId && existingSectionId !== sectionId) {
      throw new Error(`Section URL slug "${alias}" is shared by multiple sections`);
    }

    aliases.set(normalizedAlias, sectionId);
  };

  // Keep old menu-derived paths working alongside the explicit slugs.
  for (const [language, translations] of Object.entries(translationsByLanguage)) {
    for (const sectionId of sectionIds) {
      const slug = translations.urlSlugs?.[sectionId] || englishSlugs[sectionId];
      addAlias(slug, sectionId);

      const menuLabel = translations.menu?.[sectionId];
      if (menuLabel) {
        addAlias(toLegacyUrlSlug(menuLabel), sectionId);
        addAlias(toUnicodeUrlSlug(menuLabel), sectionId);
      }
    }
  }

  return {
    getSectionPath(sectionId, language = 'en') {
      if (sectionId === 'home') return '/';

      const baseLanguage = language.toLowerCase().split('-')[0];
      const translations = translationsByLanguage[baseLanguage] || translationsByLanguage.en;
      const slug = translations.urlSlugs?.[sectionId] || englishSlugs[sectionId];

      return slug ? `/${encodeURIComponent(slug)}` : null;
    },

    resolveSectionPath(pathname) {
      let pathParts;

      try {
        // Decode before matching so literal and percent-encoded Unicode agree.
        pathParts = pathname
          .split('/')
          .filter(Boolean)
          .map((part) => decodeURIComponent(part));
      } catch {
        return null;
      }

      if (pathParts.length === 0) return 'home';
      if (pathParts.length !== 1 || pathParts[0].includes('/')) return null;

      return aliases.get(normalizePathPart(pathParts[0])) || null;
    },
  };
};