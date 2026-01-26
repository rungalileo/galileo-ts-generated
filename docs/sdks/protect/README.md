# Protect

## Overview

### Available Operations

* [invokeProtectInvokePost](#invokeprotectinvokepost) - Invoke
* [createStageProjectsProjectIdStagesPost](#createstageprojectsprojectidstagespost) - Create Stage
* [getStageProjectsProjectIdStagesGet](#getstageprojectsprojectidstagesget) - Get Stage
* [updateStageProjectsProjectIdStagesStageIdPost](#updatestageprojectsprojectidstagesstageidpost) - Update Stage
* [pauseStageProjectsProjectIdStagesStageIdPut](#pausestageprojectsprojectidstagesstageidput) - Pause Stage

## invokeProtectInvokePost

Invoke

### Example Usage

<!-- UsageSnippet language="typescript" operationID="invoke_protect_invoke_post" method="post" path="/protect/invoke" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.protect.invokeProtectInvokePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    payload: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { protectInvokeProtectInvokePost } from "galileo-generated/funcs/protectInvokeProtectInvokePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await protectInvokeProtectInvokePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    payload: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("protectInvokeProtectInvokePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ProtectRequest](../../models/protectrequest.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.InvokeProtectInvokePostSecurity](../../models/operations/invokeprotectinvokepostsecurity.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ResponseInvokeProtectInvokePost](../../models/operations/responseinvokeprotectinvokepost.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createStageProjectsProjectIdStagesPost

Create Stage

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_stage_projects__project_id__stages_post" method="post" path="/projects/{project_id}/stages" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.protect.createStageProjectsProjectIdStagesPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      name: "<value>",
      projectId: "<value>",
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
import { protectCreateStageProjectsProjectIdStagesPost } from "galileo-generated/funcs/protectCreateStageProjectsProjectIdStagesPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await protectCreateStageProjectsProjectIdStagesPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      name: "<value>",
      projectId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("protectCreateStageProjectsProjectIdStagesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateStageProjectsProjectIdStagesPostRequest](../../models/operations/createstageprojectsprojectidstagespostrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateStageProjectsProjectIdStagesPostSecurity](../../models/operations/createstageprojectsprojectidstagespostsecurity.md)                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StageDB](../../models/stagedb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getStageProjectsProjectIdStagesGet

Get Stage

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_stage_projects__project_id__stages_get" method="get" path="/projects/{project_id}/stages" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.protect.getStageProjectsProjectIdStagesGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
import { protectGetStageProjectsProjectIdStagesGet } from "galileo-generated/funcs/protectGetStageProjectsProjectIdStagesGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await protectGetStageProjectsProjectIdStagesGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("protectGetStageProjectsProjectIdStagesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetStageProjectsProjectIdStagesGetRequest](../../models/operations/getstageprojectsprojectidstagesgetrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetStageProjectsProjectIdStagesGetSecurity](../../models/operations/getstageprojectsprojectidstagesgetsecurity.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StageDB](../../models/stagedb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateStageProjectsProjectIdStagesStageIdPost

Update Stage

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_stage_projects__project_id__stages__stage_id__post" method="post" path="/projects/{project_id}/stages/{stage_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.protect.updateStageProjectsProjectIdStagesStageIdPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    stageId: "<value>",
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
import { protectUpdateStageProjectsProjectIdStagesStageIdPost } from "galileo-generated/funcs/protectUpdateStageProjectsProjectIdStagesStageIdPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await protectUpdateStageProjectsProjectIdStagesStageIdPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    stageId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("protectUpdateStageProjectsProjectIdStagesStageIdPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateStageProjectsProjectIdStagesStageIdPostRequest](../../models/operations/updatestageprojectsprojectidstagesstageidpostrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateStageProjectsProjectIdStagesStageIdPostSecurity](../../models/operations/updatestageprojectsprojectidstagesstageidpostsecurity.md)                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StageDB](../../models/stagedb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## pauseStageProjectsProjectIdStagesStageIdPut

Pause Stage

### Example Usage

<!-- UsageSnippet language="typescript" operationID="pause_stage_projects__project_id__stages__stage_id__put" method="put" path="/projects/{project_id}/stages/{stage_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.protect.pauseStageProjectsProjectIdStagesStageIdPut({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    stageId: "<value>",
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
import { protectPauseStageProjectsProjectIdStagesStageIdPut } from "galileo-generated/funcs/protectPauseStageProjectsProjectIdStagesStageIdPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await protectPauseStageProjectsProjectIdStagesStageIdPut(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    stageId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("protectPauseStageProjectsProjectIdStagesStageIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PauseStageProjectsProjectIdStagesStageIdPutRequest](../../models/operations/pausestageprojectsprojectidstagesstageidputrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PauseStageProjectsProjectIdStagesStageIdPutSecurity](../../models/operations/pausestageprojectsprojectidstagesstageidputsecurity.md)                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.StageDB](../../models/stagedb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |