# CounterfeitShield Africa

CounterfeitShield Africa is a B2B product-authentication and supply-chain intelligence platform concept for African manufacturers and distributors. It is designed to help protect consumers from counterfeit medicines, spare parts, and liquor while giving brands better visibility across the distribution chain.

The website uses an editorial, trust-oriented **Meridian Ledger** design language to communicate product identity, route visibility, and response operations.

## What this repository contains

- Responsive marketing website for CounterfeitShield Africa
- Sector messaging for medicines, spare parts, and liquor
- Manufacturer and distributor-focused product positioning
- Pilot-request experience for prospective clients
- Repository-local brand assets for independent hosting
- GitHub Actions workflow for GitHub Pages deployment

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Wouter
- Lucide React
- Sonner

## Getting started

### Requirements

- Node.js 22+
- pnpm 10+

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm run dev
```

The development server runs on port 3000 by default.

### Validate the project

```bash
pnpm run check
pnpm run build
```

The production site is generated in `dist/public`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the static site when changes are pushed to `main`.

To enable it in GitHub:

1. Open **Settings → Pages** in the repository.
2. Set the deployment source to **GitHub Actions**.
3. Push to `main` or manually run the **Deploy to GitHub Pages** workflow.

The build automatically handles both repository sites and user sites by setting the correct Vite base path.

## Project status

This repository contains the static marketing frontend. The following product capabilities are planned extensions rather than connected backend services:

- CRM or email integration for pilot requests
- Country-specific regulatory and verification pages
- Manufacturer dashboard for scan anomalies and incident reports
- Production authentication and supply-chain data services

## License

This project is licensed under the [MIT License](LICENSE).
