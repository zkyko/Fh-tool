# Test Management

Axis integrates with BrowserStack Test Management (TM) to provide access to test cases, test runs, and test results.

## Overview

BrowserStack Test Management allows you to:

- View projects and test cases
- Browse test runs and results
- View test execution history
- Create Jira bugs from failed test cases
- Link test cases to execution evidence

## Viewing Projects

### Projects List

1. Click **Test Management** in the sidebar (EXECUTION section)
2. The projects list will load
3. Projects are displayed with:
   - Project name
   - Project ID
   - Additional metadata

:::tip Screenshot Opportunity
Add a screenshot showing the Test Management projects list.
:::

### Selecting a Project

Click on a project to view its test cases and runs.

## Viewing Test Cases

### Test Cases List

After selecting a project, you'll see:

- **Test Case Identifier**: Unique ID for the test case
- **Title/Name**: Test case name
- **Status**: Current status
- **Priority**: Test priority
- **Tags**: Associated tags
- **Last Updated**: Last modification date

:::tip Screenshot Opportunity
Add a screenshot showing test cases list with columns visible.
:::

### Test Case Actions

For each test case, you can:

- **Edit**: Modify test case details (if permissions allow)
- **View History**: See execution history
- **Create Jira Bug**: Create a defect directly from the test case
- **Delete**: Remove test case (if permissions allow)

:::tip Screenshot Opportunity
Add a screenshot showing test case actions/buttons.
:::

## Viewing Test Runs

### Runs List

(If test runs are implemented in the UI)

1. Navigate to runs view
2. View test runs with:
   - Run name/ID
   - Status
   - Execution date
   - Results summary (passed/failed/skipped)

### Run Details

Click on a test run to view:

- Run information
- Test results within the run
- Status breakdown
- Links to execution evidence

## Viewing Test Results

### Results View

From a test run, view individual test results:

- **Test Name**: Name of the test
- **Status**: Pass/Fail/Skipped
- **Duration**: How long the test took
- **Error Message**: Failure details (if failed)
- **Correlation**: Linked BrowserStack session (if available)

### Failed Test Details

For failed tests, you can:

- View error messages and stack traces
- Access BrowserStack session evidence
- Create Jira bugs
- View correlation data

:::tip Screenshot Opportunity
Add screenshots showing:
- Test results list
- Failed test details
- Error messages displayed
:::

## Creating Jira Bugs from Test Cases

### From Test Case

1. Find a test case (or failed test result)
2. Click the **Bug icon** (Create Jira Bug button)
3. Review the auto-generated bug draft
4. Edit if needed
5. Create the issue

### Bug Draft Content

The auto-generated bug draft includes:

- Test case information (name, ID, file path, tags)
- BrowserStack session links (if available)
- Environment details (browser, OS, device)
- Evidence links (video, logs, network/HAR)
- Azure DevOps pipeline links (if available)

See [Creating Jira Bugs](../workflows/jira-bug-creation.md) for detailed workflow.

## Filtering and Search

(If filtering is implemented)

- Filter test cases by status
- Filter by tags
- Search for specific test cases
- Filter by date range

## Execution History

View execution history for a test case:

1. Click the **History** button on a test case
2. View past execution results
3. See trends and patterns
4. Identify flaky tests

:::tip Screenshot Opportunity
Add a screenshot showing test case execution history.
:::

## Best Practices

- **Organize test cases** with meaningful names and tags
- **Review failed tests regularly** to identify issues
- **Use execution history** to spot flaky tests
- **Create Jira bugs promptly** for failures
- **Link test cases to execution evidence** for better traceability

## Related Topics

- [BrowserStack Automate](./browserstack-automate.md) - View execution evidence
- [Creating Jira Bugs](../workflows/jira-bug-creation.md) - Bug creation workflow
- [Correlation View](./correlation-view.md) - Link test results to evidence
- [Configuration](../getting-started/configuration.md) - Set up BrowserStack TM

