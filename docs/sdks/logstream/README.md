# LogStream

## Overview

### Available Operations

* [createLogStreamProjectsProjectIdLogStreamsPost](#createlogstreamprojectsprojectidlogstreamspost) - Create Log Stream
* [~~listLogStreamsProjectsProjectIdLogStreamsGet~~](#listlogstreamsprojectsprojectidlogstreamsget) - List Log Streams :warning: **Deprecated**
* [listLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet](#listlogstreamspaginatedprojectsprojectidlogstreamspaginatedget) - List Log Streams Paginated
* [searchLogStreamsProjectsProjectIdLogStreamsSearchPost](#searchlogstreamsprojectsprojectidlogstreamssearchpost) - Search Log Streams
* [getLogStreamProjectsProjectIdLogStreamsLogStreamIdGet](#getlogstreamprojectsprojectidlogstreamslogstreamidget) - Get Log Stream
* [updateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut](#updatelogstreamprojectsprojectidlogstreamslogstreamidput) - Update Log Stream
* [deleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete](#deletelogstreamprojectsprojectidlogstreamslogstreamiddelete) - Delete Log Stream
* [updateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch](#updatemetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingspatch) - Update Metric Settings
* [getMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet](#getmetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingsget) - Get Metric Settings

## createLogStreamProjectsProjectIdLogStreamsPost

Create a new log stream for a project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_log_stream_projects__project_id__log_streams_post" method="post" path="/projects/{project_id}/log_streams" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.createLogStreamProjectsProjectIdLogStreamsPost({
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
import { logStreamCreateLogStreamProjectsProjectIdLogStreamsPost } from "galileo-generated/funcs/logStreamCreateLogStreamProjectsProjectIdLogStreamsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamCreateLogStreamProjectsProjectIdLogStreamsPost(galileoGenerated, {
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
    console.log("logStreamCreateLogStreamProjectsProjectIdLogStreamsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLogStreamProjectsProjectIdLogStreamsPostRequest](../../models/operations/createlogstreamprojectsprojectidlogstreamspostrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateLogStreamProjectsProjectIdLogStreamsPostSecurity](../../models/operations/createlogstreamprojectsprojectidlogstreamspostsecurity.md)                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogStreamResponse](../../models/logstreamresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~listLogStreamsProjectsProjectIdLogStreamsGet~~

Retrieve all log streams for a project.

DEPRECATED in favor of `list_log_streams_paginated`.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_log_streams_projects__project_id__log_streams_get" method="get" path="/projects/{project_id}/log_streams" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.listLogStreamsProjectsProjectIdLogStreamsGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
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
import { logStreamListLogStreamsProjectsProjectIdLogStreamsGet } from "galileo-generated/funcs/logStreamListLogStreamsProjectsProjectIdLogStreamsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamListLogStreamsProjectsProjectIdLogStreamsGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logStreamListLogStreamsProjectsProjectIdLogStreamsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLogStreamsProjectsProjectIdLogStreamsGetRequest](../../models/operations/listlogstreamsprojectsprojectidlogstreamsgetrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListLogStreamsProjectsProjectIdLogStreamsGetSecurity](../../models/operations/listlogstreamsprojectsprojectidlogstreamsgetsecurity.md)                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogStreamResponse[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet

Retrieve all log streams for a project paginated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_log_streams_paginated_projects__project_id__log_streams_paginated_get" method="get" path="/projects/{project_id}/log_streams/paginated" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.listLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
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
import { logStreamListLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet } from "galileo-generated/funcs/logStreamListLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamListLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logStreamListLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.ListLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGetRequest](../../models/operations/listlogstreamspaginatedprojectsprojectidlogstreamspaginatedgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.ListLogStreamsPaginatedProjectsProjectIdLogStreamsPaginatedGetSecurity](../../models/operations/listlogstreamspaginatedprojectsprojectidlogstreamspaginatedgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.ListLogStreamResponse](../../models/listlogstreamresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## searchLogStreamsProjectsProjectIdLogStreamsSearchPost

Search log streams for a project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search_log_streams_projects__project_id__log_streams_search_post" method="post" path="/projects/{project_id}/log_streams/search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.searchLogStreamsProjectsProjectIdLogStreamsSearchPost({
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
import { logStreamSearchLogStreamsProjectsProjectIdLogStreamsSearchPost } from "galileo-generated/funcs/logStreamSearchLogStreamsProjectsProjectIdLogStreamsSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamSearchLogStreamsProjectsProjectIdLogStreamsSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logStreamSearchLogStreamsProjectsProjectIdLogStreamsSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchLogStreamsProjectsProjectIdLogStreamsSearchPostRequest](../../models/operations/searchlogstreamsprojectsprojectidlogstreamssearchpostrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SearchLogStreamsProjectsProjectIdLogStreamsSearchPostSecurity](../../models/operations/searchlogstreamsprojectsprojectidlogstreamssearchpostsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListLogStreamResponse](../../models/listlogstreamresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getLogStreamProjectsProjectIdLogStreamsLogStreamIdGet

Retrieve a specific log stream.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_log_stream_projects__project_id__log_streams__log_stream_id__get" method="get" path="/projects/{project_id}/log_streams/{log_stream_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.getLogStreamProjectsProjectIdLogStreamsLogStreamIdGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
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
import { logStreamGetLogStreamProjectsProjectIdLogStreamsLogStreamIdGet } from "galileo-generated/funcs/logStreamGetLogStreamProjectsProjectIdLogStreamsLogStreamIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamGetLogStreamProjectsProjectIdLogStreamsLogStreamIdGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logStreamGetLogStreamProjectsProjectIdLogStreamsLogStreamIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLogStreamProjectsProjectIdLogStreamsLogStreamIdGetRequest](../../models/operations/getlogstreamprojectsprojectidlogstreamslogstreamidgetrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetLogStreamProjectsProjectIdLogStreamsLogStreamIdGetSecurity](../../models/operations/getlogstreamprojectsprojectidlogstreamslogstreamidgetsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogStreamResponse](../../models/logstreamresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut

Update a specific log stream.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_log_stream_projects__project_id__log_streams__log_stream_id__put" method="put" path="/projects/{project_id}/log_streams/{log_stream_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.updateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
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
import { logStreamUpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut } from "galileo-generated/funcs/logStreamUpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamUpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
    projectId: "<value>",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logStreamUpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPutRequest](../../models/operations/updatelogstreamprojectsprojectidlogstreamslogstreamidputrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateLogStreamProjectsProjectIdLogStreamsLogStreamIdPutSecurity](../../models/operations/updatelogstreamprojectsprojectidlogstreamslogstreamidputsecurity.md)     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.LogStreamResponse](../../models/logstreamresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete

Delete a specific log stream.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_log_stream_projects__project_id__log_streams__log_stream_id__delete" method="delete" path="/projects/{project_id}/log_streams/{log_stream_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  await galileoGenerated.logStream.deleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
    projectId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { logStreamDeleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete } from "galileo-generated/funcs/logStreamDeleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamDeleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("logStreamDeleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.DeleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDeleteRequest](../../models/operations/deletelogstreamprojectsprojectidlogstreamslogstreamiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `security`                                                                                                                                                                       | [operations.DeleteLogStreamProjectsProjectIdLogStreamsLogStreamIdDeleteSecurity](../../models/operations/deletelogstreamprojectsprojectidlogstreamslogstreamiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<void\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch

Update Metric Settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_metric_settings_projects__project_id__log_streams__log_stream_id__metric_settings_patch" method="patch" path="/projects/{project_id}/log_streams/{log_stream_id}/metric_settings" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.updateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    logStreamId: "<value>",
    body: {
      scorers: [
        {
          id: "<value>",
          filters: [
            {
              name: "modality",
              operator: "one_of",
              value: "ENUM_VALUE",
            },
          ],
          scorerType: "llm",
        },
      ],
      segmentFilters: [
        {
          filter: {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
          },
          sampleRate: 4082.68,
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
import {
  logStreamUpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch,
} from "galileo-generated/funcs/logStreamUpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamUpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    logStreamId: "<value>",
    body: {
      scorers: [
        {
          id: "<value>",
          filters: [
            {
              name: "modality",
              operator: "one_of",
              value: "ENUM_VALUE",
            },
          ],
          scorerType: "llm",
        },
      ],
      segmentFilters: [
        {
          filter: {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
          },
          sampleRate: 4082.68,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logStreamUpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.UpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatchRequest](../../models/operations/updatemetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingspatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `security`                                                                                                                                                                                                           | [operations.UpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatchSecurity](../../models/operations/updatemetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingspatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                                                    |
| `options`                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                       |
| `options.retries`                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                     |

### Response

**Promise\<[models.MetricSettingsResponse](../../models/metricsettingsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet

Get Metric Settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_metric_settings_projects__project_id__log_streams__log_stream_id__metric_settings_get" method="get" path="/projects/{project_id}/log_streams/{log_stream_id}/metric_settings" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.logStream.getMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
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
import {
  logStreamGetMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet,
} from "galileo-generated/funcs/logStreamGetMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await logStreamGetMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    logStreamId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("logStreamGetMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.GetMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGetRequest](../../models/operations/getmetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `security`                                                                                                                                                                                                 | [operations.GetMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsGetSecurity](../../models/operations/getmetricsettingsprojectsprojectidlogstreamslogstreamidmetricsettingsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                          |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[models.MetricSettingsResponse](../../models/metricsettingsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |