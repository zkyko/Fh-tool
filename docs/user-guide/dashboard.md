# Dashboard

The Dashboard is your central hub for viewing metrics and recent activity across all integrations.

## Overview

The Dashboard provides:

- **Metrics Cards**: Quick view of key statistics
- **Recent Builds**: Latest BrowserStack Automate builds
- **Recent Test Cases**: Latest Test Management activity
- **Quick Navigation**: Access to all major features

## Metrics

The Dashboard displays several key metrics:

### BrowserStack Automate Builds
- Count of builds from the last 7 days
- Includes both successful and failed builds

### Test Management Runs
- Count of test cases/runs from the last 7 days
- Recent test activity

### Failed Tests
- Total count of failed tests
- Helps identify areas needing attention

### Linked Jira Issues
- Count of test results linked to Jira defects
- Tracks defect creation workflow

:::tip Screenshot Opportunity
Add a screenshot of the Dashboard showing all metrics cards with actual data.
:::

## Recent Activity

### Recent Builds Section
- Shows the 5 most recent BrowserStack Automate builds
- Displays:
  - Build name
  - Status (passed/failed/running)
  - Duration
  - Creation date
- Click a build to view details

:::tip Screenshot Opportunity
Add a screenshot of the Recent Builds section with sample builds.
:::

### Recent Test Cases Section
- Shows the 5 most recent Test Management test cases
- Displays:
  - Test case name
  - Project
  - Last updated date
  - Status
- Click a test case to view details

:::tip Screenshot Opportunity
Add a screenshot of the Recent Test Cases section.
:::

## Navigation

From the Dashboard, you can quickly navigate to:

- **BrowserStack Automate**: View all builds and sessions
- **Test Management**: View test cases and runs
- **Jira Defects**: View linked issues
- **Repo Companion**: Manage repositories
- **Settings**: Configure integrations

Click any navigation item in the sidebar to access these features.

## Refreshing Data

The Dashboard automatically loads data when you:
- First open the application
- Navigate to the Dashboard

Data is fetched from:
- BrowserStack Automate API
- BrowserStack Test Management API
- Local database (for correlations and links)

## Empty States

If you haven't configured integrations yet, you may see:

- Empty metrics (zeros)
- "No data available" messages
- Prompts to configure integrations

Configure your integrations in **Settings** to see data on the Dashboard.

:::tip Screenshot Opportunity
Add screenshots showing:
- Dashboard with no data (empty state)
- Dashboard with data populated
:::

## Best Practices

- **Check the Dashboard first** to get an overview of recent activity
- **Use metrics** to quickly identify areas needing attention
- **Click through to details** from recent activity items
- **Refresh by navigating away and back** if data seems stale

## Related Topics

- [Configuration](../getting-started/configuration.md) - Set up integrations
- [BrowserStack Automate](../user-guide/browserstack-automate.md) - View builds and sessions
- [Test Management](../user-guide/test-management.md) - Manage test cases
- [Jira Integration](../user-guide/jira-integration.md) - Work with defects

