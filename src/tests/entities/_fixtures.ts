/*
 * Shared realistic JSON payload fixtures for entity tests.
 *
 * Single source of truth so individual test files stay short. Each function
 * returns a fresh deep-copied object so tests can mutate without bleeding.
 */

import type { ProjectDB } from "../../models/projectdb.js";
import type { ProjectCreateResponse } from "../../models/projectcreateresponse.js";
import type { ProjectUpdateResponse } from "../../models/projectupdateresponse.js";
import type { DatasetDB } from "../../models/datasetdb.js";
import type { LogStreamResponse } from "../../models/logstreamresponse.js";
import type { ListDatasetResponse } from "../../models/listdatasetresponse.js";
import type { ExperimentResponse } from "../../models/experimentresponse.js";
import type { BasePromptTemplateResponse } from "../../models/baseprompttemplateresponse.js";
import type { BasePromptTemplateVersionResponse } from "../../models/baseprompttemplateversionresponse.js";
import type { ListPromptTemplateResponse } from "../../models/listprompttemplateresponse.js";
import type { ListPromptTemplateVersionResponse } from "../../models/listprompttemplateversionresponse.js";
import type { ScorerResponse } from "../../models/scorerresponse.js";
import type { ListScorersResponse } from "../../models/listscorersresponse.js";

export function projectDBFixture(overrides: Partial<ProjectDB> = {}): ProjectDB {
  return {
    id: "proj-123",
    name: "test-project",
    createdBy: "user-1",
    createdByUser: {
      id: "user-1",
      email: "user@example.com",
    },
    runs: [],
    createdAt: new Date("2026-01-01T00:00:00Z"),
    updatedAt: new Date("2026-01-02T00:00:00Z"),
    bookmark: false,
    type: "gen_ai",
    ...overrides,
  };
}

export function projectCreateResponseFixture(
  overrides: Partial<ProjectCreateResponse> = {}
): ProjectCreateResponse {
  return {
    id: "proj-123",
    name: "test-project",
    createdBy: "user-1",
    type: "gen_ai",
    createdAt: new Date("2026-01-01T00:00:00Z"),
    updatedAt: new Date("2026-01-01T00:00:00Z"),
    ...overrides,
  };
}

export function projectUpdateResponseFixture(
  overrides: Partial<ProjectUpdateResponse> = {}
): ProjectUpdateResponse {
  return {
    id: "proj-123",
    name: "renamed-project",
    createdBy: "user-1",
    type: "gen_ai",
    createdAt: new Date("2026-01-01T00:00:00Z"),
    updatedAt: new Date("2026-01-03T00:00:00Z"),
    ...overrides,
  };
}

export function datasetDBFixture(overrides: Partial<DatasetDB> = {}): DatasetDB {
  return {
    id: "ds-123",
    name: "test-dataset",
    createdAt: new Date("2026-02-01T00:00:00Z"),
    updatedAt: new Date("2026-02-02T00:00:00Z"),
    projectCount: 1,
    numRows: 10,
    columnNames: ["input", "output"],
    createdByUser: {
      id: "user-1",
      email: "user@example.com",
    },
    currentVersionIndex: 1,
    draft: false,
    ...overrides,
  };
}

export function listDatasetResponseFixture(
  overrides: Partial<ListDatasetResponse> = {}
): ListDatasetResponse {
  return {
    startingToken: 0,
    limit: 100,
    paginated: false,
    datasets: [datasetDBFixture()],
    ...overrides,
  };
}

export function experimentResponseFixture(
  overrides: Partial<ExperimentResponse> = {}
): ExperimentResponse {
  return {
    id: "exp-123",
    name: "test-experiment",
    projectId: "proj-123",
    createdAt: new Date("2026-04-01T00:00:00Z"),
    updatedAt: new Date("2026-04-02T00:00:00Z"),
    createdBy: "user-1",
    numSpans: 25,
    numTraces: 10,
    taskType: 16,
    aggregateMetrics: {},
    tags: {},
    ...overrides,
  };
}

export function promptVersionResponseFixture(
  overrides: Partial<BasePromptTemplateVersionResponse> = {}
): BasePromptTemplateVersionResponse {
  return {
    id: "ver-1",
    template: "Hello {{name}}",
    raw: false,
    version: 1,
    settings: {} as BasePromptTemplateVersionResponse["settings"],
    outputType: null,
    modelChanged: false,
    linesAdded: 0,
    linesEdited: 0,
    linesRemoved: 0,
    settingsChanged: false,
    contentChanged: false,
    createdAt: new Date("2026-04-10T00:00:00Z"),
    updatedAt: new Date("2026-04-10T00:00:00Z"),
    createdByUser: {
      id: "user-1",
      email: "user@example.com",
    },
    ...overrides,
  };
}

export function promptTemplateResponseFixture(
  overrides: Partial<BasePromptTemplateResponse> = {}
): BasePromptTemplateResponse {
  return {
    id: "prompt-123",
    name: "test-prompt",
    template: "Hello {{name}}",
    selectedVersion: promptVersionResponseFixture(),
    selectedVersionId: "ver-1",
    allAvailableVersions: [1],
    totalVersions: 1,
    maxVersion: 1,
    createdAt: new Date("2026-04-10T00:00:00Z"),
    updatedAt: new Date("2026-04-10T00:00:00Z"),
    createdByUser: {
      id: "user-1",
      email: "user@example.com",
    },
    ...overrides,
  };
}

export function listPromptTemplateResponseFixture(
  overrides: Partial<ListPromptTemplateResponse> = {}
): ListPromptTemplateResponse {
  return {
    startingToken: 0,
    limit: 100,
    paginated: false,
    templates: [promptTemplateResponseFixture()],
    ...overrides,
  };
}

export function listPromptTemplateVersionResponseFixture(
  overrides: Partial<ListPromptTemplateVersionResponse> = {}
): ListPromptTemplateVersionResponse {
  return {
    startingToken: 0,
    limit: 100,
    paginated: false,
    versions: [promptVersionResponseFixture()],
    ...overrides,
  };
}

export function logStreamResponseFixture(
  overrides: Partial<LogStreamResponse> = {}
): LogStreamResponse {
  return {
    id: "ls-123",
    createdAt: new Date("2026-03-01T00:00:00Z"),
    updatedAt: new Date("2026-03-02T00:00:00Z"),
    name: "test-stream",
    projectId: "proj-123",
    createdBy: "user-1",
    numSpans: 5,
    numTraces: 3,
    hasUserCreatedSessions: false,
    ...overrides,
  };
}

export function scorerResponseFixture(
  overrides: Partial<ScorerResponse> = {}
): ScorerResponse {
  return {
    id: "scorer-123",
    name: "test-scorer",
    scorerType: "llm",
    tags: [],
    createdAt: new Date("2026-04-01T00:00:00Z"),
    updatedAt: new Date("2026-04-02T00:00:00Z"),
    ...overrides,
  } as ScorerResponse;
}

export function listScorersResponseFixture(
  overrides: Partial<ListScorersResponse> = {}
): ListScorersResponse {
  return {
    startingToken: 0,
    limit: 100,
    paginated: false,
    scorers: [scorerResponseFixture()],
    ...overrides,
  };
}
