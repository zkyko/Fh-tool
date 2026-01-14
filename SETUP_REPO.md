# Setting up docs-site as a separate GitHub repository

Run these commands from the `docs-site` directory:

```bash
cd docs-site

# Initialize git repository
git init

# Create a README if it doesn't exist
# (README.md already exists)

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

After pushing, you can set up GitHub Pages in the repository settings.

