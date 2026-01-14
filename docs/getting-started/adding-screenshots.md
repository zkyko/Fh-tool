# Adding Screenshots to Documentation

This guide explains how to add screenshots to the Axis documentation site.

## Screenshot Opportunities

Throughout the documentation, you'll see sections marked with:

```markdown
:::tip Screenshot Opportunity
Add a screenshot showing [description]
:::
```

These are placeholders indicating where screenshots would be helpful.

## Where to Add Screenshots

Screenshots should be added to the `docs-site/static/img/` directory. Create a logical folder structure:

```
docs-site/static/img/
├── getting-started/
│   ├── installer-wizard.png
│   ├── first-launch.png
│   └── settings-screen.png
├── user-guide/
│   ├── dashboard.png
│   ├── browserstack-automate-builds.png
│   └── repository-management.png
└── workflows/
    └── jira-bug-creation-modal.png
```

## How to Reference Screenshots

In Markdown files, reference screenshots using standard Markdown image syntax:

```markdown
![Dashboard Overview](/img/user-guide/dashboard.png)
```

Or with a caption:

```markdown
![Dashboard showing metrics and recent activity](/img/user-guide/dashboard.png)
```

## Screenshot Guidelines

### Best Practices

1. **Take clear, focused screenshots**
   - Crop to show only relevant content
   - Highlight important UI elements if needed
   - Use arrows or annotations to draw attention

2. **Consistent style**
   - Use consistent window sizes
   - Maintain consistent UI state (same theme, same data)
   - Use descriptive file names

3. **File naming**
   - Use kebab-case (e.g., `jira-bug-creation-modal.png`)
   - Be descriptive but concise
   - Include context (e.g., `dashboard-with-data.png` vs `dashboard-empty.png`)

4. **Image formats**
   - Use PNG for screenshots
   - Optimize file sizes (use tools like ImageOptim or similar)
   - Keep file sizes reasonable (< 500KB when possible)

5. **Accessibility**
   - Include descriptive alt text
   - Ensure screenshots are clear at different zoom levels
   - Consider color contrast for annotations

### Screenshot Checklist

When taking screenshots, consider:

- [ ] Clear and in focus
- [ ] Shows relevant UI elements
- [ ] Window is appropriately sized
- [ ] No sensitive data visible
- [ ] Consistent with other screenshots
- [ ] File is optimized (reasonable size)
- [ ] Descriptive filename
- [ ] Proper alt text included in markdown

## Priority Screenshots

If you need to prioritize which screenshots to add first, focus on:

1. **Getting Started** - Installation, configuration, first launch
2. **User Guide** - Key features and workflows
3. **Workflows** - Step-by-step process screenshots
4. **Troubleshooting** - Error states and solutions

## Tools for Screenshots

- **macOS**: Built-in screenshot tools (Cmd+Shift+4, Cmd+Shift+5)
- **Windows**: Snipping Tool, Windows+Shift+S
- **Linux**: Various tools (GNOME Screenshot, Flameshot, etc.)
- **Annotation**: Use tools like Skitch, Annotate, or built-in editors

## Current Status

Currently, the documentation includes placeholder sections indicating where screenshots should be added. As screenshots are captured, they can be added to the documentation following the guidelines above.

## Updating Documentation

When adding screenshots:

1. Take the screenshot
2. Save to appropriate directory (`docs-site/static/img/`)
3. Update the Markdown file to include the image reference
4. Remove or update the "Screenshot Opportunity" tip if appropriate
5. Test that the image displays correctly in the built documentation

