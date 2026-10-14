# GitHub Pages deployment

This project is configured to deploy automatically through GitHub Actions.

1. Push the repository to GitHub with the default branch named `main`.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push a change or run **Deploy to GitHub Pages** from the Actions tab.

The workflow handles repository subpaths such as `https://username.github.io/repository-name/` and user sites such as `https://username.github.io/`.

The site uses repository-local brand assets in `client/public/assets`, so it does not depend on Manus storage at runtime.
