# Setting up docs-site as a separate GitHub repository

Run these commands from the `docs-site` directory:

```bash
cd docs-site

# Initialize git repository
git init

# Add all files
git add .

# Make the first commit
git commit -m "Initial commit: Axis documentation site"

# Rename branch to main
git branch -M main

# Add the remote repository
git remote add origin https://github.com/zkyko/Fh-tool.git

# Push to GitHub
git push -u origin main
```

## GitHub Pages Setup

1. **Enable GitHub Pages in repository settings:**
   - Go to: https://github.com/zkyko/Fh-tool/settings/pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

2. **Update docusaurus.config.js URL (optional):**
   - Update the `url` field in `docusaurus.config.js` with your GitHub Pages URL
   - Example: `url: 'https://zkyko.github.io'` (if using default GitHub Pages URL)

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site!

