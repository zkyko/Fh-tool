# BrowserStack Automate

Axis integrates with BrowserStack Automate to provide access to test execution evidence, including builds, sessions, videos, logs, and network traces.

## Overview

BrowserStack Automate provides execution evidence for your tests. Axis allows you to:

- View builds and their status
- Browse sessions within builds
- Access execution artifacts (videos, console logs, network logs/HAR)
- Link sessions to test failures
- Create Jira bugs directly from sessions

## Viewing Builds

### Accessing Builds

1. Click **BrowserStack Automate** in the sidebar (EXECUTION section)
2. The builds list will load
3. Builds are displayed with:
   - Build name
   - Status (passed/failed/running)
   - Creation date
   - Duration

:::tip Screenshot Opportunity
Add a screenshot showing the BrowserStack Automate builds list.
:::

### Build Details

Click on a build to view details:

- Build information (name, status, dates)
- List of sessions in the build
- Session status indicators
- Links to BrowserStack

:::tip Screenshot Opportunity
Add a screenshot showing build details with sessions list.
:::

## Viewing Sessions

### Session List

From a build, you can see all sessions:

- Session name
- Status (passed/failed/running)
- Browser/OS information
- Duration

### Session Details

Click on a session to view detailed information:

- **Session Information**: Name, status, duration, timestamps
- **Environment Details**: Browser, OS, device information
- **Evidence Links**:
  - Video playback
  - Console logs
  - Network logs (HAR)
  - Screenshots (if available)
  - BrowserStack session URL

:::tip Screenshot Opportunity
Add screenshots showing:
- Session details view
- Evidence links section
- Video player (if embedded)
:::

## Accessing Evidence

### Video Evidence

1. From session details, click the video link
2. Video opens in your default browser
3. Watch the test execution to understand failures

:::tip Screenshot Opportunity
Add a screenshot showing the video evidence link/player.
:::

### Console Logs

1. Click the console logs link
2. View error messages and console output
3. Use this to diagnose test failures

### Network Logs (HAR)

1. Click the network/HAR logs link
2. Access network request/response data
3. Useful for debugging network-related issues

### Screenshots

If available, screenshots provide visual evidence of test execution states.

## Creating Jira Bugs from Sessions

You can create Jira bugs directly from BrowserStack sessions:

1. Navigate to a session (preferably a failed one)
2. Click **Create Jira Bug** button
3. Review the auto-generated bug draft
4. Edit if needed
5. Create the issue

See [Creating Jira Bugs](../workflows/jira-bug-creation.md) for detailed workflow.

## Correlation with Test Results

Sessions are automatically correlated with:
- Test Management test results (when correlation keys match)
- Jira issues (when linked)
- Azure commits (when available)

View correlations in the **Correlation View** screen.

## Filtering and Search

(If filtering is implemented)
- Filter builds by status
- Filter by date range
- Search for specific builds or sessions

## Best Practices

- **Review failed sessions first** to identify issues quickly
- **Watch video evidence** to understand what happened during test execution
- **Check console logs** for error messages and stack traces
- **Use network logs** for API-related failures
- **Create Jira bugs** directly from failed sessions for traceability

## Related Topics

- [Test Management](./test-management.md) - View test cases and results
- [Creating Jira Bugs](../workflows/jira-bug-creation.md) - Bug creation workflow
- [Correlation View](./correlation-view.md) - Link sessions to test results
- [Configuration](../getting-started/configuration.md) - Set up BrowserStack Automate

