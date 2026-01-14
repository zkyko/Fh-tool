# End-to-End Workflows

This document describes complete end-to-end workflows for testing Axis, from initial setup through complex multi-step operations.

## Workflow 1: Complete Test Failure to Bug Workflow

### Objective
Test the complete workflow from viewing a test failure to creating a Jira bug with all evidence linked.

### Steps

1. **View Test Execution Data**
   - Navigate to **Test Management**
   - Select a project
   - Find a failed test case or result
   - Click to view test details

2. **Review Failure Evidence**
   - Verify error message is displayed
   - Check if BrowserStack session is linked
   - Access session evidence (video, logs, HAR)
   - Review environment details

3. **Create Jira Bug**
   - Click **Create Jira Bug** button
   - Review auto-generated bug draft
   - Verify all evidence links are included
   - Edit draft if needed
   - Configure issue fields
   - Create the issue

4. **Verify Bug Creation**
   - Confirm issue is created in Jira
   - Verify issue key is displayed
   - Click link to view issue in Jira
   - Verify all evidence links are in the description

5. **Check Correlation**
   - Navigate to **Correlation View**
   - Verify test result is linked to:
     - BrowserStack session
     - Jira issue
     - Azure commit (if available)

### Expected Results
- ✅ Test failure is viewable with all details
- ✅ Evidence is accessible and links work
- ✅ Bug is created successfully in Jira
- ✅ Bug contains all evidence links
- ✅ Correlations are established and visible

:::tip Screenshot Opportunity
Add screenshots showing:
- Failed test view
- Bug creation modal with draft
- Created Jira issue
- Correlation view with all links
:::

## Workflow 2: Repository Management Workflow

### Objective
Test complete Git workflow from cloning a repository to pushing changes.

### Steps

1. **Clone Repository**
   - Navigate to **Repo Companion**
   - Find repository in list
   - Click **Clone**
   - Wait for clone to complete
   - Verify repository appears in Detected Repositories

2. **View Repository Status**
   - Click on cloned repository
   - View Git status
   - Check current branch
   - Review file changes (if any)

3. **Create Feature Branch**
   - Click **Create Branch**
   - Enter branch name
   - Create branch
   - Verify branch becomes current

4. **Make Changes and Commit**
   - (Note: Changes made outside Axis, e.g., in VS Code)
   - Return to Axis
   - View Git status (should show changes)
   - Stage files
   - Enter commit message (>= 10 characters)
   - Create commit
   - Verify commit appears in history

5. **Push Changes**
   - Click **Push** button
   - Verify push succeeds
   - Check Git status (should show "Up to date")
   - Verify changes are in Azure DevOps

### Expected Results
- ✅ Repository is cloned successfully
- ✅ Branch is created and active
- ✅ Changes are staged correctly
- ✅ Commit is created with validation
- ✅ Push succeeds and changes are uploaded

:::tip Screenshot Opportunity
Add screenshots showing:
- Repository cloning process
- Branch creation
- File staging
- Commit creation
- Push operation
:::

## Workflow 3: Failure Analysis Workflow

### Objective
Test the complete workflow for analyzing a test failure with all available evidence.

### Steps

1. **Identify Failure**
   - Go to **Test Management**
   - Find a failed test result
   - Note the test name and error

2. **Access Execution Evidence**
   - View test result details
   - Check for linked BrowserStack session
   - Navigate to session if linked
   - Access evidence:
     - Watch video
     - Review console logs
     - Check network logs (HAR)

3. **Review Correlation Data**
   - Navigate to **Correlation View**
   - View all linked data:
     - BrowserStack session
     - Jira issues (if any)
     - Azure commits (if available)

4. **Analyze Failure Context**
   - Review error message
   - Check environment details
   - Review code changes (if commit linked)
   - Identify root cause

5. **Create Action Item**
   - Create Jira bug if needed
   - Link to existing issue if applicable
   - Document findings

### Expected Results
- ✅ All evidence is accessible
- ✅ Correlations are visible
- ✅ Failure context is clear
- ✅ Action items can be created

## Workflow 4: Multi-Integration Workflow

### Objective
Test workflows that span multiple integrations.

### Steps

1. **View BrowserStack Build**
   - Navigate to **BrowserStack Automate**
   - Select a build with failures
   - View build details

2. **Link to Test Management**
   - Identify test cases related to build
   - View test results in **Test Management**
   - Verify correlation

3. **Create Jira Bug**
   - Create bug from build or test result
   - Include all evidence links
   - Link to Azure commit if available

4. **Track in Correlation View**
   - View all relationships in **Correlation View**
   - Verify links are established
   - Check traceability

### Expected Results
- ✅ Data flows across integrations
- ✅ Correlations are maintained
- ✅ Traceability is complete
- ✅ All links are functional

## Best Practices for E2E Testing

- **Test realistic scenarios** - Use actual test data when possible
- **Follow complete workflows** - Don't skip steps
- **Verify all links** - Ensure correlations work end-to-end
- **Document findings** - Take notes and screenshots
- **Test error paths** - Include failure scenarios
- **Validate data persistence** - Restart app to verify persistence

## Related Topics

- [Test Cases](./test-cases.md) - Detailed individual test cases
- [User Guide](../user-guide/dashboard.md) - Feature documentation

