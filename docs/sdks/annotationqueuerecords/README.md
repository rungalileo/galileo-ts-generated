# AnnotationQueueRecords

## Overview

### Available Operations

* [partialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPost](#partialsearchannotationqueuerecordsannotationqueuesqueueidpartialsearchpost) - Partial Search Annotation Queue Records
* [addRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPost](#addrecordstoannotationqueueannotationqueuesqueueidrecordspost) - Add Records To Annotation Queue
* [exportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPost](#exportannotationqueuerecordsannotationqueuesqueueidrecordsexportpost) - Export Annotation Queue Records
* [exportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPost](#exportannotationqueuerecordsurlannotationqueuesqueueidrecordsexporturlpost) - Export Annotation Queue Records Url
* [removeRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePost](#removerecordsfromannotationqueueannotationqueuesqueueidrecordsremovepost) - Remove Records From Annotation Queue
* [countAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPost](#countannotationqueuerecordsannotationqueuesqueueidrecordscountpost) - Count Annotation Queue Records
* [getAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet](#getannotationqueuerecordannotationqueuesqueueidrecordsrecordidget) - Get Annotation Queue Record
* [createAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPut](#createannotationqueuerecordratingannotationqueuesqueueidrecordsrecordidratingput) - Create Annotation Queue Record Rating
* [deleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDelete](#deleteannotationqueuerecordratingannotationqueuesqueueidrecordsrecordidratingdelete) - Delete Annotation Queue Record Rating
* [getAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPost](#getannotationqueuerecordsavailablecolumnsannotationqueuesqueueidrecordsavailablecolumnspost) - Get Annotation Queue Records Available Columns

## partialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPost

Search records in an annotation queue with partial field selection.

This endpoint queries all project/run pairs associated with the queue and returns
records that are in the annotation queue, with only the requested fields included.

Permission checks:
- User must have READ permission on the annotation queue

Note: This endpoint queries across all projects/runs in the queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="partial_search_annotation_queue_records_annotation_queues__queue_id__partial_search_post" method="post" path="/annotation_queues/{queue_id}/partial_search" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.partialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      selectColumns: {},
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
  annotationQueueRecordsPartialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPost,
} from "galileo-generated/funcs/annotationQueueRecordsPartialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsPartialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      selectColumns: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsPartialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.PartialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPostRequest](../../models/operations/partialsearchannotationqueuerecordsannotationqueuesqueueidpartialsearchpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `security`                                                                                                                                                                                                       | [operations.PartialSearchAnnotationQueueRecordsAnnotationQueuesQueueIdPartialSearchPostSecurity](../../models/operations/partialsearchannotationqueuerecordsannotationqueuesqueueidpartialsearchpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                                |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[models.LogRecordsPartialQueryResponse](../../models/logrecordspartialqueryresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## addRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPost

Add records to an annotation queue.

The request must specify either a list of record IDs or a filter tree to select records.
All specified records must exist within the given project and run.

Permission checks:
- User must have UPDATE permission on the annotation queue
- User must have READ permission on the project containing the records

Returns 200 OK with the count of records added on success.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_records_to_annotation_queue_annotation_queues__queue_id__records_post" method="post" path="/annotation_queues/{queue_id}/records" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.addRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      projectId: "<value>",
      runId: "<value>",
      recordSelector: {
        type: "record_ids",
        recordIds: [
          "<value 1>",
          "<value 2>",
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
import {
  annotationQueueRecordsAddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPost,
} from "galileo-generated/funcs/annotationQueueRecordsAddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsAddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      projectId: "<value>",
      runId: "<value>",
      recordSelector: {
        type: "record_ids",
        recordIds: [
          "<value 1>",
          "<value 2>",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsAddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.AddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPostRequest](../../models/operations/addrecordstoannotationqueueannotationqueuesqueueidrecordspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `security`                                                                                                                                                                           | [operations.AddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPostSecurity](../../models/operations/addrecordstoannotationqueueannotationqueuesqueueidrecordspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                   | The security requirements to use for the request.                                                                                                                                    |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.AddRecordsToQueueResponse](../../models/addrecordstoqueueresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## exportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPost

Export selected records from an annotation queue.

The request must specify either a list of record IDs or a filter tree to select queue records.

Permission checks:
- User must have READ permission on the annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_annotation_queue_records_annotation_queues__queue_id__records_export_post" method="post" path="/annotation_queues/{queue_id}/records/export" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.exportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      recordSelector: {
        type: "record_ids",
        recordIds: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
import {
  annotationQueueRecordsExportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPost,
} from "galileo-generated/funcs/annotationQueueRecordsExportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsExportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      recordSelector: {
        type: "record_ids",
        recordIds: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsExportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.ExportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPostRequest](../../models/operations/exportannotationqueuerecordsannotationqueuesqueueidrecordsexportpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `security`                                                                                                                                                                                         | [operations.ExportAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsExportPostSecurity](../../models/operations/exportannotationqueuerecordsannotationqueuesqueueidrecordsexportpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## exportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPost

Export selected records from an annotation queue and return a presigned download URL.

The request must specify either a list of record IDs or a filter tree to select queue records.

Permission checks:
- User must have READ permission on the annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_annotation_queue_records_url_annotation_queues__queue_id__records_export_url_post" method="post" path="/annotation_queues/{queue_id}/records/export/url" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.exportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      recordSelector: {
        type: "filter_tree",
        filterTree: {
          filter: {
            columnId: "<id>",
            operator: "eq",
            value: "<value>",
            caseSensitive: true,
            type: "text",
          },
        },
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
import {
  annotationQueueRecordsExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPost,
} from "galileo-generated/funcs/annotationQueueRecordsExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      recordSelector: {
        type: "filter_tree",
        filterTree: {
          filter: {
            columnId: "<id>",
            operator: "eq",
            value: "<value>",
            caseSensitive: true,
            type: "text",
          },
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.ExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPostRequest](../../models/operations/exportannotationqueuerecordsurlannotationqueuesqueueidrecordsexporturlpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `security`                                                                                                                                                                                                     | [operations.ExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPostSecurity](../../models/operations/exportannotationqueuerecordsurlannotationqueuesqueueidrecordsexporturlpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                              |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[models.ExportPresignedUrlResponse](../../models/exportpresignedurlresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## removeRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePost

Remove records from an annotation queue.

The request must specify either a list of record IDs or a filter tree to select records.
Selection is applied across all project/run pairs currently tracked in the queue.

Permission checks:
- User must have UPDATE permission on the annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_records_from_annotation_queue_annotation_queues__queue_id__records_remove_post" method="post" path="/annotation_queues/{queue_id}/records/remove" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.removeRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      recordSelector: {
        type: "record_ids",
        recordIds: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
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
import {
  annotationQueueRecordsRemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePost,
} from "galileo-generated/funcs/annotationQueueRecordsRemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsRemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {
      recordSelector: {
        type: "record_ids",
        recordIds: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsRemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.RemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePostRequest](../../models/operations/removerecordsfromannotationqueueannotationqueuesqueueidrecordsremovepostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `security`                                                                                                                                                                                                 | [operations.RemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePostSecurity](../../models/operations/removerecordsfromannotationqueueannotationqueuesqueueidrecordsremovepostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                          |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[models.RemoveRecordsFromQueueResponse](../../models/removerecordsfromqueueresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## countAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPost

Count records in an annotation queue.

Permission checks:
- User must have READ permission on the annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="count_annotation_queue_records_annotation_queues__queue_id__records_count_post" method="post" path="/annotation_queues/{queue_id}/records/count" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.countAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
import {
  annotationQueueRecordsCountAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPost,
} from "galileo-generated/funcs/annotationQueueRecordsCountAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsCountAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsCountAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.CountAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPostRequest](../../models/operations/countannotationqueuerecordsannotationqueuesqueueidrecordscountpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `security`                                                                                                                                                                                     | [operations.CountAnnotationQueueRecordsAnnotationQueuesQueueIdRecordsCountPostSecurity](../../models/operations/countannotationqueuerecordsannotationqueuesqueueidrecordscountpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                              |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[models.LogRecordsQueryCountResponse](../../models/logrecordsquerycountresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet

Get a single record in an annotation queue.

Permission checks:
- User must have READ permission on the annotation queue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_annotation_queue_record_annotation_queues__queue_id__records__record_id__get" method="get" path="/annotation_queues/{queue_id}/records/{record_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.getAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    recordId: "<value>",
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
  annotationQueueRecordsGetAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet,
} from "galileo-generated/funcs/annotationQueueRecordsGetAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsGetAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    recordId: "<value>",
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsGetAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.GetAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGetRequest](../../models/operations/getannotationqueuerecordannotationqueuesqueueidrecordsrecordidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.GetAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGetSecurity](../../models/operations/getannotationqueuerecordannotationqueuesqueueidrecordsrecordidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.ResponseGetAnnotationQueueRecordAnnotationQueuesQueueIdRecordsRecordIdGet](../../models/operations/responsegetannotationqueuerecordannotationqueuesqueueidrecordsrecordidget.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPut

Create an annotation rating for a record in an annotation queue.

This endpoint is project-unaware and takes the template_id in the query params.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_annotation_queue_record_rating_annotation_queues__queue_id__records__record_id__rating_put" method="put" path="/annotation_queues/{queue_id}/records/{record_id}/rating" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.createAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPut({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    recordId: "<value>",
    annotationTemplateId: "<value>",
    body: {
      rating: {
        annotationType: "tags",
        value: [
          "<value 1>",
          "<value 2>",
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
import {
  annotationQueueRecordsCreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPut,
} from "galileo-generated/funcs/annotationQueueRecordsCreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsCreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPut(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    recordId: "<value>",
    annotationTemplateId: "<value>",
    body: {
      rating: {
        annotationType: "tags",
        value: [
          "<value 1>",
          "<value 2>",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsCreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.CreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPutRequest](../../models/operations/createannotationqueuerecordratingannotationqueuesqueueidrecordsrecordidratingputrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `security`                                                                                                                                                                                                                 | [operations.CreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPutSecurity](../../models/operations/createannotationqueuerecordratingannotationqueuesqueueidrecordsrecordidratingputsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                                                          |
| `options`                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                             |
| `options.retries`                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                           |

### Response

**Promise\<[models.AnnotationRatingDB](../../models/annotationratingdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDelete

Delete an annotation rating for a record in an annotation queue.

This soft-deletes the rating by inserting a new row with is_deleted=1.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_annotation_queue_record_rating_annotation_queues__queue_id__records__record_id__rating_delete" method="delete" path="/annotation_queues/{queue_id}/records/{record_id}/rating" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.deleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    recordId: "<value>",
    annotationTemplateId: "<value>",
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
  annotationQueueRecordsDeleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDelete,
} from "galileo-generated/funcs/annotationQueueRecordsDeleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsDeleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
    recordId: "<value>",
    annotationTemplateId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsDeleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                        | [operations.DeleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDeleteRequest](../../models/operations/deleteannotationqueuerecordratingannotationqueuesqueueidrecordsrecordidratingdeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                       |
| `security`                                                                                                                                                                                                                       | [operations.DeleteAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingDeleteSecurity](../../models/operations/deleteannotationqueuerecordratingannotationqueuesqueueidrecordsrecordidratingdeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                   |
| `options.retries`                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                 |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPost

Get available columns for records in an annotation queue.

Annotation queues can contain records from multiple projects/runs, so this endpoint
returns the standard columns common across all records plus any metric columns present
in the queue's active project/run membership and any user metadata columns present
on those runs.

Permission checks:
- User must have READ permission on the annotation queue

Returns:
- Standard columns (id, created_at, input, output, etc.)
- Metric columns available in the queue's active project/run pairs
- User metadata columns available in the queue's active project/run pairs
- Annotation aggregate feedback columns for queue owners/editors and org admins

Excludes:
- Dataset metadata columns (project/run-specific)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_annotation_queue_records_available_columns_annotation_queues__queue_id__records_available_columns_post" method="post" path="/annotation_queues/{queue_id}/records/available_columns" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.annotationQueueRecords.getAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
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
import {
  annotationQueueRecordsGetAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPost,
} from "galileo-generated/funcs/annotationQueueRecordsGetAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await annotationQueueRecordsGetAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    queueId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("annotationQueueRecordsGetAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                        | [operations.GetAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPostRequest](../../models/operations/getannotationqueuerecordsavailablecolumnsannotationqueuesqueueidrecordsavailablecolumnspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                                       |
| `security`                                                                                                                                                                                                                                       | [operations.GetAnnotationQueueRecordsAvailableColumnsAnnotationQueuesQueueIdRecordsAvailableColumnsPostSecurity](../../models/operations/getannotationqueuerecordsavailablecolumnsannotationqueuesqueueidrecordsavailablecolumnspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                   |
| `options.retries`                                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                 |

### Response

**Promise\<[models.LogRecordsAvailableColumnsResponse](../../models/logrecordsavailablecolumnsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |