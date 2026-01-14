/**
 * Sidebars configuration for Docusaurus
 * 
 * This configures the navigation structure for the documentation.
 */

module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/configuration',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/dashboard',
        'user-guide/browserstack-automate',
        'user-guide/test-management',
        'user-guide/jira-integration',
        'user-guide/correlation-view',
        'user-guide/repository-management',
        'user-guide/test-script-viewer',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/jira-bug-creation',
      ],
    },
    {
      type: 'category',
      label: 'Testing',
      items: [
        'testing/overview',
        'testing/e2e-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/overview',
        'architecture/ipc',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-errors',
      ],
    },
  ],
};

