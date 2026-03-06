# ExperimentTags

## Overview

### Available Operations

* [getExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet](#getexperimenttagsprojectsprojectidexperimentsexperimentidtagsget) - Get Experiment Tags
* [setTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost](#settagforexperimentprojectsprojectidexperimentsexperimentidtagspost) - Set Tag For Experiment
* [getExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet](#getexperimenttagprojectsprojectidexperimentsexperimentidtagstagidget) - Get Experiment Tag
* [updateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut](#updatetagforexperimentprojectsprojectidexperimentsexperimentidtagstagidput) - Update Tag For Experiment
* [deleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete](#deleteexperimenttagprojectsprojectidexperimentsexperimentidtagstagiddelete) - Delete Experiment Tag

## getExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet

Gets tags for a given project_id/experiment_id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_experiment_tags_projects__project_id__experiments__experiment_id__tags_get" method="get" path="/projects/{project_id}/experiments/{experiment_id}/tags" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experimentTags.getExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { experimentTagsGetExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet } from "galileo-generated/funcs/experimentTagsGetExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentTagsGetExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentTagsGetExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.GetExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGetRequest](../../models/operations/getexperimenttagsprojectsprojectidexperimentsexperimentidtagsgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.GetExperimentTagsProjectsProjectIdExperimentsExperimentIdTagsGetSecurity](../../models/operations/getexperimenttagsprojectsprojectidexperimentsexperimentidtagsgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.RunTagDB[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## setTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost

Sets a tag for an experiment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_tag_for_experiment_projects__project_id__experiments__experiment_id__tags_post" method="post" path="/projects/{project_id}/experiments/{experiment_id}/tags" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experimentTags.setTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    body: {
      key: "<key>",
      value: "<value>",
      tagType: "<value>",
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
  experimentTagsSetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost,
} from "galileo-generated/funcs/experimentTagsSetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentTagsSetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    body: {
      key: "<key>",
      value: "<value>",
      tagType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentTagsSetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.SetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPostRequest](../../models/operations/settagforexperimentprojectsprojectidexperimentsexperimentidtagspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `security`                                                                                                                                                                                       | [operations.SetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPostSecurity](../../models/operations/settagforexperimentprojectsprojectidexperimentsexperimentidtagspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[models.RunTagDB](../../models/runtagdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet

Gets a tag for a given project_id/experiment_id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_experiment_tag_projects__project_id__experiments__experiment_id__tags__tag_id__get" method="get" path="/projects/{project_id}/experiments/{experiment_id}/tags/{tag_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experimentTags.getExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    tagId: "<value>",
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
  experimentTagsGetExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet,
} from "galileo-generated/funcs/experimentTagsGetExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentTagsGetExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    tagId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentTagsGetExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.GetExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGetRequest](../../models/operations/getexperimenttagprojectsprojectidexperimentsexperimentidtagstagidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `security`                                                                                                                                                                                         | [operations.GetExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdGetSecurity](../../models/operations/getexperimenttagprojectsprojectidexperimentsexperimentidtagstagidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[models.RunTagDB](../../models/runtagdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut

Sets or updates a tag for an experiment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_tag_for_experiment_projects__project_id__experiments__experiment_id__tags__tag_id__put" method="put" path="/projects/{project_id}/experiments/{experiment_id}/tags/{tag_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experimentTags.updateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    tagId: "<value>",
    body: {
      key: "<key>",
      value: "<value>",
      tagType: "<value>",
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
  experimentTagsUpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut,
} from "galileo-generated/funcs/experimentTagsUpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentTagsUpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    tagId: "<value>",
    body: {
      key: "<key>",
      value: "<value>",
      tagType: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentTagsUpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.UpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPutRequest](../../models/operations/updatetagforexperimentprojectsprojectidexperimentsexperimentidtagstagidputrequest.md)   | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `security`                                                                                                                                                                                                     | [operations.UpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPutSecurity](../../models/operations/updatetagforexperimentprojectsprojectidexperimentsexperimentidtagstagidputsecurity.md) | :heavy_check_mark:                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                              |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[models.RunTagDB](../../models/runtagdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete

Delete Experiment Tag

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_experiment_tag_projects__project_id__experiments__experiment_id__tags__tag_id__delete" method="delete" path="/projects/{project_id}/experiments/{experiment_id}/tags/{tag_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.experimentTags.deleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    tagId: "<value>",
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
  experimentTagsDeleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete,
} from "galileo-generated/funcs/experimentTagsDeleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await experimentTagsDeleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    experimentId: "<value>",
    tagId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("experimentTagsDeleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.DeleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDeleteRequest](../../models/operations/deleteexperimenttagprojectsprojectidexperimentsexperimentidtagstagiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `security`                                                                                                                                                                                                     | [operations.DeleteExperimentTagProjectsProjectIdExperimentsExperimentIdTagsTagIdDeleteSecurity](../../models/operations/deleteexperimenttagprojectsprojectidexperimentsexperimentidtagstagiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                              |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[models.DeleteRunResponse](../../models/deleterunresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |