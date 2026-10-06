import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createSectionUrlResolver } from './sectionUrlResolver.js';

const loadTranslations = (language) => JSON.parse(
  readFileSync(new URL(`../i18n/translations/${language}.json`, import.meta.url), 'utf8')
);

const resolver = createSectionUrlResolver({
  en: loadTranslations('en'),
  nl: loadTranslations('nl'),
  de: loadTranslations('de'),
  fr: loadTranslations('fr'),
  da: loadTranslations('da'),
  es: loadTranslations('es'),
  ja: loadTranslations('ja'),
});

test('resolves canonical section slugs for every locale', () => {
  assert.equal(resolver.resolveSectionPath('/about'), 'about');
  assert.equal(resolver.resolveSectionPath('/werk'), 'work');
  assert.equal(resolver.resolveSectionPath('/arbeiten'), 'work');
  assert.equal(resolver.resolveSectionPath('/projets'), 'work');
  assert.equal(resolver.resolveSectionPath('/om-mig'), 'about');
  assert.equal(resolver.resolveSectionPath('/sobre-mi'), 'about');
  assert.equal(resolver.resolveSectionPath('/project'), 'work');
});

test('preserves old transliterated and Unicode section paths', () => {
  assert.equal(resolver.resolveSectionPath('/ueber'), 'about');
  assert.equal(resolver.resolveSectionPath('/über'), 'about');
  assert.equal(resolver.resolveSectionPath('/%C3%BCber'), 'about');
});

test('encodes Unicode slugs in canonical section paths', () => {
  const unicodeResolver = createSectionUrlResolver({
    en: { urlSlugs: { about: 'about' }, menu: { about: 'About' } },
    de: { urlSlugs: { about: 'über' }, menu: { about: 'Über' } },
  });

  assert.equal(unicodeResolver.resolveSectionPath('/über'), 'about');
  assert.equal(unicodeResolver.resolveSectionPath('/%C3%BCber'), 'about');
  assert.equal(unicodeResolver.getSectionPath('about', 'de'), '/%C3%BCber');
});

test('returns canonical paths for the selected locale', () => {
  assert.equal(resolver.getSectionPath('about', 'de'), '/ueber');
  assert.equal(resolver.getSectionPath('about', 'fr-FR'), '/a-propos');
  assert.equal(resolver.getSectionPath('about', 'da'), '/om-mig');
  assert.equal(resolver.getSectionPath('about', 'es'), '/sobre-mi');
  assert.equal(resolver.getSectionPath('work', 'ja'), '/project');
  assert.equal(resolver.getSectionPath('home', 'nl'), '/');
});

test('rejects unknown, multi-part, and malformed paths', () => {
  assert.equal(resolver.resolveSectionPath('/missing'), null);
  assert.equal(resolver.resolveSectionPath('/work/mission-control'), null);
  assert.equal(resolver.resolveSectionPath('/%E0%A4%A'), null);
});