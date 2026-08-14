# Experiment

## Overview

### Available Operations

* [~~listExperimentsProjectsProjectIdExperimentsGet~~](#listexperimentsprojectsprojectidexperimentsget) - List Experiments :warning: **Deprecated**
* [createExperimentProjectsProjectIdExperimentsPost](#createexperimentprojectsprojectidexperimentspost) - Create Experiment
* [listExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet](#listexperimentspaginatedprojectsprojectidexperimentspaginatedget) - List Experiments Paginated
* [searchExperimentsProjectsProjectIdExperimentsSearchPost](#searchexperimentsprojectsprojectidexperimentssearchpost) - Search Experiments
* [getExperimentProjectsProjectIdExperimentsExperimentIdGet](#getexperimentprojectsprojectidexperimentsexperimentidget) - Get Experiment
* [updateExperimentProjectsProjectIdExperimentsExperimentIdPut](#updateexperimentprojectsprojectidexperimentsexperimentidput) - Update Experiment
* [deleteExperimentProjectsProjectIdExperimentsExperimentIdDelete](#deleteexperimentprojectsprojectidexperimentsexperimentiddelete) - Delete Experiment
* [experimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost](#experimentsavailablecolumnsprojectsprojectidexperimentsavailablecolumnspost) - Experiments Available Columns
* [getExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost](#getexperimentmetricsprojectsprojectidexperimentsexperimentidmetricspost) - Get Experiment Metrics

## ~~listExperimentsProjectsProjectIdExperimentsGet~~

Retrieve all experiments for a project.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_experiments_projects__project_id__experiments_get" method="get" path="/projects/{project_id}/experiments" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.listExperimentsProjectsProjectIdExperimentsGet({
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
import { experimentListExperimentsProjectsProjectIdExperimentsGet } from "galileo-generated/funcs/experimentListExperimentsProjectsProjectIdExperimentsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentListExperimentsProjectsProjectIdExperimentsGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentListExperimentsProjectsProjectIdExperimentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListExperimentsProjectsProjectIdExperimentsGetRequest](../../models/operations/listexperimentsprojectsprojectidexperimentsgetrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListExperimentsProjectsProjectIdExperimentsGetSecurity](../../models/operations/listexperimentsprojectsprojectidexperimentsgetsecurity.md)                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExperimentResponse[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createExperimentProjectsProjectIdExperimentsPost

Create a new experiment for a project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_experiment_projects__project_id__experiments_post" method="post" path="/projects/{project_id}/experiments" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.createExperimentProjectsProjectIdExperimentsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      name: "<value>",
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
          scorerType: "code",
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
import { experimentCreateExperimentProjectsProjectIdExperimentsPost } from "galileo-generated/funcs/experimentCreateExperimentProjectsProjectIdExperimentsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentCreateExperimentProjectsProjectIdExperimentsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      name: "<value>",
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
          scorerType: "code",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentCreateExperimentProjectsProjectIdExperimentsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateExperimentProjectsProjectIdExperimentsPostRequest](../../models/operations/createexperimentprojectsprojectidexperimentspostrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateExperimentProjectsProjectIdExperimentsPostSecurity](../../models/operations/createexperimentprojectsprojectidexperimentspostsecurity.md)                     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExperimentResponse](../../models/experimentresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet

Retrieve all experiments for a project with pagination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_experiments_paginated_projects__project_id__experiments_paginated_get" method="get" path="/projects/{project_id}/experiments/paginated" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.listExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet({
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
import { experimentListExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet } from "galileo-generated/funcs/experimentListExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentListExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentListExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.ListExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGetRequest](../../models/operations/listexperimentspaginatedprojectsprojectidexperimentspaginatedgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.ListExperimentsPaginatedProjectsProjectIdExperimentsPaginatedGetSecurity](../../models/operations/listexperimentspaginatedprojectsprojectidexperimentspaginatedgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.ListExperimentResponse](../../models/listexperimentresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## searchExperimentsProjectsProjectIdExperimentsSearchPost

Search experiments for a project.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search_experiments_projects__project_id__experiments_search_post" method="post" path="/projects/{project_id}/experiments/search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.searchExperimentsProjectsProjectIdExperimentsSearchPost({
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
import { experimentSearchExperimentsProjectsProjectIdExperimentsSearchPost } from "galileo-generated/funcs/experimentSearchExperimentsProjectsProjectIdExperimentsSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentSearchExperimentsProjectsProjectIdExperimentsSearchPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentSearchExperimentsProjectsProjectIdExperimentsSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchExperimentsProjectsProjectIdExperimentsSearchPostRequest](../../models/operations/searchexperimentsprojectsprojectidexperimentssearchpostrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SearchExperimentsProjectsProjectIdExperimentsSearchPostSecurity](../../models/operations/searchexperimentsprojectsprojectidexperimentssearchpostsecurity.md)       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListExperimentResponse](../../models/listexperimentresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getExperimentProjectsProjectIdExperimentsExperimentIdGet

Retrieve a specific experiment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_experiment_projects__project_id__experiments__experiment_id__get" method="get" path="/projects/{project_id}/experiments/{experiment_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.getExperimentProjectsProjectIdExperimentsExperimentIdGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    experimentId: "<value>",
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
import { experimentGetExperimentProjectsProjectIdExperimentsExperimentIdGet } from "galileo-generated/funcs/experimentGetExperimentProjectsProjectIdExperimentsExperimentIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentGetExperimentProjectsProjectIdExperimentsExperimentIdGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    experimentId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentGetExperimentProjectsProjectIdExperimentsExperimentIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExperimentProjectsProjectIdExperimentsExperimentIdGetRequest](../../models/operations/getexperimentprojectsprojectidexperimentsexperimentidgetrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetExperimentProjectsProjectIdExperimentsExperimentIdGetSecurity](../../models/operations/getexperimentprojectsprojectidexperimentsexperimentidgetsecurity.md)     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExperimentResponse](../../models/experimentresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateExperimentProjectsProjectIdExperimentsExperimentIdPut

Update a specific experiment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_experiment_projects__project_id__experiments__experiment_id__put" method="put" path="/projects/{project_id}/experiments/{experiment_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.updateExperimentProjectsProjectIdExperimentsExperimentIdPut({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    experimentId: "<value>",
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
import { experimentUpdateExperimentProjectsProjectIdExperimentsExperimentIdPut } from "galileo-generated/funcs/experimentUpdateExperimentProjectsProjectIdExperimentsExperimentIdPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentUpdateExperimentProjectsProjectIdExperimentsExperimentIdPut(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    experimentId: "<value>",
    projectId: "<value>",
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentUpdateExperimentProjectsProjectIdExperimentsExperimentIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.UpdateExperimentProjectsProjectIdExperimentsExperimentIdPutRequest](../../models/operations/updateexperimentprojectsprojectidexperimentsexperimentidputrequest.md)   | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `security`                                                                                                                                                                       | [operations.UpdateExperimentProjectsProjectIdExperimentsExperimentIdPutSecurity](../../models/operations/updateexperimentprojectsprojectidexperimentsexperimentidputsecurity.md) | :heavy_check_mark:                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[models.ExperimentResponse](../../models/experimentresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteExperimentProjectsProjectIdExperimentsExperimentIdDelete

Delete a specific experiment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_experiment_projects__project_id__experiments__experiment_id__delete" method="delete" path="/projects/{project_id}/experiments/{experiment_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  await galileoGenerated.experiment.deleteExperimentProjectsProjectIdExperimentsExperimentIdDelete({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    experimentId: "<value>",
    projectId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { experimentDeleteExperimentProjectsProjectIdExperimentsExperimentIdDelete } from "galileo-generated/funcs/experimentDeleteExperimentProjectsProjectIdExperimentsExperimentIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentDeleteExperimentProjectsProjectIdExperimentsExperimentIdDelete(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    experimentId: "<value>",
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("experimentDeleteExperimentProjectsProjectIdExperimentsExperimentIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.DeleteExperimentProjectsProjectIdExperimentsExperimentIdDeleteRequest](../../models/operations/deleteexperimentprojectsprojectidexperimentsexperimentiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.DeleteExperimentProjectsProjectIdExperimentsExperimentIdDeleteSecurity](../../models/operations/deleteexperimentprojectsprojectidexperimentsexperimentiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<void\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## experimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost

Procures the column information for experiments.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="experiments_available_columns_projects__project_id__experiments_available_columns_post" method="post" path="/projects/{project_id}/experiments/available_columns" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.experimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost({
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
import {
  experimentExperimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost,
} from "galileo-generated/funcs/experimentExperimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentExperimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentExperimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.ExperimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPostRequest](../../models/operations/experimentsavailablecolumnsprojectsprojectidexperimentsavailablecolumnspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `security`                                                                                                                                                                                                       | [operations.ExperimentsAvailableColumnsProjectsProjectIdExperimentsAvailableColumnsPostSecurity](../../models/operations/experimentsavailablecolumnsprojectsprojectidexperimentsavailablecolumnspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                                |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[models.ExperimentsAvailableColumnsResponse](../../models/experimentsavailablecolumnsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost

Retrieve metrics for a specific experiment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_experiment_metrics_projects__project_id__experiments__experiment_id__metrics_post" method="post" path="/projects/{project_id}/experiments/{experiment_id}/metrics" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experiment.getExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    body: {
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
import {
  experimentGetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost,
} from "galileo-generated/funcs/experimentGetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentGetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    body: {
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
    console.log("experimentGetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.GetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPostRequest](../../models/operations/getexperimentmetricsprojectsprojectidexperimentsexperimentidmetricspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `security`                                                                                                                                                                                               | [operations.GetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPostSecurity](../../models/operations/getexperimentmetricsprojectsprojectidexperimentsexperimentidmetricspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[models.ExperimentMetricsResponse](../../models/experimentmetricsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |