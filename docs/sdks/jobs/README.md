# Jobs

## Overview

### Available Operations

* [createJobJobsPost](#createjobjobspost) - Create Job

## createJobJobsPost

Create a job for a project run and enqueue it for processing.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_job_jobs_post" method="post" path="/jobs" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.jobs.createJobJobsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    scorers: [],
    promptRegisteredScorersConfiguration: null,
    promptFinetunedScorersConfiguration: [
      {
        filters: [
          {
            name: "modality",
            operator: "not_in",
            value: "ENUM_VALUE",
          },
        ],
      },
    ],
    promptCustomizedScorersConfiguration: [
      {
        scorerName: "_customized_groundedness",
        modelAlias: "gpt-4.1-mini",
        numJudges: 3,
        name: "context_adherence",
        regexField: "",
        requiresToolsInLlmSpan: false,
      },
    ],
    promptScorerSettings: {
      filters: [
        {
          name: "node_name",
          operator: "contains",
          value: [],
          caseSensitive: true,
        },
      ],
    },
    scorerConfig: {
      id: "<value>",
      filters: [
        {
          name: "metadata",
          operator: "eq",
          key: "<key>",
          value: "<value>",
        },
      ],
    },
    segmentFilters: [
      {
        filter: {
          name: "modality",
          operator: "not_in",
          value: "ENUM_VALUE",
        },
        sampleRate: 7227.56,
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { jobsCreateJobJobsPost } from "galileo-generated/funcs/jobsCreateJobJobsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await jobsCreateJobJobsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    runId: "<value>",
    scorers: [],
    promptRegisteredScorersConfiguration: null,
    promptFinetunedScorersConfiguration: [
      {
        filters: [
          {
            name: "modality",
            operator: "not_in",
            value: "ENUM_VALUE",
          },
        ],
      },
    ],
    promptCustomizedScorersConfiguration: [
      {
        scorerName: "_customized_groundedness",
        modelAlias: "gpt-4.1-mini",
        numJudges: 3,
        name: "context_adherence",
        regexField: "",
        requiresToolsInLlmSpan: false,
      },
    ],
    promptScorerSettings: {
      filters: [
        {
          name: "node_name",
          operator: "contains",
          value: [],
          caseSensitive: true,
        },
      ],
    },
    scorerConfig: {
      id: "<value>",
      filters: [
        {
          name: "metadata",
          operator: "eq",
          key: "<key>",
          value: "<value>",
        },
      ],
    },
    segmentFilters: [
      {
        filter: {
          name: "modality",
          operator: "not_in",
          value: "ENUM_VALUE",
        },
        sampleRate: 7227.56,
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobsCreateJobJobsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateJobRequest](../../models/createjobrequest.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateJobJobsPostSecurity](../../models/operations/createjobjobspostsecurity.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateJobResponse](../../models/createjobresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |