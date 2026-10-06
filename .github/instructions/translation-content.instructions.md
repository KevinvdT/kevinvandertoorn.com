---
applyTo: "**"
---
# Copywriting, Translation & i18n Guidelines

## Core Principles

These are guidelines, not rigid rules. Natural, authentic language should always take precedence over strict adherence to formatting rules. When in doubt, ask.

## Writing & Translation Quality

### Translation Quality

#### Natural Language
- Write text that appears to be originally written in that language, not like a literal translation.
- Adapt content to cultural context and local conventions.
- Use an appropriate tone for the target audience: professional but approachable.
- Maintain a confident but not arrogant tone across all languages: convincing without being boastful.
- Ensure the tone matches the portfolio's purpose of attracting clients and showcasing expertise.

#### Consistency
- Maintain consistent terminology across all translations.
- Keep technical terms the same throughout (for example, “Django REST Framework”).
- Keep brand names and proper nouns consistent across languages, except where there are official local names (for example, “Delft University of Technology” and “Technische Universiteit Delft”).

#### Length and Formatting
- Adapt text length to fit UI constraints in each language.
- Account for naturally longer or shorter phrasing across languages.
- Preserve line breaks and formatting where they serve a purpose.
- Use non-breaking spaces (`\u00A0`) for proper text flow.

### Technical Content
- Keep technical terms consistent across languages.
- Use established translations for common technical terms.
- Maintain code examples and URLs unchanged, except when example text depends on language context, such as inline comments, string literals, or visible placeholder text.

### Dynamic Content
- Preserve numbered placeholders (`<1>`, `<2>`) exactly as they appear.
- Ensure placeholder context makes sense in each language.
- Test placeholder positioning with different text lengths.

## Localization Guidelines

### Cultural Context
- Localize examples and references when appropriate.
- Consider cultural differences in communication style.
- Adapt idioms and expressions to natural equivalents.

### Localization vs. Global Context

When referencing culturally specific places, institutions, or expressions, consider the typical audience for each language. Local audiences can be assumed to know familiar local references; international audiences may need a brief explanation. When in doubt, err on the side of brief explanation.

For example, Dutch readers are generally familiar with local references such as de Efteling or TU Delft. For an international audience, briefly explain the reference where needed.

## Language-Specific Formatting

Follow these standard language variants unless a localized adaptation is clearly more natural:
- English: United States
- Dutch: Netherlands
- French: France
- German: Germany

Prefer neutral or generally accepted forms when natural. Clarity and authenticity take priority over rigid adherence to variants.

### English
- Use American spelling (for example, “organize” and “center”).
- Prefer neutral English vocabulary and phrasing for a global audience when natural.
- Use unambiguous British day/month/year date wording (for example, “15 March 2024”), or determine date order from the user's locale.
- Use curly quotation marks and apostrophes (“…”, ‘…’, …’s) instead of straight ones.
- Use title case where it is normally used, such as headings and titles.
- Use the Oxford comma in lists.
- Use em dashes sparingly for emphasis and breaks.

### Dutch, German, French, and Other Languages
- Avoid em dashes; use language-appropriate punctuation instead.
- Follow local capitalization rules, such as capitalizing German nouns and using sentence case for Dutch titles.
- Follow language-appropriate comma rules; do not use the Oxford comma in Dutch or German.
- Use informal address for Dutch (`je/jij`) and formal address for French (`vous`) and German (`Sie`).
- Use appropriate curly quotation marks and apostrophes:
  - English: “…” and ‘…’
  - German: „…“ and ‚…’
  - Dutch: “…” and ‘…’
  - French: « … » with thin non-breaking spaces and curly apostrophes (’)
- Avoid straight quotes for proper typography.

## Capitalization and Punctuation
- Use title case where normally appropriate in English and sentence case for Dutch titles.
- Use em dashes sparingly in English and avoid them in Dutch, German, and other languages.
- Use the Oxford comma in English; avoid it in Dutch and German.
- Use curly quotation marks and apostrophes appropriate to each language.

## Examples

### Natural Language
```json
// English
"developer_intro": "I design and build web tools that feel simple — but solve tough challenges behind the scenes."

// Dutch
"developer_intro": "Ik maak webtools die eenvoudig te gebruiken zijn – en complexe problemen oplossen."

// German
"developer_intro": "Ich entwickle Web-Tools, die einfach wirken – aber komplexe Herausforderungen im Hintergrund lösen."
```

### Cultural Adaptation
```json
// English, international audience
"hobbies": "Outside of work, I enjoy strolling in Efteling, a Dutch park with a unique enchanting charm."

// Dutch, local context
"hobbies": "Buiten werk vertoef ik graag in de Efteling, speel ik Nintendo-spellen of leer ik vreemde talen."

// German, adapted for German audience
"hobbies": "In meiner Freizeit genieße ich Spaziergänge im Efteling, einem niederländischen Park mit einzigartigem Charme."
```

### Formality
Use informal address in Dutch and formal address in German and French. For example, Dutch can use “Goede resultaten bereik je samen,” while German and French should address the reader formally or use an impersonal construction.

### Technical Consistency
Keep terms such as “Django REST Framework” consistent across languages. Shortened forms may be localized only when they remain recognizable and consistent.

## What to Avoid
- Avoid literal translations that sound unnatural in the target language.
- Avoid a tone that is too formal for the portfolio; keep it confident and approachable.
- Avoid culturally unfamiliar references without a brief explanation for international readers.
- Avoid em dashes in Dutch and straight quotes where proper typography calls for curly quotes.

## Maintenance
- Revalidate output for tone, clarity, and correctness when models or prompts are updated.
- Test UI layout with generated content to ensure integrity across varying text lengths.