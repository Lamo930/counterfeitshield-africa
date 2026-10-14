# Contributing to CounterfeitShield Africa

Thank you for your interest in improving CounterfeitShield Africa. This project explores how product authentication and supply-chain intelligence can help manufacturers and distributors protect consumers from counterfeit medicines, spare parts, and liquor across Africa.

## Before you start

- Review the [README](README.md) to understand the project scope and current status.
- Search existing issues before opening a new one.
- For larger changes, open an issue first so the proposed direction can be discussed.
- Never commit credentials, API keys, private customer data, or production supply-chain information.

## Local development

Requirements:

- Node.js 22 or newer
- pnpm 10 or newer

```bash
pnpm install
pnpm run dev
```

Before submitting a change, run:

```bash
pnpm run check
pnpm run build
```

## What to work on

Useful contributions include:

- Improving accessibility, responsive behavior, and content clarity
- Adding evidence-based sector or country context
- Refining manufacturer and distributor workflows
- Improving the pilot-request experience
- Adding tests and validation around new behavior
- Connecting the planned CRM, verification, or dashboard services
- Fixing documentation, build, or deployment issues

Please avoid presenting unverified regulatory, health, or counterfeit-prevalence claims as facts. Cite a credible source or label assumptions clearly.

## Branches and commits

- Create a focused branch from `main`, for example `feat/pilot-form-validation` or `fix/mobile-nav-spacing`.
- Keep commits small and descriptive.
- Use imperative commit messages where practical, such as `docs: clarify local setup` or `fix: improve pilot form feedback`.
- Do not commit generated build output from `dist/`.

## Pull requests

A good pull request should:

1. Explain the problem and the proposed solution.
2. Describe the user or business impact.
3. Include screenshots or a short recording for visual changes.
4. List validation performed, including `pnpm run check` and `pnpm run build` when relevant.
5. Call out known limitations or follow-up work.

Keep pull requests focused. Separate unrelated refactors, visual changes, and product features into separate pull requests when possible.

## Design and content principles

The site uses the Meridian Ledger direction: institutional trust, operational evidence, editorial hierarchy, and a restrained palette. New work should preserve:

- Clear hierarchy and strong contrast
- Keyboard accessibility and visible focus states
- Responsive layouts for mobile and desktop
- Plain, precise language for business users
- Respectful, non-alarmist treatment of public-health and consumer-protection topics

## Reporting security concerns

Do not open a public issue for a suspected security vulnerability, exposed credential, or private data exposure. Contact the repository owner privately through GitHub with enough detail to reproduce the concern.

## Code of conduct

Be constructive, respectful, and specific. Assume good intent, welcome different regional and professional perspectives, and focus criticism on the work rather than the person.
