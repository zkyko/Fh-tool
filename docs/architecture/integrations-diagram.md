# Integrations Architecture Diagram

This diagram shows (at a high level) how Axis connects to **BrowserStack**, **Jira**, and **Azure DevOps**.

## Big picture: Axis as the “workflow hub”

```mermaid
flowchart LR
  subgraph Axis["Axis (Electron Desktop App)"]
    R["Renderer (React UI)\n- screens, navigation\n- no secrets\n- no direct external API calls"]
    P["Preload Bridge\n(exposes safe APIs)"]
    M["Main Process (Trusted Backend)\n- integrations + git + filesystem\n- credential storage\n- correlation + workflow actions"]
    R -->|"IPC (typed channels)"| P -->|"IPC"| M
  end

  subgraph BS["BrowserStack"]
    BA["Automate\n(builds/sessions/artifacts)"]
    BTM["Test Management\n(cases/runs/results)"]
  end

  subgraph J["Jira"]
    JIRA["Issues (Bugs)\ncreate/search/link"]
  end

  subgraph ADO["Azure DevOps"]
    AZR["Azure Repos\nclone/pull/push/branches/commits"]
    AZP["Pipelines (optional)\nrun links / metadata"]
  end

  M -->|"Read builds/sessions/evidence links"| BA
  M -->|"Read cases/runs/results"| BTM
  M -->|"Create/search/link issues"| JIRA
  M -->|"Repo + commit data\n(Git operations)"| AZR
  M -->|"Pipeline metadata/links\n(best-effort)"| AZP

  S["Local App Storage\n(workspace + correlations + workflow notes)"]
  M <-->|"Persist lightweight metadata\n(no vendor mirroring)"| S
```

## What this means in practice

- Axis **never calls vendor APIs from the renderer**. The UI requests data via IPC, and the **main process** performs the network and git operations.
- Axis correlates objects across systems into a single “failure narrative,” e.g.:
  - Test result (TM) ↔ session evidence (Automate) ↔ defect (Jira) ↔ code change (Azure Repos)
- All enrichment is **best-effort**: if a system is unavailable, Axis should degrade gracefully and still show what it can.

## Related docs

- [Architecture Overview](./overview.md)
- [IPC Contract](./ipc.md)
- [E2E Workflow Flowcharts](../workflows/e2e-flow.md)


