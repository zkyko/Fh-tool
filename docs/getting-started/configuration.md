# Configuration

Before using Axis, you need to configure your integrations. All configuration is done in the **Settings** screen.

## Accessing Settings

1. Click **Settings** in the sidebar (under TOOLS section)
2. You'll see multiple tabs for different integrations

:::tip Screenshot Opportunity
Add a screenshot showing the Settings screen with all tabs visible.
:::

## Configure Integrations

### Azure DevOps

**Required for**: Repository management, Git operations, commit tracking

1. Navigate to **Settings** → **Azure** tab
2. Enter:
   - **Organization**: Your Azure DevOps organization name (e.g., `fourhands`)
   - **Project**: Your project name (e.g., `QA Automation`)
   - **Personal Access Token (PAT)**: Generate a PAT with Git read/write permissions
3. Click **Save**
4. Verify the connection (if test connection is available)

**How to generate a PAT:**
- Go to Azure DevOps → User Settings → Personal Access Tokens
- Create new token with **Code (read & write)** permissions
- Copy the token and paste it into Axis

:::warning
Keep your PAT secure. It's stored encrypted in Axis but treat it like a password.
:::

:::tip Screenshot Opportunity
Add screenshots showing:
- Azure DevOps settings tab
- PAT generation page in Azure DevOps
- Successfully configured Azure DevOps in Axis
:::

### BrowserStack Automate

**Required for**: Viewing builds, sessions, and execution evidence

1. Navigate to **Settings** → **BrowserStack Automate** tab
2. Enter:
   - **Username**: Your BrowserStack Automate username
   - **Access Key**: Your BrowserStack Automate access key
3. Click **Save** or **Test Connection**
4. Verify the connection succeeds

**Where to find credentials:**
- BrowserStack Dashboard → Account → Automate → Access Key

:::tip Screenshot Opportunity
Add screenshots showing:
- BrowserStack Automate settings tab
- Where to find credentials in BrowserStack
:::

### BrowserStack Test Management

**Required for**: Viewing test cases, runs, and results

1. Navigate to **Settings** → **BrowserStack TM** tab
2. Enter:
   - **Username**: Your BrowserStack TM username (usually same as Automate)
   - **Access Key**: Your BrowserStack TM access key
3. Click **Save** or **Test Connection**
4. Verify the connection succeeds

:::tip Screenshot Opportunity
Add screenshots showing BrowserStack TM settings configuration.
:::

### Jira

**Required for**: Creating and linking defects, viewing issue status

1. Navigate to **Settings** → **Jira** tab
2. Enter:
   - **Base URL**: Your Jira instance URL (e.g., `https://your-company.atlassian.net`)
   - **Email**: Your Jira account email
   - **API Token**: Generate a Jira API token
3. Click **Save** or **Test Connection**
4. Verify the connection succeeds

**How to generate a Jira API token:**
- Go to Jira → Account Settings → Security → API Tokens
- Create API token
- Copy the token and paste it into Axis

**Jira Defaults (Optional):**
- **Default Project Key**: Set default project for bug creation (e.g., `QST`)
- **Default Issue Type**: Usually `Bug`
- **Default Labels**: Labels to auto-apply (e.g., `axis`, `automation`, `browserstack`)

:::tip Screenshot Opportunity
Add screenshots showing:
- Jira settings tab with all fields
- Jira API token generation page
- Jira defaults configuration
:::

## Verify Configuration

After configuring all integrations:

1. Check each tab to ensure settings are saved
2. Test connections if available
3. Close and reopen Settings to verify persistence
4. Restart the application to ensure settings persist

## Next Steps

Once configured, you can:

- **View Test Execution Data**: Navigate to BrowserStack Automate or Test Management
- **Manage Repositories**: Go to Repo Companion to clone and manage repositories
- **Create Jira Bugs**: Use the bug creation workflow from test failures

See the [User Guide](../user-guide/dashboard.md) section for detailed workflows.

