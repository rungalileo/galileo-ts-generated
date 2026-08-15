# AnnotationQueue

## Overview

### Available Operations

* [createAnnotationQueueAnnotationQueuesPost](#createannotationqueueannotationqueuespost) - Create Annotation Queue
* [deleteAnnotationQueueAnnotationQueuesQueueIdDelete](#deleteannotationqueueannotationqueuesqueueiddelete) - Delete Annotation Queue
* [getAnnotationQueueAnnotationQueuesQueueIdGet](#getannotationqueueannotationqueuesqueueidget) - Get Annotation Queue
* [updateAnnotationQueueAnnotationQueuesQueueIdPatch](#updateannotationqueueannotationqueuesqueueidpatch) - Update Annotation Queue
* [shareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPost](#shareannotationqueuewithusersannotationqueuesqueueiduserspost) - Share Annotation Queue With Users
* [listAnnotationQueueUsersAnnotationQueuesQueueIdUsersGet](#listannotationqueueusersannotationqueuesqueueidusersget) - List Annotation Queue Users
* [removeAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDelete](#removeannotationqueueuserannotationqueuesqueueidusersuseriddelete) - Remove Annotation Queue User
* [updateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatch](#updateannotationqueueuserroleannotationqueuesqueueidusersuseridpatch) - Update Annotation Queue User Role
* [queueDetailsAnnotationQueuesQueueIdDetailsGet](#queuedetailsannotationqueuesqueueiddetailsget) - Queue Details
* [countAnnotationQueuesAnnotationQueuesCountPost](#countannotationqueuesannotationqueuescountpost) - Count Annotation Queues
* [queryAnnotationQueuesAnnotationQueuesQueryPost](#queryannotationqueuesannotationqueuesquerypost) - Query Annotation Queues
* [reorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPost](#reorderqueuetemplatesannotationqueuesqueueidtemplatesreorderpost) - Reorder Queue Templates
* [getQueueTemplatesAnnotationQueuesQueueIdTemplatesGet](#getqueuetemplatesannotationqueuesqueueidtemplatesget) - Get Queue Templates
* [createQueueTemplateAnnotationQueuesQueueIdTemplatesPost](#createqueuetemplateannotationqueuesqueueidtemplatespost) - Create Queue Template
* [updateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatch](#updatequeuetemplateannotationqueuesqueueidtemplatestemplateidpatch) - Update Queue Template
* [deleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDelete](#deletequeuetemplateannotationqueuesqueueidtemplatestemplateiddelete) - Delete Queue Template

## createAnnotationQueueAnnotationQueuesPost

Create an annotation queue at the organization level.

The creator will automatically be granted the 'owner' role.
Optionally accepts a list of annotator emails. Users that don't exist in the organization will be invited.
Optionally copies templates from an existing queue if copy_templates_from_queue_id is provided.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_annotation_queue_annotation_queues_post" method="post" path="/annotation_queues" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.createAnnotationQueueAnnotationQueuesPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    name: {
      value: "<value>",
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
import { annotationQueueCreateAnnotationQueueAnnotationQueuesPost } from "galileo-generated/funcs/annotationQueueCreateAnnotationQueueAnnotationQueuesPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueCreateAnnotationQueueAnnotationQueuesPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    name: {
      value: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueCreateAnnotationQueueAnnotationQueuesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateAnnotationQueueRequest](../../models/createannotationqueuerequest.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateAnnotationQueueAnnotationQueuesPostSecurity](../../models/operations/createannotationqueueannotationqueuespostsecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnnotationQueueResponse](../../models/annotationqueueresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteAnnotationQueueAnnotationQueuesQueueIdDelete

Delete an annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_annotation_queue_annotation_queues__queue_id__delete" method="delete" path="/annotation_queues/{queue_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.deleteAnnotationQueueAnnotationQueuesQueueIdDelete({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueDeleteAnnotationQueueAnnotationQueuesQueueIdDelete } from "galileo-generated/funcs/annotationQueueDeleteAnnotationQueueAnnotationQueuesQueueIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueDeleteAnnotationQueueAnnotationQueuesQueueIdDelete(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueDeleteAnnotationQueueAnnotationQueuesQueueIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAnnotationQueueAnnotationQueuesQueueIdDeleteRequest](../../models/operations/deleteannotationqueueannotationqueuesqueueiddeleterequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteAnnotationQueueAnnotationQueuesQueueIdDeleteSecurity](../../models/operations/deleteannotationqueueannotationqueuesqueueiddeletesecurity.md)                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

## getAnnotationQueueAnnotationQueuesQueueIdGet

Get an annotation queue by ID with templates and counts.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_annotation_queue_annotation_queues__queue_id__get" method="get" path="/annotation_queues/{queue_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.getAnnotationQueueAnnotationQueuesQueueIdGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueGetAnnotationQueueAnnotationQueuesQueueIdGet } from "galileo-generated/funcs/annotationQueueGetAnnotationQueueAnnotationQueuesQueueIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueGetAnnotationQueueAnnotationQueuesQueueIdGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueGetAnnotationQueueAnnotationQueuesQueueIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAnnotationQueueAnnotationQueuesQueueIdGetRequest](../../models/operations/getannotationqueueannotationqueuesqueueidgetrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetAnnotationQueueAnnotationQueuesQueueIdGetSecurity](../../models/operations/getannotationqueueannotationqueuesqueueidgetsecurity.md)                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnnotationQueueResponse](../../models/annotationqueueresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateAnnotationQueueAnnotationQueuesQueueIdPatch

Update an annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_annotation_queue_annotation_queues__queue_id__patch" method="patch" path="/annotation_queues/{queue_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.updateAnnotationQueueAnnotationQueuesQueueIdPatch({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
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
import { annotationQueueUpdateAnnotationQueueAnnotationQueuesQueueIdPatch } from "galileo-generated/funcs/annotationQueueUpdateAnnotationQueueAnnotationQueuesQueueIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueUpdateAnnotationQueueAnnotationQueuesQueueIdPatch(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueUpdateAnnotationQueueAnnotationQueuesQueueIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAnnotationQueueAnnotationQueuesQueueIdPatchRequest](../../models/operations/updateannotationqueueannotationqueuesqueueidpatchrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateAnnotationQueueAnnotationQueuesQueueIdPatchSecurity](../../models/operations/updateannotationqueueannotationqueuesqueueidpatchsecurity.md)                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnnotationQueueResponse](../../models/annotationqueueresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## shareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPost

Share an annotation queue with users by granting them specific roles.

Users can be specified by user_id or email. If using email and the user doesn't exist
in the organization, they will be invited automatically with the 'user' role.

Roles: owner, annotator

### Example Usage

<!-- UsageSnippet language="typescript" operationID="share_annotation_queue_with_users_annotation_queues__queue_id__users_post" method="post" path="/annotation_queues/{queue_id}/users" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.shareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueShareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPost } from "galileo-generated/funcs/annotationQueueShareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueShareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueShareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.ShareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPostRequest](../../models/operations/shareannotationqueuewithusersannotationqueuesqueueiduserspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `security`                                                                                                                                                                           | [operations.ShareAnnotationQueueWithUsersAnnotationQueuesQueueIdUsersPostSecurity](../../models/operations/shareannotationqueuewithusersannotationqueuesqueueiduserspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                    |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.UserAnnotationQueueCollaborator[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listAnnotationQueueUsersAnnotationQueuesQueueIdUsersGet

List users who have access to an annotation queue with pagination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_annotation_queue_users_annotation_queues__queue_id__users_get" method="get" path="/annotation_queues/{queue_id}/users" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.listAnnotationQueueUsersAnnotationQueuesQueueIdUsersGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueListAnnotationQueueUsersAnnotationQueuesQueueIdUsersGet } from "galileo-generated/funcs/annotationQueueListAnnotationQueueUsersAnnotationQueuesQueueIdUsersGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueListAnnotationQueueUsersAnnotationQueuesQueueIdUsersGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueListAnnotationQueueUsersAnnotationQueuesQueueIdUsersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAnnotationQueueUsersAnnotationQueuesQueueIdUsersGetRequest](../../models/operations/listannotationqueueusersannotationqueuesqueueidusersgetrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListAnnotationQueueUsersAnnotationQueuesQueueIdUsersGetSecurity](../../models/operations/listannotationqueueusersannotationqueuesqueueidusersgetsecurity.md)       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListAnnotationQueueCollaboratorsResponse](../../models/listannotationqueuecollaboratorsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## removeAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDelete

Remove a user's access to an annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_annotation_queue_user_annotation_queues__queue_id__users__user_id__delete" method="delete" path="/annotation_queues/{queue_id}/users/{user_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.removeAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDelete({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    userId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueRemoveAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDelete } from "galileo-generated/funcs/annotationQueueRemoveAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRemoveAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDelete(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    userId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRemoveAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.RemoveAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDeleteRequest](../../models/operations/removeannotationqueueuserannotationqueuesqueueidusersuseriddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.RemoveAnnotationQueueUserAnnotationQueuesQueueIdUsersUserIdDeleteSecurity](../../models/operations/removeannotationqueueuserannotationqueuesqueueidusersuseriddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatch

Update a user's role for an annotation queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_annotation_queue_user_role_annotation_queues__queue_id__users__user_id__patch" method="patch" path="/annotation_queues/{queue_id}/users/{user_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.updateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatch({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    userId: "<value>",
    body: {
      role: "annotator",
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
  annotationQueueUpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatch,
} from "galileo-generated/funcs/annotationQueueUpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueUpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatch(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    userId: "<value>",
    body: {
      role: "annotator",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueUpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.UpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatchRequest](../../models/operations/updateannotationqueueuserroleannotationqueuesqueueidusersuseridpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `security`                                                                                                                                                                                         | [operations.UpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatchSecurity](../../models/operations/updateannotationqueueuserroleannotationqueuesqueueidusersuseridpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[models.UserAnnotationQueueCollaborator](../../models/userannotationqueuecollaborator.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queueDetailsAnnotationQueuesQueueIdDetailsGet

Queue Details

### Example Usage

<!-- UsageSnippet language="typescript" operationID="queue_details_annotation_queues__queue_id__details_get" method="get" path="/annotation_queues/{queue_id}/details" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.queueDetailsAnnotationQueuesQueueIdDetailsGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueQueueDetailsAnnotationQueuesQueueIdDetailsGet } from "galileo-generated/funcs/annotationQueueQueueDetailsAnnotationQueuesQueueIdDetailsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueQueueDetailsAnnotationQueuesQueueIdDetailsGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueQueueDetailsAnnotationQueuesQueueIdDetailsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueueDetailsAnnotationQueuesQueueIdDetailsGetRequest](../../models/operations/queuedetailsannotationqueuesqueueiddetailsgetrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueueDetailsAnnotationQueuesQueueIdDetailsGetSecurity](../../models/operations/queuedetailsannotationqueuesqueueiddetailsgetsecurity.md)                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnnotationQueueDetailsResponse](../../models/annotationqueuedetailsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## countAnnotationQueuesAnnotationQueuesCountPost

Count annotation queues in the user's organization with filtering.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="count_annotation_queues_annotation_queues_count_post" method="post" path="/annotation_queues/count" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.countAnnotationQueuesAnnotationQueuesCountPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueCountAnnotationQueuesAnnotationQueuesCountPost } from "galileo-generated/funcs/annotationQueueCountAnnotationQueuesAnnotationQueuesCountPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueCountAnnotationQueuesAnnotationQueuesCountPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueCountAnnotationQueuesAnnotationQueuesCountPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ListAnnotationQueueParams](../../models/listannotationqueueparams.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CountAnnotationQueuesAnnotationQueuesCountPostSecurity](../../models/operations/countannotationqueuesannotationqueuescountpostsecurity.md)                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnnotationQueueCountResponse](../../models/annotationqueuecountresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryAnnotationQueuesAnnotationQueuesQueryPost

Query annotation queues in the user's organization with filtering and sorting.

Response includes num_templates for each queue to support copy selection UI.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_annotation_queues_annotation_queues_query_post" method="post" path="/annotation_queues/query" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.queryAnnotationQueuesAnnotationQueuesQueryPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueQueryAnnotationQueuesAnnotationQueuesQueryPost } from "galileo-generated/funcs/annotationQueueQueryAnnotationQueuesAnnotationQueuesQueryPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueQueryAnnotationQueuesAnnotationQueuesQueryPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueQueryAnnotationQueuesAnnotationQueuesQueryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryAnnotationQueuesAnnotationQueuesQueryPostRequest](../../models/operations/queryannotationqueuesannotationqueuesquerypostrequest.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryAnnotationQueuesAnnotationQueuesQueryPostSecurity](../../models/operations/queryannotationqueuesannotationqueuesquerypostsecurity.md)                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListAnnotationQueueResponse](../../models/listannotationqueueresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## reorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPost

Reorder templates within an annotation queue.

The ordering must include all and only the template IDs currently in the queue.
Templates will be assigned positions 1, 2, 3... based on their order in the list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="reorder_queue_templates_annotation_queues__queue_id__templates_reorder_post" method="post" path="/annotation_queues/{queue_id}/templates/reorder" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.reorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      ordering: [
        "<value 1>",
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
import { annotationQueueReorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPost } from "galileo-generated/funcs/annotationQueueReorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueReorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      ordering: [
        "<value 1>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueReorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.ReorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPostRequest](../../models/operations/reorderqueuetemplatesannotationqueuesqueueidtemplatesreorderpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.ReorderQueueTemplatesAnnotationQueuesQueueIdTemplatesReorderPostSecurity](../../models/operations/reorderqueuetemplatesannotationqueuesqueueidtemplatesreorderpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getQueueTemplatesAnnotationQueuesQueueIdTemplatesGet

Get all templates for an annotation queue.

Templates are returned ordered by position (ascending).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_queue_templates_annotation_queues__queue_id__templates_get" method="get" path="/annotation_queues/{queue_id}/templates" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.getQueueTemplatesAnnotationQueuesQueueIdTemplatesGet({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { annotationQueueGetQueueTemplatesAnnotationQueuesQueueIdTemplatesGet } from "galileo-generated/funcs/annotationQueueGetQueueTemplatesAnnotationQueuesQueueIdTemplatesGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueGetQueueTemplatesAnnotationQueuesQueueIdTemplatesGet(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueGetQueueTemplatesAnnotationQueuesQueueIdTemplatesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetQueueTemplatesAnnotationQueuesQueueIdTemplatesGetRequest](../../models/operations/getqueuetemplatesannotationqueuesqueueidtemplatesgetrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetQueueTemplatesAnnotationQueuesQueueIdTemplatesGetSecurity](../../models/operations/getqueuetemplatesannotationqueuesqueueidtemplatesgetsecurity.md)             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnnotationTemplateDB[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createQueueTemplateAnnotationQueuesQueueIdTemplatesPost

Create template(s) in an annotation queue.

Supports two scenarios:
1. Create a single template: Provide 'template' field
2. Copy all templates from source queue: Provide 'copy_from_queue_id' field

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_queue_template_annotation_queues__queue_id__templates_post" method="post" path="/annotation_queues/{queue_id}/templates" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.createQueueTemplateAnnotationQueuesQueueIdTemplatesPost({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
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
import { annotationQueueCreateQueueTemplateAnnotationQueuesQueueIdTemplatesPost } from "galileo-generated/funcs/annotationQueueCreateQueueTemplateAnnotationQueuesQueueIdTemplatesPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueCreateQueueTemplateAnnotationQueuesQueueIdTemplatesPost(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueCreateQueueTemplateAnnotationQueuesQueueIdTemplatesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateQueueTemplateAnnotationQueuesQueueIdTemplatesPostRequest](../../models/operations/createqueuetemplateannotationqueuesqueueidtemplatespostrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateQueueTemplateAnnotationQueuesQueueIdTemplatesPostSecurity](../../models/operations/createqueuetemplateannotationqueuesqueueidtemplatespostsecurity.md)       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AnnotationTemplateDB[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatch

Update an existing template in an annotation queue.

Can update:
- Template name (must be unique within the queue)
- Template criteria

Note: Constraints and other fields cannot be updated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_queue_template_annotation_queues__queue_id__templates__template_id__patch" method="patch" path="/annotation_queues/{queue_id}/templates/{template_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.updateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatch({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    queueId: "<value>",
    body: {
      name: "<value>",
      criteria: "<value>",
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
  annotationQueueUpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatch,
} from "galileo-generated/funcs/annotationQueueUpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueUpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatch(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    queueId: "<value>",
    body: {
      name: "<value>",
      criteria: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueUpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.UpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatchRequest](../../models/operations/updatequeuetemplateannotationqueuesqueueidtemplatestemplateidpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `security`                                                                                                                                                                                     | [operations.UpdateQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdPatchSecurity](../../models/operations/updatequeuetemplateannotationqueuesqueueidtemplatestemplateidpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                              |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[models.AnnotationTemplateDB](../../models/annotationtemplatedb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDelete

Delete a template from an annotation queue.

Validates that:
- Template exists
- Template belongs to the specified queue
- User has UPDATE permission on the queue

After deletion, remaining templates are renumbered to maintain sequential positions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_queue_template_annotation_queues__queue_id__templates__template_id__delete" method="delete" path="/annotation_queues/{queue_id}/templates/{template_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueue.deleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDelete({
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    queueId: "<value>",
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
  annotationQueueDeleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDelete,
} from "galileo-generated/funcs/annotationQueueDeleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueDeleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDelete(galileoGenerated, {
    classicAPIKeyHeader: process.env["GALILEOGENERATED_CLASSIC_API_KEY_HEADER"] ?? "",
  }, {
    templateId: "<value>",
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueDeleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.DeleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDeleteRequest](../../models/operations/deletequeuetemplateannotationqueuesqueueidtemplatestemplateiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `security`                                                                                                                                                                                       | [operations.DeleteQueueTemplateAnnotationQueuesQueueIdTemplatesTemplateIdDeleteSecurity](../../models/operations/deletequeuetemplateannotationqueuesqueueidtemplatestemplateiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |