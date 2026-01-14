# Correlation View

The Correlation View shows how test results, BrowserStack sessions, Jira issues, and Azure commits are linked together, providing complete traceability for test failures.

## Overview

Correlation View allows you to:

- View linked relationships between test results and evidence
- See BrowserStack sessions linked to test failures
- View Jira issues linked to test results
- Track Azure commits related to test runs
- Understand the complete failure narrative

## Accessing Correlation View

1. Click **Correlation View** in the sidebar (QUALITY & INSIGHTS section)
2. View correlation data for test results
3. Navigate to specific test results to see their correlations

## What Gets Correlated

### Test Result → BrowserStack Session

- Test results are linked to BrowserStack Automate sessions
- Links are established automatically when correlation keys match
- Session evidence (video, logs, HAR) is accessible

### Test Result → Jira Issue

- Test results can be linked to Jira defects
- Links are created when bugs are created from test failures
- Issue status and details are displayed

### Test Result → Azure Commit

- Test results can be linked to Azure DevOps commits
- Commits are correlated when available in run metadata
- Code changes are traceable to test failures

### Run → Commit/Branch

- Test runs are linked to code commits and branches
- Enables tracking of which code changes caused failures

## Viewing Correlations

### Correlation Details

When viewing a specific test result, you'll see:

- **Test Result Information**: Test name, status, error details
- **Linked BrowserStack Session**: Session details and evidence links
- **Linked Jira Issue**: Issue key, status, assignee, link
- **Linked Azure Commit**: Commit hash, message, author, link
- **Branch Information**: Branch name and status

:::tip Screenshot Opportunity
Add a screenshot showing correlation view with all linked data visible.
:::

## Correlation Persistence

Correlations are stored in the local database and persist:

- Across app restarts
- After closing and reopening the application
- Links are maintained until manually removed

## Rerun Functionality

From the Correlation View, you can:

- **Rerun tests**: Click "Rerun This Test" button
- Navigate to execution screen with pre-filled parameters
- Re-execute tests for validation

## Best Practices

- **Review correlations** to understand complete failure context
- **Verify links** are accurate and functional
- **Use correlations** to track failure patterns
- **Check linked evidence** before creating new bugs
- **Update correlations** if relationships change

## Related Topics

- [BrowserStack Automate](./browserstack-automate.md) - View session evidence
- [Jira Integration](./jira-integration.md) - Link issues to results
- [Test Management](./test-management.md) - View test results
- [Architecture](../architecture/overview.md) - Understand correlation engine

