export const resolveProjectSlug = (translations = {}, language = 'en') => {
  const languageCode = (language || 'en').toLowerCase().split('-')[0];
  // Project dictionaries fall back as whole objects, so resolve the slug per field.
  return translations[languageCode]?.slug || translations.en?.slug || null;
};