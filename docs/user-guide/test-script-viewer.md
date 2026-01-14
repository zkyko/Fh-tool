# Test Script Viewer

The Test Script Viewer allows you to view and browse test files in your cloned repositories.

## Overview

Test Script Viewer provides:

- File tree navigation for test files
- Code viewer for test scripts
- Test file discovery based on patterns
- Read-only viewing of test code
- Integration with repository management

## Accessing Test Script Viewer

1. Click **Test Script Viewer** in the sidebar (WORKSPACE section)
2. Select a repository (if multiple are available)
3. Browse test files in the file tree

## File Tree

### Test File Discovery

Test files are automatically discovered based on patterns:

- Common test file patterns (e.g., `*.spec.ts`, `*.test.ts`, `*.test.js`)
- Files matching test naming conventions
- Configurable patterns (if implemented)

### Navigation

- **File Tree Sidebar**: Left side shows test files organized by directory
- **Expand/Collapse**: Click folders to expand/collapse
- **File Selection**: Click a file to view its contents

:::tip Screenshot Opportunity
Add a screenshot showing the file tree with test files visible.
:::

## Code Viewer

### Viewing Test Code

1. Select a test file from the tree
2. Code is displayed in the editor area
3. Syntax highlighting is applied
4. Code is read-only (viewing only)

### Features

- **Syntax Highlighting**: Code is colorized for readability
- **Read-Only**: Files cannot be edited in Axis
- **Full File View**: View complete test file content
- **Formatting**: Code is displayed with proper formatting

:::tip Screenshot Opportunity
Add a screenshot showing test code in the viewer with syntax highlighting.
:::

## Integration with Repo Companion

Test Script Viewer works with repositories managed in Repo Companion:

- Uses repositories cloned via Repo Companion
- Scans repositories in the default workspace
- Updates when repositories are refreshed

## Opening in VS Code

To edit test files:

1. Use **Repo Companion** to open repository in VS Code
2. Edit files in VS Code
3. Use Repo Companion to commit changes

Test Script Viewer is for viewing only - editing is done in VS Code.

## Best Practices

- **Use for quick reference** when viewing test code
- **Navigate file tree** to understand test structure
- **Open in VS Code** when edits are needed
- **Review test patterns** to understand test organization

## Related Topics

- [Repository Management](./repository-management.md) - Clone and manage repositories
- [Configuration](../getting-started/configuration.md) - Set up repositories
- [Architecture](../architecture/overview.md) - Understand test discovery

