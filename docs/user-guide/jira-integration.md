# Jira Integration

Axis integrates with Jira to enable structured defect creation and tracking, linking test failures directly to Jira issues with evidence and context.

## Overview

Jira integration allows you to:

- Create Jira bugs directly from test failures
- Link existing Jira issues to test results
- View Jira issue status and details
- Track defect resolution progress
- Maintain traceability between tests and defects

## Configuration

Before using Jira features, configure Jira in Settings:

1. Navigate to **Settings** → **Jira** tab
2. Enter:
   - **Base URL**: Your Jira instance (e.g., `https://your-company.atlassian.net`)
   - **Email**: Your Jira account email
   - **API Token**: Generate from Jira account settings
3. Configure defaults (optional):
   - Default project key
   - Default issue type
   - Default labels
4. Save settings

See [Configuration](../getting-started/configuration.md) for detailed setup instructions.

## Creating Jira Bugs

### From Test Failures

The most common workflow is creating bugs from test failures:

1. **Navigate to a failed test**:
   - Go to **Test Management**
   - Find a failed test case or result
   - Click the **Bug icon** (Create Jira Bug button)

2. **Review the bug draft**:
   - Summary is auto-generated from test name
   - Description includes:
     - Test information (name, ID, file path, tags)
     - BrowserStack session/build links
     - Environment details (browser, OS, device)
     - Evidence links (video, logs, network/HAR)
     - Azure DevOps pipeline links (if available)

3. **Edit if needed**:
   - Modify summary
   - Edit description
   - Adjust labels

4. **Configure issue fields**:
   - Project Key (may be pre-filled from defaults)
   - Issue Type (Bug)
   - Priority (optional)
   - Assignee (optional)
   - Component (optional)

5. **Create the issue**:
   - Click **Create Issue**
   - Issue is created in Jira
   - Issue key and link are displayed
   - Issue is linked to the test result

:::tip Screenshot Opportunity
Add screenshots showing:
- Bug creation modal
- Auto-generated draft
- Fields configuration
- Success message with issue key
:::

### From BrowserStack Builds

1. Navigate to **BrowserStack Automate**
2. Select a build (preferably with failures)
3. Click **Create Jira Bug** button
4. Follow the same workflow as above

### From BrowserStack Sessions

1. Navigate to a BrowserStack session
2. Click **Create Jira Bug** button
3. Bug draft includes session-specific information
4. Create the issue

## Bug Draft Content

Axis automatically generates comprehensive bug drafts that include:

### Test Information
- Test name and identifier
- Test file path
- Tags and metadata
- Test case ID (if from Test Management)

### Execution Evidence
- BrowserStack session links
- Build information
- Environment details (browser, OS, device)

### Evidence Links
- Video playback URL
- Console logs
- Network logs (HAR)
- Screenshots (if available)

### Environment Context
- Browser and version
- Operating system
- Device information
- Execution timestamps

### Azure DevOps Links
- Pipeline run links (if available)
- Commit information (if correlated)
- Branch information

**Note**: Descriptions include **links to evidence**, not parsed error output. This keeps bugs actionable while maintaining links to all evidence.

## Linking Existing Issues

You can link existing Jira issues to test results:

1. Navigate to a test result
2. Look for **Link Jira Issue** option
3. Search for an existing issue
4. Select the issue
5. Confirm the linkage

The link is stored and will appear in correlation views.

## Viewing Jira Issues

### Jira Screen

1. Navigate to **Jira Defects** in the sidebar (QUALITY & INSIGHTS section)
2. View linked issues
3. Search/filter issues if available
4. Click issues to view details

### In Correlation View

Linked Jira issues appear in the **Correlation View**, showing:
- Issue key and summary
- Status
- Assignee
- Link to Jira
- Relationship to test results

## Jira Defaults

Configure default values in Settings to streamline bug creation:

- **Default Project Key**: Automatically set project (e.g., `QST`)
- **Default Issue Type**: Usually `Bug`
- **Default Labels**: Auto-applied labels (e.g., `axis`, `automation`, `browserstack`)
- **Component Rules**: Auto-map components based on patterns

## Best Practices

- **Create bugs promptly** when failures are identified
- **Review auto-generated drafts** to ensure accuracy
- **Include all relevant evidence** (verify links work)
- **Use consistent labels** for better organization
- **Link related issues** to maintain traceability
- **Update issue status** in Jira as bugs are resolved

## Workflow Integration

Jira bug creation integrates with the complete workflow:

1. **Test Execution** → BrowserStack Automate/TM
2. **Failure Detection** → View failed tests
3. **Evidence Review** → Check BrowserStack session evidence
4. **Bug Creation** → Create Jira bug with all context
5. **Tracking** → Monitor issue status in Jira
6. **Resolution** → Link resolved issues back to tests

## Related Topics

- [Creating Jira Bugs](../workflows/jira-bug-creation.md) - Detailed bug creation workflow
- [Correlation View](./correlation-view.md) - View linked issues
- [Configuration](../getting-started/configuration.md) - Set up Jira integration
- [Test Management](./test-management.md) - Find failures to create bugs from

