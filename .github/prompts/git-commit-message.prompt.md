---
description: Generate a concise, fact-based Git commit message from the current changes.
---

# Generate a Git Commit Message

Review the relevant changes and write a commit message that describes only observable modifications.

## Guidelines
- Describe what changed, and why only when the reason is known or obvious.
- Do not infer the developer's intent or add context that is not visible in the changes.
- Start the subject with an imperative verb (Add, Fix, Update, Remove, etc.).
- Keep the subject under 50 characters when possible.
- Be specific about the modified files, functions, or features.
- Use a scope prefix when helpful: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`, `test:`, or `chore:`.
- For breaking changes, include `BREAKING CHANGE:` in the body and explain the change.
- Avoid vague messages such as “WIP,” “temp,” “Fix stuff,” or “Fix bug that was causing issues.”

## Examples

Good:
- `Add login form validation`
- `Fix responsive layout in mobile view`
- `Update package.json dependencies`
- `Remove unused CSS classes`
- `feat: add dark mode toggle`
- `fix: resolve memory leak in image processing`

Avoid:
- `Improve user experience by adding validation`
- `Fix bug that was causing issues`
- `Update code for better performance`
- `WIP`
- `Fix stuff`

For a breaking change, use a body such as:

```text
feat: change API response format

BREAKING CHANGE: user object now includes 'id' field
```