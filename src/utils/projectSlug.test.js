import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { resolveProjectSlug } from './projectSlug.js';
import { createProjectUrlResolver } from './projectUrlResolver.js';
import { createSectionUrlResolver } from './sectionUrlResolver.js';

const loadProjectTranslations = (projectName) => {
  const directory = `../pages/Home/Work/Projects/${projectName}/i18n`;
  const load = (language) => JSON.parse(
    readFileSync(new URL(`${directory}/${language}.json`, import.meta.url), 'utf8')
  );

  return {
    en: load('en'),
    nl: load('nl'),
    de: load('de'),
  };
};

const languages = ['en', 'nl', 'de', 'fr', 'da', 'es', 'ja'];
const sectionUrlResolver = createSectionUrlResolver(Object.fromEntries(
  languages.map((language) => [language, JSON.parse(
    readFileSync(new URL(`../i18n/translations/${language}.json`, import.meta.url), 'utf8')
  )])
));

const projectUrlResolver = createProjectUrlResolver({
  sectionUrlResolver,
  projects: [
    { id: 'mission-control', showInList: true, translations: loadProjectTranslations('MissionControl') },
    { id: 'interactive-tools', showInList: true, translations: loadProjectTranslations('InteractiveTools') },
    { id: 'flood-risk', showInList: true, translations: loadProjectTranslations('FloodRisk') },
    { id: 'eftel-times', showInList: true, translations: loadProjectTranslations('EftelTimes') },
  ],
});

test('every displayed project has an English slug in its local translations', () => {
  for (const projectName of ['MissionControl', 'InteractiveTools', 'FloodRisk', 'EftelTimes']) {
    assert.ok(loadProjectTranslations(projectName).en.slug, `${projectName} is missing its English slug`);
  }
});

test('project slugs use the selected locale and fall back to English per field', () => {
  const missionControl = loadProjectTranslations('MissionControl');
  const floodRisk = loadProjectTranslations('FloodRisk');

  assert.equal(resolveProjectSlug(missionControl, 'nl-NL'), 'mission-control');
  assert.equal(resolveProjectSlug(floodRisk, 'nl'), 'overstromingsrisico-onderzoek');
  assert.equal(resolveProjectSlug(floodRisk, 'fr'), 'flood-risk-analysis');
});

test('resolves project URLs under localized Work paths', () => {
  assert.equal(projectUrlResolver.resolveProjectPath('/work/mission-control'), 'mission-control');
  assert.equal(projectUrlResolver.resolveProjectPath('/werk/mission-control'), 'mission-control');
  assert.equal(projectUrlResolver.resolveProjectPath('/arbeiten/whatsapp-chatwidget'), 'interactive-tools');
  assert.equal(projectUrlResolver.resolveProjectPath('/werk/efteling-wachttijden'), 'eftel-times');
  assert.equal(projectUrlResolver.resolveProjectPath('/arbeiten/hochwasserrisiko-forschung'), 'flood-risk');
});

test('builds project URLs from project-local slugs with English fallback', () => {
  assert.equal(projectUrlResolver.getProjectPath('mission-control', 'nl'), '/werk/mission-control');
  assert.equal(projectUrlResolver.getProjectPath('interactive-tools', 'de'), '/arbeiten/whatsapp-chatwidget');
  assert.equal(projectUrlResolver.getProjectPath('unknown', 'en'), null);
});

test('rejects project paths with unknown sections, extra parts, or malformed encoding', () => {
  assert.equal(projectUrlResolver.resolveProjectPath('/about/mission-control'), null);
  assert.equal(projectUrlResolver.resolveProjectPath('/work/mission-control/extra'), null);
  assert.equal(projectUrlResolver.resolveProjectPath('/work/%E0%A4%A'), null);
});