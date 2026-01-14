# Repository Management

Axis provides comprehensive Git workflow management through the Repo Companion feature, allowing QA engineers to manage repositories without using the command line.

## Overview

Repo Companion enables you to:

- Clone repositories from Azure DevOps
- Manage Git operations (pull, push, commit)
- Stage and unstage files
- Manage branches
- View commit history
- Open repositories in VS Code

## Default Workspace

Axis uses a default workspace directory for all cloned repositories:

- **Location**: `~/Documents/Axis-Workspace` (macOS/Linux) or `Documents\Axis-Workspace` (Windows)
- **Auto-created**: Created automatically on first repository clone
- **Persistent**: Stored in database, persists across app restarts

## Viewing Repositories

### Repository List

1. Click **Repo Companion** in the sidebar (TOOLS section)
2. View configured Azure DevOps repositories
3. Each repository shows:
   - Repository name
   - Repository URL
   - Clone status
   - Clone button (if not yet cloned)

:::tip Screenshot Opportunity
Add a screenshot showing the repository list with clone buttons.
:::

### Detected Repositories

Repositories cloned to the default workspace are automatically detected:

- **Auto-detection**: Scans workspace on app startup
- **Sync Status Indicators**:
  - "X behind" (warning) - needs pull
  - "X ahead" (info) - has unpushed commits
  - "Up to date" (success) - synced
- **Refresh Button**: Manually re-scan for repositories
- **Click to Load**: Click a detected repo to view details

:::tip Screenshot Opportunity
Add a screenshot showing detected repositories with sync status indicators.
:::

## Cloning Repositories

### Clone a Repository

1. Find the repository in the repository list
2. Click **Clone** button
3. Wait for clone operation to complete
4. Repository appears in "Detected Repositories"
5. Repository files are saved to default workspace

**Requirements:**
- Azure DevOps must be configured in Settings
- PAT token must have Git read permissions
- Repository must be accessible with your credentials

:::tip Screenshot Opportunity
Add screenshots showing:
- Before clone (repository list)
- Clone in progress
- After clone (detected repositories)
:::

## Git Status

### Viewing Status

1. Select a cloned repository (click in Detected Repositories)
2. View Git status section showing:
   - **Current Branch**: Active branch name
   - **Ahead/Behind Counts**: Sync status with remote
   - **File Changes**: Summary of modifications

### File Categories

Files are organized into three sections:

- **Staged Changes** (green): Files ready to commit
- **Unstaged Changes** (yellow): Modified files not yet staged
- **Untracked Files** (blue): New files not yet added to Git

:::tip Screenshot Opportunity
Add a screenshot showing Git status with all three file categories visible.
:::

## Staging Files

### Stage Individual Files

1. In **Unstaged Changes** section, click **Stage** on a file
2. File moves to **Staged Changes** section
3. Repeat for each file you want to commit

### Unstage Files

1. In **Staged Changes** section, click **Unstage** on a file
2. File moves back to **Unstaged Changes** section

### Stage All Files

- Click **Stage All** button to stage all unstaged changes at once

:::tip Screenshot Opportunity
Add screenshots showing:
- File in unstaged section
- Clicking stage button
- File moved to staged section
:::

## Creating Commits

### Commit Workflow

1. **Stage files** you want to commit (see above)
2. **Enter commit message** in the commit message input
   - Minimum 10 characters required
   - Character count is displayed
   - Commit button is disabled until valid
3. **Click Commit** button
4. **Verify success** - staged files are cleared, commit appears in history

### Commit Message Validation

- **Minimum Length**: 10 characters
- **Required**: Must have staged files to commit
- **Validation**: Commit button disabled until requirements met
- **Error Handling**: Clear error messages if validation fails

:::tip Screenshot Opportunity
Add screenshots showing:
- Commit message input with validation
- Commit button disabled (invalid)
- Commit button enabled (valid)
- Commit success message
:::

## Branch Management

### Viewing Branches

1. Select a repository
2. View branch management section
3. See:
   - **Local Branches**: All local branches
   - **Current Branch**: Highlighted/indicated
   - **Branch Names**: Clear display

:::tip Screenshot Opportunity
Add a screenshot showing branch list with current branch indicated.
:::

### Creating a Branch

1. Click **Create Branch** button
2. Enter new branch name
3. Click **Create** or confirm
4. New branch becomes current branch
5. Branch appears in branch list

**Validation:**
- Invalid branch names are rejected
- Duplicate branch names are prevented
- Clear error messages displayed

:::tip Screenshot Opportunity
Add screenshots showing branch creation process.
:::

### Switching Branches

1. Select a different branch from the list
2. Confirm switch (if uncommitted changes exist)
3. Working directory updates to selected branch
4. Git status refreshes

**Protection:**
- Uncommitted changes may prevent switching (if implemented)
- Confirmation dialog for uncommitted changes
- Clear warnings displayed

:::tip Screenshot Opportunity
Add a screenshot showing branch switching with confirmation.
:::

## Pull and Push Operations

### Pull Changes

1. Check repository status (should show "X behind" if updates available)
2. Click **Pull** button
3. Wait for pull operation to complete
4. Git status updates (behind count decreases/clears)
5. Local repository is up to date

**Error Handling:**
- Merge conflicts are detected and reported
- Network errors are handled gracefully
- Clear error messages displayed

:::tip Screenshot Opportunity
Add screenshots showing pull operation.
:::

### Push Changes

1. Create commits (see Creating Commits above)
2. Check repository status (should show "X ahead")
3. Click **Push** button
4. Wait for push operation to complete
5. Git status updates (ahead count decreases/clears)

**Requirements:**
- Must have commits to push
- PAT token must have write permissions
- Push button disabled if no commits to push

**Error Handling:**
- Authentication errors are reported
- Permission errors are displayed
- Network errors are handled

:::tip Screenshot Opportunity
Add screenshots showing push operation.
:::

## Commit History

### Viewing History

1. Select a repository
2. Look for **Commit History** section or toggle
3. Expand/toggle to view history
4. See recent commits (last 10) with:
   - Commit hash (short)
   - Author name
   - Commit date
   - Commit message

:::tip Screenshot Opportunity
Add a screenshot showing commit history.
:::

## Opening in VS Code

### VS Code Integration

1. Select a repository
2. Find **Open in VS Code** button
3. Click the button
4. VS Code opens with the repository root

**Requirements:**
- VS Code must be installed
- Repository must be cloned locally

:::tip Screenshot Opportunity
Add a screenshot showing the "Open in VS Code" button and repository path.
:::

## Best Practices

- **Use default workspace** for consistency
- **Pull regularly** to stay up to date
- **Create feature branches** for changes
- **Write meaningful commit messages** (descriptive, >10 characters)
- **Stage files intentionally** (review before staging)
- **Push after committing** to backup changes
- **Check sync status** before starting work

## Related Topics

- [Configuration](../getting-started/configuration.md) - Set up Azure DevOps
- [Test Script Viewer](./test-script-viewer.md) - View test files
- [Creating Jira Bugs](../workflows/jira-bug-creation.md) - Link commits to bugs

