# CodeMetricGeneration

## Overview

### Available Operations

* [createCodeMetricGenerationCodeMetricGenerationsPost](#createcodemetricgenerationcodemetricgenerationspost) - Create Code Metric Generation
* [getCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGet](#getcodemetricgenerationstatuscodemetricgenerationsgenerationidstatusget) - Get Code Metric Generation Status

## createCodeMetricGenerationCodeMetricGenerationsPost

Generate scorer code from a user message (natural language, existing code, or combination).

Creates a background job that calls an LLM with the code metric generation system prompt.
Returns a generation ID for polling.

**Response:** 202 Accepted with generation ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_code_metric_generation_code_metric_generations_post" method="post" path="/code-metric-generations" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.codeMetricGeneration.createCodeMetricGenerationCodeMetricGenerationsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    userMessage: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { codeMetricGenerationCreateCodeMetricGenerationCodeMetricGenerationsPost } from "galileo-generated/funcs/codeMetricGenerationCreateCodeMetricGenerationCodeMetricGenerationsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await codeMetricGenerationCreateCodeMetricGenerationCodeMetricGenerationsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    userMessage: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("codeMetricGenerationCreateCodeMetricGenerationCodeMetricGenerationsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateCodeMetricGenerationRequest](../../models/createcodemetricgenerationrequest.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateCodeMetricGenerationCodeMetricGenerationsPostSecurity](../../models/operations/createcodemetricgenerationcodemetricgenerationspostsecurity.md)               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateCodeMetricGenerationResponse](../../models/createcodemetricgenerationresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGet

Lightweight endpoint for polling code metric generation status.

Returns status, generated code (if complete), or error message (if failed).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_code_metric_generation_status_code_metric_generations__generation_id__status_get" method="get" path="/code-metric-generations/{generation_id}/status" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.codeMetricGeneration.getCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    generationId: "<value>",
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
  codeMetricGenerationGetCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGet,
} from "galileo-generated/funcs/codeMetricGenerationGetCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await codeMetricGenerationGetCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    generationId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("codeMetricGenerationGetCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.GetCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGetRequest](../../models/operations/getcodemetricgenerationstatuscodemetricgenerationsgenerationidstatusgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `security`                                                                                                                                                                                               | [operations.GetCodeMetricGenerationStatusCodeMetricGenerationsGenerationIdStatusGetSecurity](../../models/operations/getcodemetricgenerationstatuscodemetricgenerationsgenerationidstatusgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[models.CodeMetricGenerationStatusResponse](../../models/codemetricgenerationstatusresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |