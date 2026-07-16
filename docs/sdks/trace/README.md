# Trace

## Overview

### Available Operations

* [getAggregatedTraceViewProjectsProjectIdTracesAggregatedPost](#getaggregatedtraceviewprojectsprojectidtracesaggregatedpost) - Get Aggregated Trace View
* [recomputeMetricsProjectsProjectIdRecomputeMetricsPost](#recomputemetricsprojectsprojectidrecomputemetricspost) - Recompute Metrics
* [logTracesProjectsProjectIdTracesPost](#logtracesprojectsprojectidtracespost) - Log Traces
* [updateTraceProjectsProjectIdTracesTraceIdPatch](#updatetraceprojectsprojectidtracestraceidpatch) - Update Trace
* [getTraceProjectsProjectIdTracesTraceIdGet](#gettraceprojectsprojectidtracestraceidget) - Get Trace
* [updateSpanProjectsProjectIdSpansSpanIdPatch](#updatespanprojectsprojectidspansspanidpatch) - Update Span
* [getSpanProjectsProjectIdSpansSpanIdGet](#getspanprojectsprojectidspansspanidget) - Get Span
* [tracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost](#tracesavailablecolumnsprojectsprojectidtracesavailablecolumnspost) - Traces Available Columns
* [metricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost](#metricstestingavailablecolumnsprojectsprojectidmetricstestingavailablecolumnspost) - Metrics Testing Available Columns
* [spansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost](#spansavailablecolumnsprojectsprojectidspansavailablecolumnspost) - Spans Available Columns
* [sessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost](#sessionsavailablecolumnsprojectsprojectidsessionsavailablecolumnspost) - Sessions Available Columns
* [queryTracesProjectsProjectIdTracesSearchPost](#querytracesprojectsprojectidtracessearchpost) - Query Traces
* [queryPartialTracesProjectsProjectIdTracesPartialSearchPost](#querypartialtracesprojectsprojectidtracespartialsearchpost) - Query Partial Traces
* [countTracesProjectsProjectIdTracesCountPost](#counttracesprojectsprojectidtracescountpost) - Count Traces
* [logSpansProjectsProjectIdSpansPost](#logspansprojectsprojectidspanspost) - Log Spans
* [querySpansProjectsProjectIdSpansSearchPost](#queryspansprojectsprojectidspanssearchpost) - Query Spans
* [queryPartialSpansProjectsProjectIdSpansPartialSearchPost](#querypartialspansprojectsprojectidspanspartialsearchpost) - Query Partial Spans
* [countSpansProjectsProjectIdSpansCountPost](#countspansprojectsprojectidspanscountpost) - Count Spans
* [queryMetricsProjectsProjectIdMetricsSearchPost](#querymetricsprojectsprojectidmetricssearchpost) - Query Metrics
* [queryMetricsV2ProjectsProjectIdMetricsSearchV2Post](#querymetricsv2projectsprojectidmetricssearchv2post) - Query Metrics V2
* [queryCustomMetricsProjectsProjectIdMetricsCustomSearchPost](#querycustommetricsprojectsprojectidmetricscustomsearchpost) - Query Custom Metrics
* [createSessionProjectsProjectIdSessionsPost](#createsessionprojectsprojectidsessionspost) - Create Session
* [querySessionsProjectsProjectIdSessionsSearchPost](#querysessionsprojectsprojectidsessionssearchpost) - Query Sessions
* [queryPartialSessionsProjectsProjectIdSessionsPartialSearchPost](#querypartialsessionsprojectsprojectidsessionspartialsearchpost) - Query Partial Sessions
* [countSessionsProjectsProjectIdSessionsCountPost](#countsessionsprojectsprojectidsessionscountpost) - Count Sessions
* [getSessionProjectsProjectIdSessionsSessionIdGet](#getsessionprojectsprojectidsessionssessionidget) - Get Session
* [exportRecordsProjectsProjectIdExportRecordsPost](#exportrecordsprojectsprojectidexportrecordspost) - Export Records
* [exportRecordsUrlProjectsProjectIdExportRecordsUrlPost](#exportrecordsurlprojectsprojectidexportrecordsurlpost) - Export Records Url
* [deleteTracesProjectsProjectIdTracesDeletePost](#deletetracesprojectsprojectidtracesdeletepost) - Delete Traces
* [deleteSpansProjectsProjectIdSpansDeletePost](#deletespansprojectsprojectidspansdeletepost) - Delete Spans
* [deleteSessionsProjectsProjectIdSessionsDeletePost](#deletesessionsprojectsprojectidsessionsdeletepost) - Delete Sessions

## getAggregatedTraceViewProjectsProjectIdTracesAggregatedPost

Get Aggregated Trace View

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_aggregated_trace_view_projects__project_id__traces_aggregated_post" method="post" path="/projects/{project_id}/traces/aggregated" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.getAggregatedTraceViewProjectsProjectIdTracesAggregatedPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "<value>",
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
import { traceGetAggregatedTraceViewProjectsProjectIdTracesAggregatedPost } from "galileo-generated/funcs/traceGetAggregatedTraceViewProjectsProjectIdTracesAggregatedPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceGetAggregatedTraceViewProjectsProjectIdTracesAggregatedPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceGetAggregatedTraceViewProjectsProjectIdTracesAggregatedPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.GetAggregatedTraceViewProjectsProjectIdTracesAggregatedPostRequest](../../models/operations/getaggregatedtraceviewprojectsprojectidtracesaggregatedpostrequest.md)   | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `security`                                                                                                                                                                       | [operations.GetAggregatedTraceViewProjectsProjectIdTracesAggregatedPostSecurity](../../models/operations/getaggregatedtraceviewprojectsprojectidtracesaggregatedpostsecurity.md) | :heavy_check_mark:                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[models.AggregatedTraceViewResponse](../../models/aggregatedtraceviewresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## recomputeMetricsProjectsProjectIdRecomputeMetricsPost

Recompute Metrics

### Example Usage

<!-- UsageSnippet language="typescript" operationID="recompute_metrics_projects__project_id__recompute_metrics_post" method="post" path="/projects/{project_id}/recompute-metrics" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.recomputeMetricsProjectsProjectIdRecomputeMetricsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      scorerIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
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
import { traceRecomputeMetricsProjectsProjectIdRecomputeMetricsPost } from "galileo-generated/funcs/traceRecomputeMetricsProjectsProjectIdRecomputeMetricsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceRecomputeMetricsProjectsProjectIdRecomputeMetricsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      scorerIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceRecomputeMetricsProjectsProjectIdRecomputeMetricsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RecomputeMetricsProjectsProjectIdRecomputeMetricsPostRequest](../../models/operations/recomputemetricsprojectsprojectidrecomputemetricspostrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.RecomputeMetricsProjectsProjectIdRecomputeMetricsPostSecurity](../../models/operations/recomputemetricsprojectsprojectidrecomputemetricspostsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## logTracesProjectsProjectIdTracesPost

Log Traces

### Example Usage

<!-- UsageSnippet language="typescript" operationID="log_traces_projects__project_id__traces_post" method="post" path="/projects/{project_id}/traces" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.logTracesProjectsProjectIdTracesPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      sessionId: "00000000-0000-0000-0000-000000000000",
      traces: [
        {
          input: "who is a smart LLM?",
          output: "I am!",
          createdAt: new Date("2026-07-14T04:36:24.342904Z"),
          userMetadata: {

          },
          tags: [],
          metrics: {},
          datasetMetadata: {

          },
          spans: [
            {
              type: "llm",
              input: [
                {
                  content: "Question: who is a smart LLM?",
                  role: "user",
                },
              ],
              output: {
                content: "I am!",
                role: "user",
              },
              name: "",
              createdAt: new Date("2026-07-14T04:36:24.342848Z"),
              userMetadata: {

              },
              tags: [],
              metrics: {},
              datasetMetadata: {

              },
            },
          ],
        },
      ],
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
import { traceLogTracesProjectsProjectIdTracesPost } from "galileo-generated/funcs/traceLogTracesProjectsProjectIdTracesPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceLogTracesProjectsProjectIdTracesPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      sessionId: "00000000-0000-0000-0000-000000000000",
      traces: [
        {
          input: "who is a smart LLM?",
          output: "I am!",
          createdAt: new Date("2026-07-14T04:36:24.342904Z"),
          userMetadata: {
  
          },
          tags: [],
          metrics: {},
          datasetMetadata: {
  
          },
          spans: [
            {
              type: "llm",
              input: [
                {
                  content: "Question: who is a smart LLM?",
                  role: "user",
                },
              ],
              output: {
                content: "I am!",
                role: "user",
              },
              name: "",
              createdAt: new Date("2026-07-14T04:36:24.342848Z"),
              userMetadata: {
  
              },
              tags: [],
              metrics: {},
              datasetMetadata: {
  
              },
            },
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceLogTracesProjectsProjectIdTracesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LogTracesProjectsProjectIdTracesPostRequest](../../models/operations/logtracesprojectsprojectidtracespostrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LogTracesProjectsProjectIdTracesPostSecurity](../../models/operations/logtracesprojectsprojectidtracespostsecurity.md)                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogTracesIngestResponse](../../models/logtracesingestresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateTraceProjectsProjectIdTracesTraceIdPatch

Update a trace with the given ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_trace_projects__project_id__traces__trace_id__patch" method="patch" path="/projects/{project_id}/traces/{trace_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.updateTraceProjectsProjectIdTracesTraceIdPatch({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    traceId: "<value>",
    projectId: "<value>",
    body: {
      traceId: "<value>",
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
import { traceUpdateTraceProjectsProjectIdTracesTraceIdPatch } from "galileo-generated/funcs/traceUpdateTraceProjectsProjectIdTracesTraceIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceUpdateTraceProjectsProjectIdTracesTraceIdPatch(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    traceId: "<value>",
    projectId: "<value>",
    body: {
      traceId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceUpdateTraceProjectsProjectIdTracesTraceIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTraceProjectsProjectIdTracesTraceIdPatchRequest](../../models/operations/updatetraceprojectsprojectidtracestraceidpatchrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateTraceProjectsProjectIdTracesTraceIdPatchSecurity](../../models/operations/updatetraceprojectsprojectidtracestraceidpatchsecurity.md)                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogTraceUpdateResponse](../../models/logtraceupdateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getTraceProjectsProjectIdTracesTraceIdGet

Get Trace

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_trace_projects__project_id__traces__trace_id__get" method="get" path="/projects/{project_id}/traces/{trace_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.getTraceProjectsProjectIdTracesTraceIdGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    traceId: "<value>",
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
import { traceGetTraceProjectsProjectIdTracesTraceIdGet } from "galileo-generated/funcs/traceGetTraceProjectsProjectIdTracesTraceIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceGetTraceProjectsProjectIdTracesTraceIdGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    traceId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceGetTraceProjectsProjectIdTracesTraceIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTraceProjectsProjectIdTracesTraceIdGetRequest](../../models/operations/gettraceprojectsprojectidtracestraceidgetrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetTraceProjectsProjectIdTracesTraceIdGetSecurity](../../models/operations/gettraceprojectsprojectidtracestraceidgetsecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResponseGetTraceProjectsProjectIdTracesTraceIdGet](../../models/operations/responsegettraceprojectsprojectidtracestraceidget.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateSpanProjectsProjectIdSpansSpanIdPatch

Update a span with the given ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_span_projects__project_id__spans__span_id__patch" method="patch" path="/projects/{project_id}/spans/{span_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.updateSpanProjectsProjectIdSpansSpanIdPatch({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    spanId: "<value>",
    projectId: "<value>",
    body: {
      spanId: "<value>",
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
import { traceUpdateSpanProjectsProjectIdSpansSpanIdPatch } from "galileo-generated/funcs/traceUpdateSpanProjectsProjectIdSpansSpanIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceUpdateSpanProjectsProjectIdSpansSpanIdPatch(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    spanId: "<value>",
    projectId: "<value>",
    body: {
      spanId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceUpdateSpanProjectsProjectIdSpansSpanIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSpanProjectsProjectIdSpansSpanIdPatchRequest](../../models/operations/updatespanprojectsprojectidspansspanidpatchrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateSpanProjectsProjectIdSpansSpanIdPatchSecurity](../../models/operations/updatespanprojectsprojectidspansspanidpatchsecurity.md)                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogSpanUpdateResponse](../../models/logspanupdateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getSpanProjectsProjectIdSpansSpanIdGet

Get Span

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_span_projects__project_id__spans__span_id__get" method="get" path="/projects/{project_id}/spans/{span_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.getSpanProjectsProjectIdSpansSpanIdGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    spanId: "<value>",
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
import { traceGetSpanProjectsProjectIdSpansSpanIdGet } from "galileo-generated/funcs/traceGetSpanProjectsProjectIdSpansSpanIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceGetSpanProjectsProjectIdSpansSpanIdGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    spanId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceGetSpanProjectsProjectIdSpansSpanIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpanProjectsProjectIdSpansSpanIdGetRequest](../../models/operations/getspanprojectsprojectidspansspanidgetrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetSpanProjectsProjectIdSpansSpanIdGetSecurity](../../models/operations/getspanprojectsprojectidspansspanidgetsecurity.md)                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResponseGetSpanProjectsProjectIdSpansSpanIdGet](../../models/operations/responsegetspanprojectsprojectidspansspanidget.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## tracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost

Traces Available Columns

### Example Usage

<!-- UsageSnippet language="typescript" operationID="traces_available_columns_projects__project_id__traces_available_columns_post" method="post" path="/projects/{project_id}/traces/available_columns" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.tracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
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
import { traceTracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost } from "galileo-generated/funcs/traceTracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceTracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceTracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.TracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPostRequest](../../models/operations/tracesavailablecolumnsprojectsprojectidtracesavailablecolumnspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.TracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPostSecurity](../../models/operations/tracesavailablecolumnsprojectsprojectidtracesavailablecolumnspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[models.LogRecordsAvailableColumnsResponse](../../models/logrecordsavailablecolumnsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## metricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost

Metrics Testing Available Columns

### Example Usage

<!-- UsageSnippet language="typescript" operationID="metrics_testing_available_columns_projects__project_id__metrics_testing_available_columns_post" method="post" path="/projects/{project_id}/metrics-testing/available_columns" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.metricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      name: "<value>",
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
  traceMetricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost,
} from "galileo-generated/funcs/traceMetricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceMetricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceMetricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                    | [operations.MetricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPostRequest](../../models/operations/metricstestingavailablecolumnsprojectsprojectidmetricstestingavailablecolumnspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                   |
| `security`                                                                                                                                                                                                                   | [operations.MetricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPostSecurity](../../models/operations/metricstestingavailablecolumnsprojectsprojectidmetricstestingavailablecolumnspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                               |
| `options.retries`                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                             |

### Response

**Promise\<[models.LogRecordsAvailableColumnsResponse](../../models/logrecordsavailablecolumnsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## spansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost

Spans Available Columns

### Example Usage

<!-- UsageSnippet language="typescript" operationID="spans_available_columns_projects__project_id__spans_available_columns_post" method="post" path="/projects/{project_id}/spans/available_columns" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.spansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
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
import { traceSpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost } from "galileo-generated/funcs/traceSpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceSpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceSpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.SpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPostRequest](../../models/operations/spansavailablecolumnsprojectsprojectidspansavailablecolumnspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.SpansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPostSecurity](../../models/operations/spansavailablecolumnsprojectsprojectidspansavailablecolumnspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[models.LogRecordsAvailableColumnsResponse](../../models/logrecordsavailablecolumnsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## sessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost

Sessions Available Columns

### Example Usage

<!-- UsageSnippet language="typescript" operationID="sessions_available_columns_projects__project_id__sessions_available_columns_post" method="post" path="/projects/{project_id}/sessions/available_columns" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.sessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
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
import { traceSessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost } from "galileo-generated/funcs/traceSessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceSessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceSessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.SessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPostRequest](../../models/operations/sessionsavailablecolumnsprojectsprojectidsessionsavailablecolumnspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `security`                                                                                                                                                                                           | [operations.SessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPostSecurity](../../models/operations/sessionsavailablecolumnsprojectsprojectidsessionsavailablecolumnspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[models.LogRecordsAvailableColumnsResponse](../../models/logrecordsavailablecolumnsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryTracesProjectsProjectIdTracesSearchPost

Query Traces

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_traces_projects__project_id__traces_search_post" method="post" path="/projects/{project_id}/traces/search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryTracesProjectsProjectIdTracesSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
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
import { traceQueryTracesProjectsProjectIdTracesSearchPost } from "galileo-generated/funcs/traceQueryTracesProjectsProjectIdTracesSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQueryTracesProjectsProjectIdTracesSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQueryTracesProjectsProjectIdTracesSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryTracesProjectsProjectIdTracesSearchPostRequest](../../models/operations/querytracesprojectsprojectidtracessearchpostrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryTracesProjectsProjectIdTracesSearchPostSecurity](../../models/operations/querytracesprojectsprojectidtracessearchpostsecurity.md)                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsQueryResponse](../../models/logrecordsqueryresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryPartialTracesProjectsProjectIdTracesPartialSearchPost

Query Partial Traces

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_partial_traces_projects__project_id__traces_partial_search_post" method="post" path="/projects/{project_id}/traces/partial_search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryPartialTracesProjectsProjectIdTracesPartialSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      selectColumns: {
        columnIds: [
          "id",
          "metrics/agentic_session_success",
          "metrics/completeness_gpt",
        ],
      },
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
import { traceQueryPartialTracesProjectsProjectIdTracesPartialSearchPost } from "galileo-generated/funcs/traceQueryPartialTracesProjectsProjectIdTracesPartialSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQueryPartialTracesProjectsProjectIdTracesPartialSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      selectColumns: {
        columnIds: [
          "id",
          "metrics/agentic_session_success",
          "metrics/completeness_gpt",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQueryPartialTracesProjectsProjectIdTracesPartialSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryPartialTracesProjectsProjectIdTracesPartialSearchPostRequest](../../models/operations/querypartialtracesprojectsprojectidtracespartialsearchpostrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryPartialTracesProjectsProjectIdTracesPartialSearchPostSecurity](../../models/operations/querypartialtracesprojectsprojectidtracespartialsearchpostsecurity.md) | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsPartialQueryResponse](../../models/logrecordspartialqueryresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## countTracesProjectsProjectIdTracesCountPost

This endpoint may return a slightly inaccurate count due to the way records are filtered before deduplication.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="count_traces_projects__project_id__traces_count_post" method="post" path="/projects/{project_id}/traces/count" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.countTracesProjectsProjectIdTracesCountPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
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
import { traceCountTracesProjectsProjectIdTracesCountPost } from "galileo-generated/funcs/traceCountTracesProjectsProjectIdTracesCountPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceCountTracesProjectsProjectIdTracesCountPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceCountTracesProjectsProjectIdTracesCountPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountTracesProjectsProjectIdTracesCountPostRequest](../../models/operations/counttracesprojectsprojectidtracescountpostrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CountTracesProjectsProjectIdTracesCountPostSecurity](../../models/operations/counttracesprojectsprojectidtracescountpostsecurity.md)                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsQueryCountResponse](../../models/logrecordsquerycountresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## logSpansProjectsProjectIdSpansPost

Log Spans

### Example Usage

<!-- UsageSnippet language="typescript" operationID="log_spans_projects__project_id__spans_post" method="post" path="/projects/{project_id}/spans" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.logSpansProjectsProjectIdSpansPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      spans: [
        {
          type: "workflow",
          input: "who is a smart LLM?",
          output: "I am!",
          name: "",
          createdAt: new Date("2026-07-14T04:36:24.363233Z"),
          userMetadata: {

          },
          tags: [],
          metrics: {},
          datasetMetadata: {

          },
          spans: [
            {
              type: "llm",
              input: [
                {
                  content: "Question: who is a smart LLM?",
                  role: "user",
                },
              ],
              output: {
                content: "I am!",
                role: "user",
              },
              name: "",
              createdAt: new Date("2026-07-14T04:36:24.349011Z"),
              userMetadata: {

              },
              tags: [],
              metrics: {},
              datasetMetadata: {

              },
              id: "22222222-2222-4222-a222-222222222222",
            },
          ],
        },
      ],
      traceId: "11000011-0000-0000-0000-110000110000",
      parentId: "11000011-0000-0000-0000-110000110000",
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
import { traceLogSpansProjectsProjectIdSpansPost } from "galileo-generated/funcs/traceLogSpansProjectsProjectIdSpansPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceLogSpansProjectsProjectIdSpansPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      spans: [
        {
          type: "workflow",
          input: "who is a smart LLM?",
          output: "I am!",
          name: "",
          createdAt: new Date("2026-07-14T04:36:24.363233Z"),
          userMetadata: {
  
          },
          tags: [],
          metrics: {},
          datasetMetadata: {
  
          },
          spans: [
            {
              type: "llm",
              input: [
                {
                  content: "Question: who is a smart LLM?",
                  role: "user",
                },
              ],
              output: {
                content: "I am!",
                role: "user",
              },
              name: "",
              createdAt: new Date("2026-07-14T04:36:24.349011Z"),
              userMetadata: {
  
              },
              tags: [],
              metrics: {},
              datasetMetadata: {
  
              },
              id: "22222222-2222-4222-a222-222222222222",
            },
          ],
        },
      ],
      traceId: "11000011-0000-0000-0000-110000110000",
      parentId: "11000011-0000-0000-0000-110000110000",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceLogSpansProjectsProjectIdSpansPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LogSpansProjectsProjectIdSpansPostRequest](../../models/operations/logspansprojectsprojectidspanspostrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LogSpansProjectsProjectIdSpansPostSecurity](../../models/operations/logspansprojectsprojectidspanspostsecurity.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogSpansIngestResponse](../../models/logspansingestresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## querySpansProjectsProjectIdSpansSearchPost

Query Spans

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_spans_projects__project_id__spans_search_post" method="post" path="/projects/{project_id}/spans/search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.querySpansProjectsProjectIdSpansSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
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
import { traceQuerySpansProjectsProjectIdSpansSearchPost } from "galileo-generated/funcs/traceQuerySpansProjectsProjectIdSpansSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQuerySpansProjectsProjectIdSpansSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQuerySpansProjectsProjectIdSpansSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QuerySpansProjectsProjectIdSpansSearchPostRequest](../../models/operations/queryspansprojectsprojectidspanssearchpostrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QuerySpansProjectsProjectIdSpansSearchPostSecurity](../../models/operations/queryspansprojectsprojectidspanssearchpostsecurity.md)                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsQueryResponse](../../models/logrecordsqueryresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryPartialSpansProjectsProjectIdSpansPartialSearchPost

Query Partial Spans

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_partial_spans_projects__project_id__spans_partial_search_post" method="post" path="/projects/{project_id}/spans/partial_search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryPartialSpansProjectsProjectIdSpansPartialSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      selectColumns: {
        columnIds: [
          "id",
          "metrics/agentic_session_success",
          "metrics/completeness_gpt",
        ],
      },
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
import { traceQueryPartialSpansProjectsProjectIdSpansPartialSearchPost } from "galileo-generated/funcs/traceQueryPartialSpansProjectsProjectIdSpansPartialSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQueryPartialSpansProjectsProjectIdSpansPartialSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      selectColumns: {
        columnIds: [
          "id",
          "metrics/agentic_session_success",
          "metrics/completeness_gpt",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQueryPartialSpansProjectsProjectIdSpansPartialSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryPartialSpansProjectsProjectIdSpansPartialSearchPostRequest](../../models/operations/querypartialspansprojectsprojectidspanspartialsearchpostrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryPartialSpansProjectsProjectIdSpansPartialSearchPostSecurity](../../models/operations/querypartialspansprojectsprojectidspanspartialsearchpostsecurity.md)     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsPartialQueryResponse](../../models/logrecordspartialqueryresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## countSpansProjectsProjectIdSpansCountPost

Count Spans

### Example Usage

<!-- UsageSnippet language="typescript" operationID="count_spans_projects__project_id__spans_count_post" method="post" path="/projects/{project_id}/spans/count" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.countSpansProjectsProjectIdSpansCountPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
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
import { traceCountSpansProjectsProjectIdSpansCountPost } from "galileo-generated/funcs/traceCountSpansProjectsProjectIdSpansCountPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceCountSpansProjectsProjectIdSpansCountPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceCountSpansProjectsProjectIdSpansCountPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountSpansProjectsProjectIdSpansCountPostRequest](../../models/operations/countspansprojectsprojectidspanscountpostrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CountSpansProjectsProjectIdSpansCountPostSecurity](../../models/operations/countspansprojectsprojectidspanscountpostsecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsQueryCountResponse](../../models/logrecordsquerycountresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryMetricsProjectsProjectIdMetricsSearchPost

Query Metrics

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_metrics_projects__project_id__metrics_search_post" method="post" path="/projects/{project_id}/metrics/search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryMetricsProjectsProjectIdMetricsSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      startTime: new Date("2023-10-01T00:00:00Z"),
      endTime: new Date("2023-10-01T01:00:00Z"),
      groupBy: "model",
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
import { traceQueryMetricsProjectsProjectIdMetricsSearchPost } from "galileo-generated/funcs/traceQueryMetricsProjectsProjectIdMetricsSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQueryMetricsProjectsProjectIdMetricsSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      startTime: new Date("2023-10-01T00:00:00Z"),
      endTime: new Date("2023-10-01T01:00:00Z"),
      groupBy: "model",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQueryMetricsProjectsProjectIdMetricsSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryMetricsProjectsProjectIdMetricsSearchPostRequest](../../models/operations/querymetricsprojectsprojectidmetricssearchpostrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryMetricsProjectsProjectIdMetricsSearchPostSecurity](../../models/operations/querymetricsprojectsprojectidmetricssearchpostsecurity.md)                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsMetricsResponse](../../models/logrecordsmetricsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryMetricsV2ProjectsProjectIdMetricsSearchV2Post

Same as /metrics/search but returns metrics with node-type counts: trace (requests_count),
session_count, and span_count in aggregate_metrics and in each bucket, similar to /metrics/custom_search.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_metrics_v2_projects__project_id__metrics_search_v2_post" method="post" path="/projects/{project_id}/metrics/search/v2" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryMetricsV2ProjectsProjectIdMetricsSearchV2Post({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      startTime: new Date("2023-10-01T00:00:00Z"),
      endTime: new Date("2023-10-01T01:00:00Z"),
      groupBy: "model",
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
import { traceQueryMetricsV2ProjectsProjectIdMetricsSearchV2Post } from "galileo-generated/funcs/traceQueryMetricsV2ProjectsProjectIdMetricsSearchV2Post.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQueryMetricsV2ProjectsProjectIdMetricsSearchV2Post(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      startTime: new Date("2023-10-01T00:00:00Z"),
      endTime: new Date("2023-10-01T01:00:00Z"),
      groupBy: "model",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQueryMetricsV2ProjectsProjectIdMetricsSearchV2Post failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryMetricsV2ProjectsProjectIdMetricsSearchV2PostRequest](../../models/operations/querymetricsv2projectsprojectidmetricssearchv2postrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryMetricsV2ProjectsProjectIdMetricsSearchV2PostSecurity](../../models/operations/querymetricsv2projectsprojectidmetricssearchv2postsecurity.md)                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsMetricsResponse](../../models/logrecordsmetricsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryCustomMetricsProjectsProjectIdMetricsCustomSearchPost

Query Custom Metrics

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_custom_metrics_projects__project_id__metrics_custom_search_post" method="post" path="/projects/{project_id}/metrics/custom_search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryCustomMetricsProjectsProjectIdMetricsCustomSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "c5fef527-51f6-49d0-800a-1859b678a098",
      filterTree: {
        not: {
          and: [],
        },
      },
      startTime: new Date("2024-01-01T00:00:00Z"),
      endTime: new Date("2024-01-07T23:59:59Z"),
      intervalMinutes: 1440,
      metricDetails: [
        {
          id: "w1",
          metricName: "num_total_tokens",
          aggregation: "Sum",
        },
        {
          id: "w2",
          metricName: "toxicity",
          aggregation: "Average",
        },
      ],
      groupBy: "model",
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
import { traceQueryCustomMetricsProjectsProjectIdMetricsCustomSearchPost } from "galileo-generated/funcs/traceQueryCustomMetricsProjectsProjectIdMetricsCustomSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQueryCustomMetricsProjectsProjectIdMetricsCustomSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "c5fef527-51f6-49d0-800a-1859b678a098",
      filterTree: {
        not: {
          and: [],
        },
      },
      startTime: new Date("2024-01-01T00:00:00Z"),
      endTime: new Date("2024-01-07T23:59:59Z"),
      intervalMinutes: 1440,
      metricDetails: [
        {
          id: "w1",
          metricName: "num_total_tokens",
          aggregation: "Sum",
        },
        {
          id: "w2",
          metricName: "toxicity",
          aggregation: "Average",
        },
      ],
      groupBy: "model",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQueryCustomMetricsProjectsProjectIdMetricsCustomSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryCustomMetricsProjectsProjectIdMetricsCustomSearchPostRequest](../../models/operations/querycustommetricsprojectsprojectidmetricscustomsearchpostrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryCustomMetricsProjectsProjectIdMetricsCustomSearchPostSecurity](../../models/operations/querycustommetricsprojectsprojectidmetricscustomsearchpostsecurity.md) | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsMetricsResponse](../../models/logrecordsmetricsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createSessionProjectsProjectIdSessionsPost

Create Session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_session_projects__project_id__sessions_post" method="post" path="/projects/{project_id}/sessions" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.createSessionProjectsProjectIdSessionsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { traceCreateSessionProjectsProjectIdSessionsPost } from "galileo-generated/funcs/traceCreateSessionProjectsProjectIdSessionsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceCreateSessionProjectsProjectIdSessionsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceCreateSessionProjectsProjectIdSessionsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSessionProjectsProjectIdSessionsPostRequest](../../models/operations/createsessionprojectsprojectidsessionspostrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateSessionProjectsProjectIdSessionsPostSecurity](../../models/operations/createsessionprojectsprojectidsessionspostsecurity.md)                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SessionCreateResponse](../../models/sessioncreateresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## querySessionsProjectsProjectIdSessionsSearchPost

Query Sessions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_sessions_projects__project_id__sessions_search_post" method="post" path="/projects/{project_id}/sessions/search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.querySessionsProjectsProjectIdSessionsSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
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
import { traceQuerySessionsProjectsProjectIdSessionsSearchPost } from "galileo-generated/funcs/traceQuerySessionsProjectsProjectIdSessionsSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQuerySessionsProjectsProjectIdSessionsSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQuerySessionsProjectsProjectIdSessionsSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QuerySessionsProjectsProjectIdSessionsSearchPostRequest](../../models/operations/querysessionsprojectsprojectidsessionssearchpostrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QuerySessionsProjectsProjectIdSessionsSearchPostSecurity](../../models/operations/querysessionsprojectsprojectidsessionssearchpostsecurity.md)                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsQueryResponse](../../models/logrecordsqueryresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryPartialSessionsProjectsProjectIdSessionsPartialSearchPost

Query Partial Sessions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_partial_sessions_projects__project_id__sessions_partial_search_post" method="post" path="/projects/{project_id}/sessions/partial_search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryPartialSessionsProjectsProjectIdSessionsPartialSearchPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      selectColumns: {
        columnIds: [
          "id",
          "metrics/agentic_session_success",
          "metrics/completeness_gpt",
        ],
      },
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
import { traceQueryPartialSessionsProjectsProjectIdSessionsPartialSearchPost } from "galileo-generated/funcs/traceQueryPartialSessionsProjectsProjectIdSessionsPartialSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceQueryPartialSessionsProjectsProjectIdSessionsPartialSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      selectColumns: {
        columnIds: [
          "id",
          "metrics/agentic_session_success",
          "metrics/completeness_gpt",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceQueryPartialSessionsProjectsProjectIdSessionsPartialSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.QueryPartialSessionsProjectsProjectIdSessionsPartialSearchPostRequest](../../models/operations/querypartialsessionsprojectsprojectidsessionspartialsearchpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.QueryPartialSessionsProjectsProjectIdSessionsPartialSearchPostSecurity](../../models/operations/querypartialsessionsprojectsprojectidsessionspartialsearchpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.LogRecordsPartialQueryResponse](../../models/logrecordspartialqueryresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## countSessionsProjectsProjectIdSessionsCountPost

Count Sessions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="count_sessions_projects__project_id__sessions_count_post" method="post" path="/projects/{project_id}/sessions/count" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.countSessionsProjectsProjectIdSessionsCountPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
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
import { traceCountSessionsProjectsProjectIdSessionsCountPost } from "galileo-generated/funcs/traceCountSessionsProjectsProjectIdSessionsCountPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceCountSessionsProjectsProjectIdSessionsCountPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceCountSessionsProjectsProjectIdSessionsCountPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountSessionsProjectsProjectIdSessionsCountPostRequest](../../models/operations/countsessionsprojectsprojectidsessionscountpostrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CountSessionsProjectsProjectIdSessionsCountPostSecurity](../../models/operations/countsessionsprojectsprojectidsessionscountpostsecurity.md)                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsQueryCountResponse](../../models/logrecordsquerycountresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getSessionProjectsProjectIdSessionsSessionIdGet

Get Session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_session_projects__project_id__sessions__session_id__get" method="get" path="/projects/{project_id}/sessions/{session_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.getSessionProjectsProjectIdSessionsSessionIdGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    sessionId: "<value>",
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
import { traceGetSessionProjectsProjectIdSessionsSessionIdGet } from "galileo-generated/funcs/traceGetSessionProjectsProjectIdSessionsSessionIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceGetSessionProjectsProjectIdSessionsSessionIdGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    sessionId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceGetSessionProjectsProjectIdSessionsSessionIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSessionProjectsProjectIdSessionsSessionIdGetRequest](../../models/operations/getsessionprojectsprojectidsessionssessionidgetrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetSessionProjectsProjectIdSessionsSessionIdGetSecurity](../../models/operations/getsessionprojectsprojectidsessionssessionidgetsecurity.md)                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExtendedSessionRecordWithChildren](../../models/extendedsessionrecordwithchildren.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## exportRecordsProjectsProjectIdExportRecordsPost

Export Records

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_records_projects__project_id__export_records_post" method="post" path="/projects/{project_id}/export_records" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.exportRecordsProjectsProjectIdExportRecordsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      columnIds: [
        "input",
        "output",
        "created_at",
      ],
      exportFormat: "jsonl",
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      rootType: "trace",
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
import { traceExportRecordsProjectsProjectIdExportRecordsPost } from "galileo-generated/funcs/traceExportRecordsProjectsProjectIdExportRecordsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceExportRecordsProjectsProjectIdExportRecordsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      columnIds: [
        "input",
        "output",
        "created_at",
      ],
      exportFormat: "jsonl",
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      rootType: "trace",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceExportRecordsProjectsProjectIdExportRecordsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExportRecordsProjectsProjectIdExportRecordsPostRequest](../../models/operations/exportrecordsprojectsprojectidexportrecordspostrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ExportRecordsProjectsProjectIdExportRecordsPostSecurity](../../models/operations/exportrecordsprojectsprojectidexportrecordspostsecurity.md)                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## exportRecordsUrlProjectsProjectIdExportRecordsUrlPost

Export Records Url

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_records_url_projects__project_id__export_records_url_post" method="post" path="/projects/{project_id}/export_records/url" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.exportRecordsUrlProjectsProjectIdExportRecordsUrlPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      columnIds: [
        "input",
        "output",
        "created_at",
      ],
      exportFormat: "jsonl",
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      rootType: "trace",
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
import { traceExportRecordsUrlProjectsProjectIdExportRecordsUrlPost } from "galileo-generated/funcs/traceExportRecordsUrlProjectsProjectIdExportRecordsUrlPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceExportRecordsUrlProjectsProjectIdExportRecordsUrlPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      columnIds: [
        "input",
        "output",
        "created_at",
      ],
      exportFormat: "jsonl",
      logStreamId: "00000000-0000-0000-0000-000000000000",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
      sort: {
        columnId: "<id>",
        ascending: false,
      },
      rootType: "trace",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceExportRecordsUrlProjectsProjectIdExportRecordsUrlPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExportRecordsUrlProjectsProjectIdExportRecordsUrlPostRequest](../../models/operations/exportrecordsurlprojectsprojectidexportrecordsurlpostrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ExportRecordsUrlProjectsProjectIdExportRecordsUrlPostSecurity](../../models/operations/exportrecordsurlprojectsprojectidexportrecordsurlpostsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExportPresignedUrlResponse](../../models/exportpresignedurlresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteTracesProjectsProjectIdTracesDeletePost

Delete all trace records that match the provided filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_traces_projects__project_id__traces_delete_post" method="post" path="/projects/{project_id}/traces/delete" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.deleteTracesProjectsProjectIdTracesDeletePost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
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
import { traceDeleteTracesProjectsProjectIdTracesDeletePost } from "galileo-generated/funcs/traceDeleteTracesProjectsProjectIdTracesDeletePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceDeleteTracesProjectsProjectIdTracesDeletePost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceDeleteTracesProjectsProjectIdTracesDeletePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTracesProjectsProjectIdTracesDeletePostRequest](../../models/operations/deletetracesprojectsprojectidtracesdeletepostrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteTracesProjectsProjectIdTracesDeletePostSecurity](../../models/operations/deletetracesprojectsprojectidtracesdeletepostsecurity.md)                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsDeleteResponse](../../models/logrecordsdeleteresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteSpansProjectsProjectIdSpansDeletePost

Delete all span records that match the provided filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_spans_projects__project_id__spans_delete_post" method="post" path="/projects/{project_id}/spans/delete" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.deleteSpansProjectsProjectIdSpansDeletePost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
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
import { traceDeleteSpansProjectsProjectIdSpansDeletePost } from "galileo-generated/funcs/traceDeleteSpansProjectsProjectIdSpansDeletePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceDeleteSpansProjectsProjectIdSpansDeletePost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceDeleteSpansProjectsProjectIdSpansDeletePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSpansProjectsProjectIdSpansDeletePostRequest](../../models/operations/deletespansprojectsprojectidspansdeletepostrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteSpansProjectsProjectIdSpansDeletePostSecurity](../../models/operations/deletespansprojectsprojectidspansdeletepostsecurity.md)                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsDeleteResponse](../../models/logrecordsdeleteresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteSessionsProjectsProjectIdSessionsDeletePost

Delete all session records that match the provided filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_sessions_projects__project_id__sessions_delete_post" method="post" path="/projects/{project_id}/sessions/delete" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.deleteSessionsProjectsProjectIdSessionsDeletePost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
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
import { traceDeleteSessionsProjectsProjectIdSessionsDeletePost } from "galileo-generated/funcs/traceDeleteSessionsProjectsProjectIdSessionsDeletePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await traceDeleteSessionsProjectsProjectIdSessionsDeletePost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "74aec44e-ec21-4c9f-a3e2-b2ab2b81b4db",
      filters: [
        {
          columnId: "<id>",
          operator: "eq",
          value: "example input",
          caseSensitive: true,
          type: "text",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("traceDeleteSessionsProjectsProjectIdSessionsDeletePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSessionsProjectsProjectIdSessionsDeletePostRequest](../../models/operations/deletesessionsprojectsprojectidsessionsdeletepostrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteSessionsProjectsProjectIdSessionsDeletePostSecurity](../../models/operations/deletesessionsprojectsprojectidsessionsdeletepostsecurity.md)                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogRecordsDeleteResponse](../../models/logrecordsdeleteresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |