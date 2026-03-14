# Trace

## Overview

### Available Operations

* [logTracesProjectsProjectIdTracesPost](#logtracesprojectsprojectidtracespost) - Log Traces
* [updateTraceProjectsProjectIdTracesTraceIdPatch](#updatetraceprojectsprojectidtracestraceidpatch) - Update Trace
* [getTraceProjectsProjectIdTracesTraceIdGet](#gettraceprojectsprojectidtracestraceidget) - Get Trace
* [updateSpanProjectsProjectIdSpansSpanIdPatch](#updatespanprojectsprojectidspansspanidpatch) - Update Span
* [getSpanProjectsProjectIdSpansSpanIdGet](#getspanprojectsprojectidspansspanidget) - Get Span
* [tracesAvailableColumnsProjectsProjectIdTracesAvailableColumnsPost](#tracesavailablecolumnsprojectsprojectidtracesavailablecolumnspost) - Traces Available Columns
* [metricsTestingAvailableColumnsProjectsProjectIdMetricsTestingAvailableColumnsPost](#metricstestingavailablecolumnsprojectsprojectidmetricstestingavailablecolumnspost) - Metrics Testing Available Columns
* [spansAvailableColumnsProjectsProjectIdSpansAvailableColumnsPost](#spansavailablecolumnsprojectsprojectidspansavailablecolumnspost) - Spans Available Columns
* [queryTracesProjectsProjectIdTracesSearchPost](#querytracesprojectsprojectidtracessearchpost) - Query Traces
* [queryPartialTracesProjectsProjectIdTracesPartialSearchPost](#querypartialtracesprojectsprojectidtracespartialsearchpost) - Query Partial Traces
* [countTracesProjectsProjectIdTracesCountPost](#counttracesprojectsprojectidtracescountpost) - Count Traces
* [logSpansProjectsProjectIdSpansPost](#logspansprojectsprojectidspanspost) - Log Spans
* [querySpansProjectsProjectIdSpansSearchPost](#queryspansprojectsprojectidspanssearchpost) - Query Spans
* [queryPartialSpansProjectsProjectIdSpansPartialSearchPost](#querypartialspansprojectsprojectidspanspartialsearchpost) - Query Partial Spans
* [countSpansProjectsProjectIdSpansCountPost](#countspansprojectsprojectidspanscountpost) - Count Spans
* [createSessionProjectsProjectIdSessionsPost](#createsessionprojectsprojectidsessionspost) - Create Session
* [querySessionsProjectsProjectIdSessionsSearchPost](#querysessionsprojectsprojectidsessionssearchpost) - Query Sessions
* [queryPartialSessionsProjectsProjectIdSessionsPartialSearchPost](#querypartialsessionsprojectsprojectidsessionspartialsearchpost) - Query Partial Sessions
* [countSessionsProjectsProjectIdSessionsCountPost](#countsessionsprojectsprojectidsessionscountpost) - Count Sessions
* [getSessionProjectsProjectIdSessionsSessionIdGet](#getsessionprojectsprojectidsessionssessionidget) - Get Session
* [sessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost](#sessionsavailablecolumnsprojectsprojectidsessionsavailablecolumnspost) - Sessions Available Columns
* [getAggregatedTraceViewProjectsProjectIdTracesAggregatedPost](#getaggregatedtraceviewprojectsprojectidtracesaggregatedpost) - Get Aggregated Trace View
* [exportRecordsProjectsProjectIdExportRecordsPost](#exportrecordsprojectsprojectidexportrecordspost) - Export Records
* [recomputeMetricsProjectsProjectIdRecomputeMetricsPost](#recomputemetricsprojectsprojectidrecomputemetricspost) - Recompute Metrics
* [deleteTracesProjectsProjectIdTracesDeletePost](#deletetracesprojectsprojectidtracesdeletepost) - Delete Traces
* [deleteSpansProjectsProjectIdSpansDeletePost](#deletespansprojectsprojectidspansdeletepost) - Delete Spans
* [deleteSessionsProjectsProjectIdSessionsDeletePost](#deletesessionsprojectsprojectidsessionsdeletepost) - Delete Sessions

## logTracesProjectsProjectIdTracesPost

Log Traces

### Example Usage

<!-- UsageSnippet language="typescript" operationID="log_traces_projects__project_id__traces_post" method="post" path="/projects/{project_id}/traces" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.logTracesProjectsProjectIdTracesPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      sessionId: "00000000-0000-0000-0000-000000000000",
      traces: [
        {
          input: "who is a smart LLM?",
          output: "I am!",
          createdAt: new Date("2026-03-13T00:38:25.001933Z"),
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
              createdAt: new Date("2026-03-13T00:38:25.001897Z"),
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      logStreamId: "00000000-0000-0000-0000-000000000000",
      sessionId: "00000000-0000-0000-0000-000000000000",
      traces: [
        {
          input: "who is a smart LLM?",
          output: "I am!",
          createdAt: new Date("2026-03-13T00:38:25.001933Z"),
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
              createdAt: new Date("2026-03-13T00:38:25.001897Z"),
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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

**Promise\<[models.ExtendedTraceRecordWithChildren](../../models/extendedtracerecordwithchildren.md)\>**

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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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

## queryTracesProjectsProjectIdTracesSearchPost

Query Traces

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_traces_projects__project_id__traces_search_post" method="post" path="/projects/{project_id}/traces/search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.queryTracesProjectsProjectIdTracesSearchPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
          createdAt: new Date("2026-03-13T00:38:25.022038Z"),
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
              createdAt: new Date("2026-03-13T00:38:25.008070Z"),
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
          createdAt: new Date("2026-03-13T00:38:25.022038Z"),
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
              createdAt: new Date("2026-03-13T00:38:25.008070Z"),
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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

## createSessionProjectsProjectIdSessionsPost

Create Session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_session_projects__project_id__sessions_post" method="post" path="/projects/{project_id}/sessions" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.createSessionProjectsProjectIdSessionsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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

## sessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost

Sessions Available Columns

### Example Usage

<!-- UsageSnippet language="typescript" operationID="sessions_available_columns_projects__project_id__sessions_available_columns_post" method="post" path="/projects/{project_id}/sessions/available_columns" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.sessionsAvailableColumnsProjectsProjectIdSessionsAvailableColumnsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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

## getAggregatedTraceViewProjectsProjectIdTracesAggregatedPost

Get Aggregated Trace View

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_aggregated_trace_view_projects__project_id__traces_aggregated_post" method="post" path="/projects/{project_id}/traces/aggregated" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.getAggregatedTraceViewProjectsProjectIdTracesAggregatedPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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

## exportRecordsProjectsProjectIdExportRecordsPost

Export Records

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_records_projects__project_id__export_records_post" method="post" path="/projects/{project_id}/export_records" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.exportRecordsProjectsProjectIdExportRecordsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
      columnIds: [
        "input",
        "output",
        "created_at",
      ],
      exportFormat: "jsonl",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
      columnIds: [
        "input",
        "output",
        "created_at",
      ],
      exportFormat: "jsonl",
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

## recomputeMetricsProjectsProjectIdRecomputeMetricsPost

Recompute Metrics

### Example Usage

<!-- UsageSnippet language="typescript" operationID="recompute_metrics_projects__project_id__recompute_metrics_post" method="post" path="/projects/{project_id}/recompute-metrics" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.recomputeMetricsProjectsProjectIdRecomputeMetricsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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

## deleteTracesProjectsProjectIdTracesDeletePost

Delete all trace records that match the provided filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_traces_projects__project_id__traces_delete_post" method="post" path="/projects/{project_id}/traces/delete" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.trace.deleteTracesProjectsProjectIdTracesDeletePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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