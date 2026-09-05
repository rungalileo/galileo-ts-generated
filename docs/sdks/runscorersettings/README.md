# RunScorerSettings

## Overview

### Available Operations

* [upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch](#upsertscorersconfigprojectsprojectidrunsrunidscorersettingspatch) - Upsert Scorers Config
* [upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost](#upsertscorersconfigprojectsprojectidrunsrunidscorersettingspost) - Upsert Scorers Config
* [getSettingsProjectsProjectIdRunsRunIdScorerSettingsGet](#getsettingsprojectsprojectidrunsrunidscorersettingsget) - Get Settings

## upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch

Upsert Scorers Config

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_scorers_config_projects__project_id__runs__run_id__scorer_settings_patch" method="patch" path="/projects/{project_id}/runs/{run_id}/scorer-settings" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.runScorerSettings.upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    body: {
      scorers: [
        {
          id: "<value>",
          filters: null,
          scorerType: "preset",
        },
      ],
      segmentFilters: [
        {
          filter: {
            name: "metadata",
            operator: "eq",
            key: "<key>",
            value: "<value>",
          },
          sampleRate: 9527.61,
        },
      ],
      runId: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import {
  runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch,
} from "galileo-generated/funcs/runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    body: {
      scorers: [
        {
          id: "<value>",
          filters: null,
          scorerType: "preset",
        },
      ],
      segmentFilters: [
        {
          filter: {
            name: "metadata",
            operator: "eq",
            key: "<key>",
            value: "<value>",
          },
          sampleRate: 9527.61,
        },
      ],
      runId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchRequest](../../models/operations/upsertscorersconfigprojectsprojectidrunsrunidscorersettingspatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchSecurity](../../models/operations/upsertscorersconfigprojectsprojectidrunsrunidscorersettingspatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.RunScorerSettingsResponse](../../models/runscorersettingsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost

Upsert Scorers Config

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_scorers_config_projects__project_id__runs__run_id__scorer_settings_post" method="post" path="/projects/{project_id}/runs/{run_id}/scorer-settings" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.runScorerSettings.upsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    body: {
      scorers: [
        {
          id: "<value>",
          filters: [
            {
              name: "modality",
              operator: "eq",
              value: "ENUM_VALUE",
            },
          ],
          scorerType: "preset",
        },
      ],
      segmentFilters: [
        {
          filter: {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
          },
          sampleRate: 3983.6,
        },
      ],
      runId: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost } from "galileo-generated/funcs/runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    body: {
      scorers: [
        {
          id: "<value>",
          filters: [
            {
              name: "modality",
              operator: "eq",
              value: "ENUM_VALUE",
            },
          ],
          scorerType: "preset",
        },
      ],
      segmentFilters: [
        {
          filter: {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
          },
          sampleRate: 3983.6,
        },
      ],
      runId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("runScorerSettingsUpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPostRequest](../../models/operations/upsertscorersconfigprojectsprojectidrunsrunidscorersettingspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPostSecurity](../../models/operations/upsertscorersconfigprojectsprojectidrunsrunidscorersettingspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[models.RunScorerSettingsResponse](../../models/runscorersettingsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getSettingsProjectsProjectIdRunsRunIdScorerSettingsGet

Get Settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_settings_projects__project_id__runs__run_id__scorer_settings_get" method="get" path="/projects/{project_id}/runs/{run_id}/scorer-settings" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.runScorerSettings.getSettingsProjectsProjectIdRunsRunIdScorerSettingsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    runId: "<value>",
    projectId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { runScorerSettingsGetSettingsProjectsProjectIdRunsRunIdScorerSettingsGet } from "galileo-generated/funcs/runScorerSettingsGetSettingsProjectsProjectIdRunsRunIdScorerSettingsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await runScorerSettingsGetSettingsProjectsProjectIdRunsRunIdScorerSettingsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    runId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("runScorerSettingsGetSettingsProjectsProjectIdRunsRunIdScorerSettingsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSettingsProjectsProjectIdRunsRunIdScorerSettingsGetRequest](../../models/operations/getsettingsprojectsprojectidrunsrunidscorersettingsgetrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetSettingsProjectsProjectIdRunsRunIdScorerSettingsGetSecurity](../../models/operations/getsettingsprojectsprojectidrunsrunidscorersettingsgetsecurity.md)         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RunScorerSettingsResponse](../../models/runscorersettingsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |