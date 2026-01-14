# Quick Start Guide

This guide will help you get up and running with Axis quickly.

## Prerequisites

Before you begin, ensure you have:

- ✅ Axis installed (see [Installation](./installation.md))
- ✅ Git installed on your system
- ✅ Access to:
  - BrowserStack Automate account
  - BrowserStack Test Management account
  - Jira instance
  - Azure DevOps repository

## 5-Minute Setup

### Step 1: Configure Integrations (2 minutes)

1. Open **Settings** (sidebar → TOOLS)
2. Configure each integration:
   - **Azure DevOps**: Organization, Project, PAT
   - **BrowserStack Automate**: Username, Access Key
   - **BrowserStack TM**: Username, Access Key  
   - **Jira**: Base URL, Email, API Token
3. Save each configuration

See [Configuration](./configuration.md) for detailed instructions.

### Step 2: Explore the Dashboard (1 minute)

1. The **Dashboard** is your starting point
2. View:
   - Metrics (builds, runs, failures, linked Jira issues)
   - Recent builds from BrowserStack Automate
   - Recent test cases from Test Management

:::tip Screenshot Opportunity
Add a screenshot of the Dashboard showing metrics and recent activity.
:::

### Step 3: View Test Execution Data (1 minute)

1. Click **BrowserStack Automate** in the sidebar
2. Browse builds and sessions
3. Click **Test Management** to view test cases and runs

### Step 4: Clone a Repository (1 minute)

1. Click **Repo Companion** in the sidebar (TOOLS section)
2. Find your repository in the list
3. Click **Clone**
4. Wait for the clone to complete
5. The repository will appear in "Detected Repositories"

:::tip Screenshot Opportunity
Add screenshots showing:
- Repository list before cloning
- Clone in progress
- Repository successfully cloned and detected
:::

## Common First Tasks

### View a Failed Test

1. Go to **Test Management**
2. Select a project
3. Find a failed test case or result
4. Click to view details
5. Access BrowserStack session evidence if linked

### Create a Jira Bug from a Failure

1. Find a failed test (see above)
2. Click the **Bug icon** (Create Jira Bug button)
3. Review the auto-generated bug draft
4. Edit if needed
5. Click **Create Issue**
6. The bug is created in Jira with all evidence links

See [Creating Jira Bugs](../workflows/jira-bug-creation.md) for detailed workflow.

### Manage Repository with Git

1. Go to **Repo Companion**
2. Select a cloned repository
3. View Git status (staged/unstaged files)
4. Stage files
5. Enter commit message (min 10 characters)
6. Click **Commit**
7. Click **Push** to upload changes

See [Repository Management](../user-guide/repository-management.md) for detailed Git workflows.

## Next Steps

Now that you're set up, explore:

- **[User Guide](../user-guide/)** - Detailed workflows for all features
- **[Workflows](../workflows/)** - Specific workflow guides
- **[Architecture](../architecture/overview.md)** - Understand how Axis works
- **[Troubleshooting](../troubleshooting/common-errors.md)** - Common issues and solutions

## Getting Help

- Check the [Troubleshooting](../troubleshooting/common-errors.md) section
- Review [Architecture](../architecture/overview.md) for system understanding
- See [Workflows](../workflows/) for step-by-step guides

