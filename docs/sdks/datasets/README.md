# Datasets

## Overview

### Available Operations

* [~~uploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost~~](#uploadpromptevaluationdatasetprojectsprojectidpromptdatasetspost) - Upload Prompt Evaluation Dataset :warning: **Deprecated**
* [~~listPromptDatasetsProjectsProjectIdPromptDatasetsGet~~](#listpromptdatasetsprojectsprojectidpromptdatasetsget) - List Prompt Datasets :warning: **Deprecated**
* [createDatasetDatasetsPost](#createdatasetdatasetspost) - Create Dataset
* [listDatasetsDatasetsGet](#listdatasetsdatasetsget) - List Datasets
* [bulkDeleteDatasetsDatasetsBulkDeleteDelete](#bulkdeletedatasetsdatasetsbulkdeletedelete) - Bulk Delete Datasets
* [getDatasetDatasetsDatasetIdGet](#getdatasetdatasetsdatasetidget) - Get Dataset
* [updateDatasetDatasetsDatasetIdPatch](#updatedatasetdatasetsdatasetidpatch) - Update Dataset
* [deleteDatasetDatasetsDatasetIdDelete](#deletedatasetdatasetsdatasetiddelete) - Delete Dataset
* [queryDatasetsDatasetsQueryPost](#querydatasetsdatasetsquerypost) - Query Datasets
* [~~updatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut~~](#updatepromptdatasetprojectsprojectidpromptdatasetsdatasetidput) - Update Prompt Dataset :warning: **Deprecated**
* [~~deletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete~~](#deletepromptdatasetprojectsprojectidpromptdatasetsdatasetiddelete) - Delete Prompt Dataset :warning: **Deprecated**
* [~~downloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet~~](#downloadpromptdatasetprojectsprojectidpromptdatasetsdatasetidget) - Download Prompt Dataset :warning: **Deprecated**
* [updateDatasetContentDatasetsDatasetIdContentPatch](#updatedatasetcontentdatasetsdatasetidcontentpatch) - Update Dataset Content
* [getDatasetContentDatasetsDatasetIdContentGet](#getdatasetcontentdatasetsdatasetidcontentget) - Get Dataset Content
* [upsertDatasetContentDatasetsDatasetIdContentPut](#upsertdatasetcontentdatasetsdatasetidcontentput) - Upsert Dataset Content
* [downloadDatasetDatasetsDatasetIdDownloadGet](#downloaddatasetdatasetsdatasetiddownloadget) - Download Dataset
* [previewDatasetDatasetsDatasetIdPreviewPost](#previewdatasetdatasetsdatasetidpreviewpost) - Preview Dataset
* [queryDatasetContentDatasetsDatasetIdContentQueryPost](#querydatasetcontentdatasetsdatasetidcontentquerypost) - Query Dataset Content
* [createUserDatasetCollaboratorsDatasetsDatasetIdUsersPost](#createuserdatasetcollaboratorsdatasetsdatasetiduserspost) - Create User Dataset Collaborators
* [listUserDatasetCollaboratorsDatasetsDatasetIdUsersGet](#listuserdatasetcollaboratorsdatasetsdatasetidusersget) - List User Dataset Collaborators
* [createGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost](#creategroupdatasetcollaboratorsdatasetsdatasetidgroupspost) - Create Group Dataset Collaborators
* [listGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet](#listgroupdatasetcollaboratorsdatasetsdatasetidgroupsget) - List Group Dataset Collaborators
* [updateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch](#updateuserdatasetcollaboratordatasetsdatasetidusersuseridpatch) - Update User Dataset Collaborator
* [deleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete](#deleteuserdatasetcollaboratordatasetsdatasetidusersuseriddelete) - Delete User Dataset Collaborator
* [updateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch](#updategroupdatasetcollaboratordatasetsdatasetidgroupsgroupidpatch) - Update Group Dataset Collaborator
* [deleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete](#deletegroupdatasetcollaboratordatasetsdatasetidgroupsgroupiddelete) - Delete Group Dataset Collaborator
* [queryDatasetVersionsDatasetsDatasetIdVersionsQueryPost](#querydatasetversionsdatasetsdatasetidversionsquerypost) - Query Dataset Versions
* [getDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet](#getdatasetversioncontentdatasetsdatasetidversionsversionindexcontentget) - Get Dataset Version Content
* [updateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch](#updatedatasetversiondatasetsdatasetidversionsversionindexpatch) - Update Dataset Version
* [listDatasetProjectsDatasetsDatasetIdProjectsGet](#listdatasetprojectsdatasetsdatasetidprojectsget) - List Dataset Projects
* [extendDatasetContentDatasetsExtendPost](#extenddatasetcontentdatasetsextendpost) - Extend Dataset Content
* [getDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet](#getdatasetsyntheticextendstatusdatasetsextenddatasetidget) - Get Dataset Synthetic Extend Status
* [getDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGet](#getdatasetvariablepreviewdatasetsdatasetidvariablepreviewget) - Get Dataset Variable Preview

## ~~uploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost~~

Upload Prompt Evaluation Dataset

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upload_prompt_evaluation_dataset_projects__project_id__prompt_datasets_post" method="post" path="/projects/{project_id}/prompt_datasets" -->
```typescript
import { GalileoGenerated } from "galileo-generated";
import { openAsBlob } from "node:fs";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.uploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      file: await openAsBlob("example.file"),
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
import { datasetsUploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost } from "galileo-generated/funcs/datasetsUploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost.js";
import { openAsBlob } from "node:fs";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    body: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsUploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.UploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPostRequest](../../models/operations/uploadpromptevaluationdatasetprojectsprojectidpromptdatasetspostrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.UploadPromptEvaluationDatasetProjectsProjectIdPromptDatasetsPostSecurity](../../models/operations/uploadpromptevaluationdatasetprojectsprojectidpromptdatasetspostsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.PromptDatasetDB](../../models/promptdatasetdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~listPromptDatasetsProjectsProjectIdPromptDatasetsGet~~

List Prompt Datasets

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_prompt_datasets_projects__project_id__prompt_datasets_get" method="get" path="/projects/{project_id}/prompt_datasets" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.listPromptDatasetsProjectsProjectIdPromptDatasetsGet({
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
import { datasetsListPromptDatasetsProjectsProjectIdPromptDatasetsGet } from "galileo-generated/funcs/datasetsListPromptDatasetsProjectsProjectIdPromptDatasetsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsListPromptDatasetsProjectsProjectIdPromptDatasetsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsListPromptDatasetsProjectsProjectIdPromptDatasetsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPromptDatasetsProjectsProjectIdPromptDatasetsGetRequest](../../models/operations/listpromptdatasetsprojectsprojectidpromptdatasetsgetrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListPromptDatasetsProjectsProjectIdPromptDatasetsGetSecurity](../../models/operations/listpromptdatasetsprojectsprojectidpromptdatasetsgetsecurity.md)             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListPromptDatasetResponse](../../models/listpromptdatasetresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createDatasetDatasetsPost

Creates a standalone dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_dataset_datasets_post" method="post" path="/datasets" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.createDatasetDatasetsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsCreateDatasetDatasetsPost } from "galileo-generated/funcs/datasetsCreateDatasetDatasetsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsCreateDatasetDatasetsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsCreateDatasetDatasetsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDatasetDatasetsPostRequest](../../models/operations/createdatasetdatasetspostrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateDatasetDatasetsPostSecurity](../../models/operations/createdatasetdatasetspostsecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DatasetDB](../../models/datasetdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listDatasetsDatasetsGet

List Datasets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_datasets_datasets_get" method="get" path="/datasets" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.listDatasetsDatasetsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsListDatasetsDatasetsGet } from "galileo-generated/funcs/datasetsListDatasetsDatasetsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsListDatasetsDatasetsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsListDatasetsDatasetsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDatasetsDatasetsGetRequest](../../models/operations/listdatasetsdatasetsgetrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListDatasetsDatasetsGetSecurity](../../models/operations/listdatasetsdatasetsgetsecurity.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListDatasetResponse](../../models/listdatasetresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## bulkDeleteDatasetsDatasetsBulkDeleteDelete

Delete multiple datasets in bulk.

This endpoint allows efficient deletion of multiple datasets at once.
It validates permissions for each dataset in the service and provides detailed feedback about
successful and failed deletions for each dataset.

Parameters
----------
delete_request : BulkDeleteDatasetsRequest
    Request containing list of dataset IDs to delete (max 100)
ctx : Context
    Request context including authentication information

Returns
-------
BulkDeleteDatasetsResponse
    Details about the bulk deletion operation including:
    - Number of successfully deleted datasets
    - List of failed deletions with reasons
    - Summary message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_delete_datasets_datasets_bulk_delete_delete" method="delete" path="/datasets/bulk_delete" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.bulkDeleteDatasetsDatasetsBulkDeleteDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetIds: [
      "<value 1>",
      "<value 2>",
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
import { datasetsBulkDeleteDatasetsDatasetsBulkDeleteDelete } from "galileo-generated/funcs/datasetsBulkDeleteDatasetsDatasetsBulkDeleteDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsBulkDeleteDatasetsDatasetsBulkDeleteDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetIds: [
      "<value 1>",
      "<value 2>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsBulkDeleteDatasetsDatasetsBulkDeleteDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BulkDeleteDatasetsRequest](../../models/bulkdeletedatasetsrequest.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.BulkDeleteDatasetsDatasetsBulkDeleteDeleteSecurity](../../models/operations/bulkdeletedatasetsdatasetsbulkdeletedeletesecurity.md)                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BulkDeleteDatasetsResponse](../../models/bulkdeletedatasetsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getDatasetDatasetsDatasetIdGet

Get Dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_datasets__dataset_id__get" method="get" path="/datasets/{dataset_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.getDatasetDatasetsDatasetIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsGetDatasetDatasetsDatasetIdGet } from "galileo-generated/funcs/datasetsGetDatasetDatasetsDatasetIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsGetDatasetDatasetsDatasetIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsGetDatasetDatasetsDatasetIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatasetDatasetsDatasetIdGetRequest](../../models/operations/getdatasetdatasetsdatasetidgetrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetDatasetDatasetsDatasetIdGetSecurity](../../models/operations/getdatasetdatasetsdatasetidgetsecurity.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DatasetDB](../../models/datasetdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateDatasetDatasetsDatasetIdPatch

Update Dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_dataset_datasets__dataset_id__patch" method="patch" path="/datasets/{dataset_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.updateDatasetDatasetsDatasetIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
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
import { datasetsUpdateDatasetDatasetsDatasetIdPatch } from "galileo-generated/funcs/datasetsUpdateDatasetDatasetsDatasetIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUpdateDatasetDatasetsDatasetIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsUpdateDatasetDatasetsDatasetIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDatasetDatasetsDatasetIdPatchRequest](../../models/operations/updatedatasetdatasetsdatasetidpatchrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateDatasetDatasetsDatasetIdPatchSecurity](../../models/operations/updatedatasetdatasetsdatasetidpatchsecurity.md)                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DatasetDB](../../models/datasetdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteDatasetDatasetsDatasetIdDelete

Delete Dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_dataset_datasets__dataset_id__delete" method="delete" path="/datasets/{dataset_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.deleteDatasetDatasetsDatasetIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsDeleteDatasetDatasetsDatasetIdDelete } from "galileo-generated/funcs/datasetsDeleteDatasetDatasetsDatasetIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsDeleteDatasetDatasetsDatasetIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsDeleteDatasetDatasetsDatasetIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDatasetDatasetsDatasetIdDeleteRequest](../../models/operations/deletedatasetdatasetsdatasetiddeleterequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DeleteDatasetDatasetsDatasetIdDeleteSecurity](../../models/operations/deletedatasetdatasetsdatasetiddeletesecurity.md)                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

## queryDatasetsDatasetsQueryPost

Query Datasets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_datasets_datasets_query_post" method="post" path="/datasets/query" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.queryDatasetsDatasetsQueryPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsQueryDatasetsDatasetsQueryPost } from "galileo-generated/funcs/datasetsQueryDatasetsDatasetsQueryPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsQueryDatasetsDatasetsQueryPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsQueryDatasetsDatasetsQueryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryDatasetsDatasetsQueryPostRequest](../../models/operations/querydatasetsdatasetsquerypostrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryDatasetsDatasetsQueryPostSecurity](../../models/operations/querydatasetsdatasetsquerypostsecurity.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListDatasetResponse](../../models/listdatasetresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~updatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut~~

Update Prompt Dataset

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_prompt_dataset_projects__project_id__prompt_datasets__dataset_id__put" method="put" path="/projects/{project_id}/prompt_datasets/{dataset_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.updatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsUpdatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut } from "galileo-generated/funcs/datasetsUpdatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUpdatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsUpdatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.UpdatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPutRequest](../../models/operations/updatepromptdatasetprojectsprojectidpromptdatasetsdatasetidputrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.UpdatePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdPutSecurity](../../models/operations/updatepromptdatasetprojectsprojectidpromptdatasetsdatasetidputsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.PromptDatasetDB](../../models/promptdatasetdb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## ~~deletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete~~

Delete Prompt Dataset

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_prompt_dataset_projects__project_id__prompt_datasets__dataset_id__delete" method="delete" path="/projects/{project_id}/prompt_datasets/{dataset_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.deletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsDeletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete } from "galileo-generated/funcs/datasetsDeletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsDeletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsDeletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.DeletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDeleteRequest](../../models/operations/deletepromptdatasetprojectsprojectidpromptdatasetsdatasetiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.DeletePromptDatasetProjectsProjectIdPromptDatasetsDatasetIdDeleteSecurity](../../models/operations/deletepromptdatasetprojectsprojectidpromptdatasetsdatasetiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
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

## ~~downloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet~~

Download Prompt Dataset

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="download_prompt_dataset_projects__project_id__prompt_datasets__dataset_id__get" method="get" path="/projects/{project_id}/prompt_datasets/{dataset_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  await galileoGenerated.datasets.downloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    datasetId: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsDownloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet } from "galileo-generated/funcs/datasetsDownloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsDownloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    projectId: "<value>",
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("datasetsDownloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.DownloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGetRequest](../../models/operations/downloadpromptdatasetprojectsprojectidpromptdatasetsdatasetidgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `security`                                                                                                                                                                                 | [operations.DownloadPromptDatasetProjectsProjectIdPromptDatasetsDatasetIdGetSecurity](../../models/operations/downloadpromptdatasetprojectsprojectidpromptdatasetsdatasetidgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                         | The security requirements to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<void\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateDatasetContentDatasetsDatasetIdContentPatch

Update the content of a dataset.

The `index` and `column_name` fields are treated as keys tied to a specific version of the dataset.
As such, these values are considered immutable identifiers for the dataset's structure.

Edits are applied sequentially in list order, and each edit sees the table state left by the
previous one. For example, after a `rename_column` edit renames `col_a` to `col_b`, any
subsequent `update_row` in the same request must reference the column as `col_b`, not `col_a`.

The `If-Match` header is used to ensure that updates are only applied if the client's version of the dataset
matches the server's version. This prevents conflicts from simultaneous updates. The `ETag` header in the response
provides the new version identifier after a successful update.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_dataset_content_datasets__dataset_id__content_patch" method="patch" path="/datasets/{dataset_id}/content" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.updateDatasetContentDatasetsDatasetIdContentPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    ifMatch: "d89cce33-549d-4b6d-b220-afb641d859c8",
    body: {
      edits: [
        {
          editType: "filter_rows",
          rowIds: [
            "<value 1>",
            "<value 2>",
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
import { datasetsUpdateDatasetContentDatasetsDatasetIdContentPatch } from "galileo-generated/funcs/datasetsUpdateDatasetContentDatasetsDatasetIdContentPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUpdateDatasetContentDatasetsDatasetIdContentPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    ifMatch: "d89cce33-549d-4b6d-b220-afb641d859c8",
    body: {
      edits: [
        {
          editType: "filter_rows",
          rowIds: [
            "<value 1>",
            "<value 2>",
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsUpdateDatasetContentDatasetsDatasetIdContentPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDatasetContentDatasetsDatasetIdContentPatchRequest](../../models/operations/updatedatasetcontentdatasetsdatasetidcontentpatchrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateDatasetContentDatasetsDatasetIdContentPatchSecurity](../../models/operations/updatedatasetcontentdatasetsdatasetidcontentpatchsecurity.md)                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateDatasetContentDatasetsDatasetIdContentPatchResponse](../../models/operations/updatedatasetcontentdatasetsdatasetidcontentpatchresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getDatasetContentDatasetsDatasetIdContentGet

Get Dataset Content

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_content_datasets__dataset_id__content_get" method="get" path="/datasets/{dataset_id}/content" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.getDatasetContentDatasetsDatasetIdContentGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsGetDatasetContentDatasetsDatasetIdContentGet } from "galileo-generated/funcs/datasetsGetDatasetContentDatasetsDatasetIdContentGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsGetDatasetContentDatasetsDatasetIdContentGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsGetDatasetContentDatasetsDatasetIdContentGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatasetContentDatasetsDatasetIdContentGetRequest](../../models/operations/getdatasetcontentdatasetsdatasetidcontentgetrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetDatasetContentDatasetsDatasetIdContentGetSecurity](../../models/operations/getdatasetcontentdatasetsdatasetidcontentgetsecurity.md)                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DatasetContent](../../models/datasetcontent.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## upsertDatasetContentDatasetsDatasetIdContentPut

Rollback the content of a dataset to a previous version.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_dataset_content_datasets__dataset_id__content_put" method="put" path="/datasets/{dataset_id}/content" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  await galileoGenerated.datasets.upsertDatasetContentDatasetsDatasetIdContentPut({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    body: {
      datasetId: "<value>",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsUpsertDatasetContentDatasetsDatasetIdContentPut } from "galileo-generated/funcs/datasetsUpsertDatasetContentDatasetsDatasetIdContentPut.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUpsertDatasetContentDatasetsDatasetIdContentPut(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    body: {
      datasetId: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("datasetsUpsertDatasetContentDatasetsDatasetIdContentPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertDatasetContentDatasetsDatasetIdContentPutRequest](../../models/operations/upsertdatasetcontentdatasetsdatasetidcontentputrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpsertDatasetContentDatasetsDatasetIdContentPutSecurity](../../models/operations/upsertdatasetcontentdatasetsdatasetidcontentputsecurity.md)                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## downloadDatasetDatasetsDatasetIdDownloadGet

Download Dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="download_dataset_datasets__dataset_id__download_get" method="get" path="/datasets/{dataset_id}/download" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.downloadDatasetDatasetsDatasetIdDownloadGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsDownloadDatasetDatasetsDatasetIdDownloadGet } from "galileo-generated/funcs/datasetsDownloadDatasetDatasetsDatasetIdDownloadGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsDownloadDatasetDatasetsDatasetIdDownloadGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsDownloadDatasetDatasetsDatasetIdDownloadGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadDatasetDatasetsDatasetIdDownloadGetRequest](../../models/operations/downloaddatasetdatasetsdatasetiddownloadgetrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.DownloadDatasetDatasetsDatasetIdDownloadGetSecurity](../../models/operations/downloaddatasetdatasetsdatasetiddownloadgetsecurity.md)                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
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

## previewDatasetDatasetsDatasetIdPreviewPost

Preview Dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="preview_dataset_datasets__dataset_id__preview_post" method="post" path="/datasets/{dataset_id}/preview" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.previewDatasetDatasetsDatasetIdPreviewPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
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
import { datasetsPreviewDatasetDatasetsDatasetIdPreviewPost } from "galileo-generated/funcs/datasetsPreviewDatasetDatasetsDatasetIdPreviewPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsPreviewDatasetDatasetsDatasetIdPreviewPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsPreviewDatasetDatasetsDatasetIdPreviewPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PreviewDatasetDatasetsDatasetIdPreviewPostRequest](../../models/operations/previewdatasetdatasetsdatasetidpreviewpostrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.PreviewDatasetDatasetsDatasetIdPreviewPostSecurity](../../models/operations/previewdatasetdatasetsdatasetidpreviewpostsecurity.md)                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DatasetContent](../../models/datasetcontent.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryDatasetContentDatasetsDatasetIdContentQueryPost

Query Dataset Content

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_dataset_content_datasets__dataset_id__content_query_post" method="post" path="/datasets/{dataset_id}/content/query" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.queryDatasetContentDatasetsDatasetIdContentQueryPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsQueryDatasetContentDatasetsDatasetIdContentQueryPost } from "galileo-generated/funcs/datasetsQueryDatasetContentDatasetsDatasetIdContentQueryPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsQueryDatasetContentDatasetsDatasetIdContentQueryPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsQueryDatasetContentDatasetsDatasetIdContentQueryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryDatasetContentDatasetsDatasetIdContentQueryPostRequest](../../models/operations/querydatasetcontentdatasetsdatasetidcontentquerypostrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryDatasetContentDatasetsDatasetIdContentQueryPostSecurity](../../models/operations/querydatasetcontentdatasetsdatasetidcontentquerypostsecurity.md)             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DatasetContent](../../models/datasetcontent.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createUserDatasetCollaboratorsDatasetsDatasetIdUsersPost

Create User Dataset Collaborators

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_user_dataset_collaborators_datasets__dataset_id__users_post" method="post" path="/datasets/{dataset_id}/users" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.createUserDatasetCollaboratorsDatasetsDatasetIdUsersPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
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
import { datasetsCreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPost } from "galileo-generated/funcs/datasetsCreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsCreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    body: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsCreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPostRequest](../../models/operations/createuserdatasetcollaboratorsdatasetsdatasetiduserspostrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPostSecurity](../../models/operations/createuserdatasetcollaboratorsdatasetsdatasetiduserspostsecurity.md)     | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UserCollaborator[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listUserDatasetCollaboratorsDatasetsDatasetIdUsersGet

List the users with which the dataset has been shared.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_user_dataset_collaborators_datasets__dataset_id__users_get" method="get" path="/datasets/{dataset_id}/users" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.listUserDatasetCollaboratorsDatasetsDatasetIdUsersGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsListUserDatasetCollaboratorsDatasetsDatasetIdUsersGet } from "galileo-generated/funcs/datasetsListUserDatasetCollaboratorsDatasetsDatasetIdUsersGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsListUserDatasetCollaboratorsDatasetsDatasetIdUsersGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsListUserDatasetCollaboratorsDatasetsDatasetIdUsersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUserDatasetCollaboratorsDatasetsDatasetIdUsersGetRequest](../../models/operations/listuserdatasetcollaboratorsdatasetsdatasetidusersgetrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListUserDatasetCollaboratorsDatasetsDatasetIdUsersGetSecurity](../../models/operations/listuserdatasetcollaboratorsdatasetsdatasetidusersgetsecurity.md)           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListUserCollaboratorsResponse](../../models/listusercollaboratorsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## createGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost

Share a dataset with groups.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_group_dataset_collaborators_datasets__dataset_id__groups_post" method="post" path="/datasets/{dataset_id}/groups" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.createGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
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
import { datasetsCreateGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost } from "galileo-generated/funcs/datasetsCreateGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsCreateGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    body: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsCreateGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPostRequest](../../models/operations/creategroupdatasetcollaboratorsdatasetsdatasetidgroupspostrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateGroupDatasetCollaboratorsDatasetsDatasetIdGroupsPostSecurity](../../models/operations/creategroupdatasetcollaboratorsdatasetsdatasetidgroupspostsecurity.md) | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GroupCollaborator[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet

List the groups with which the dataset has been shared.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_group_dataset_collaborators_datasets__dataset_id__groups_get" method="get" path="/datasets/{dataset_id}/groups" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.listGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsListGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet } from "galileo-generated/funcs/datasetsListGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsListGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsListGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGetRequest](../../models/operations/listgroupdatasetcollaboratorsdatasetsdatasetidgroupsgetrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListGroupDatasetCollaboratorsDatasetsDatasetIdGroupsGetSecurity](../../models/operations/listgroupdatasetcollaboratorsdatasetsdatasetidgroupsgetsecurity.md)       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListGroupCollaboratorsResponse](../../models/listgroupcollaboratorsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch

Update the sharing permissions of a user on a dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_user_dataset_collaborator_datasets__dataset_id__users__user_id__patch" method="patch" path="/datasets/{dataset_id}/users/{user_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.updateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
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
import { datasetsUpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch } from "galileo-generated/funcs/datasetsUpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    userId: "<value>",
    body: {
      role: "annotator",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsUpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.UpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatchRequest](../../models/operations/updateuserdatasetcollaboratordatasetsdatasetidusersuseridpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.UpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatchSecurity](../../models/operations/updateuserdatasetcollaboratordatasetsdatasetidusersuseridpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.UserCollaborator](../../models/usercollaborator.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete

Remove a user's access to a dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_user_dataset_collaborator_datasets__dataset_id__users__user_id__delete" method="delete" path="/datasets/{dataset_id}/users/{user_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.deleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
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
import { datasetsDeleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete } from "galileo-generated/funcs/datasetsDeleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsDeleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    userId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsDeleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.DeleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDeleteRequest](../../models/operations/deleteuserdatasetcollaboratordatasetsdatasetidusersuseriddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `security`                                                                                                                                                                               | [operations.DeleteUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdDeleteSecurity](../../models/operations/deleteuserdatasetcollaboratordatasetsdatasetidusersuseriddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                        |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch

Update the sharing permissions of a group on a dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_group_dataset_collaborator_datasets__dataset_id__groups__group_id__patch" method="patch" path="/datasets/{dataset_id}/groups/{group_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.updateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    groupId: "<value>",
    body: {
      role: "owner",
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
import { datasetsUpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch } from "galileo-generated/funcs/datasetsUpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    groupId: "<value>",
    body: {
      role: "owner",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsUpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.UpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatchRequest](../../models/operations/updategroupdatasetcollaboratordatasetsdatasetidgroupsgroupidpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `security`                                                                                                                                                                                   | [operations.UpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatchSecurity](../../models/operations/updategroupdatasetcollaboratordatasetsdatasetidgroupsgroupidpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                           | The security requirements to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[models.GroupCollaborator](../../models/groupcollaborator.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## deleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete

Remove a group's access to a dataset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_group_dataset_collaborator_datasets__dataset_id__groups__group_id__delete" method="delete" path="/datasets/{dataset_id}/groups/{group_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.deleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    groupId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsDeleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete } from "galileo-generated/funcs/datasetsDeleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsDeleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    groupId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsDeleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.DeleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDeleteRequest](../../models/operations/deletegroupdatasetcollaboratordatasetsdatasetidgroupsgroupiddeleterequest.md)   | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `security`                                                                                                                                                                                     | [operations.DeleteGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdDeleteSecurity](../../models/operations/deletegroupdatasetcollaboratordatasetsdatasetidgroupsgroupiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                              |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## queryDatasetVersionsDatasetsDatasetIdVersionsQueryPost

Query Dataset Versions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="query_dataset_versions_datasets__dataset_id__versions_query_post" method="post" path="/datasets/{dataset_id}/versions/query" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.queryDatasetVersionsDatasetsDatasetIdVersionsQueryPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsQueryDatasetVersionsDatasetsDatasetIdVersionsQueryPost } from "galileo-generated/funcs/datasetsQueryDatasetVersionsDatasetsDatasetIdVersionsQueryPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsQueryDatasetVersionsDatasetsDatasetIdVersionsQueryPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsQueryDatasetVersionsDatasetsDatasetIdVersionsQueryPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.QueryDatasetVersionsDatasetsDatasetIdVersionsQueryPostRequest](../../models/operations/querydatasetversionsdatasetsdatasetidversionsquerypostrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QueryDatasetVersionsDatasetsDatasetIdVersionsQueryPostSecurity](../../models/operations/querydatasetversionsdatasetsdatasetidversionsquerypostsecurity.md)         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListDatasetVersionResponse](../../models/listdatasetversionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet

Get Dataset Version Content

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_version_content_datasets__dataset_id__versions__version_index__content_get" method="get" path="/datasets/{dataset_id}/versions/{version_index}/content" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.getDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    versionIndex: 602551,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsGetDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet } from "galileo-generated/funcs/datasetsGetDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsGetDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    versionIndex: 602551,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsGetDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.GetDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGetRequest](../../models/operations/getdatasetversioncontentdatasetsdatasetidversionsversionindexcontentgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `security`                                                                                                                                                                                               | [operations.GetDatasetVersionContentDatasetsDatasetIdVersionsVersionIndexContentGetSecurity](../../models/operations/getdatasetversioncontentdatasetsdatasetidversionsversionindexcontentgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                                       | The security requirements to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[models.DatasetContent](../../models/datasetcontent.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## updateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch

Update Dataset Version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_dataset_version_datasets__dataset_id__versions__version_index__patch" method="patch" path="/datasets/{dataset_id}/versions/{version_index}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.updateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    versionIndex: 462507,
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
import { datasetsUpdateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch } from "galileo-generated/funcs/datasetsUpdateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsUpdateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
    versionIndex: 462507,
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsUpdateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.UpdateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatchRequest](../../models/operations/updatedatasetversiondatasetsdatasetidversionsversionindexpatchrequest.md)   | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `security`                                                                                                                                                                             | [operations.UpdateDatasetVersionDatasetsDatasetIdVersionsVersionIndexPatchSecurity](../../models/operations/updatedatasetversiondatasetsdatasetidversionsversionindexpatchsecurity.md) | :heavy_check_mark:                                                                                                                                                                     | The security requirements to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.DatasetVersionDB](../../models/datasetversiondb.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## listDatasetProjectsDatasetsDatasetIdProjectsGet

List Dataset Projects

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_dataset_projects_datasets__dataset_id__projects_get" method="get" path="/datasets/{dataset_id}/projects" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.listDatasetProjectsDatasetsDatasetIdProjectsGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsListDatasetProjectsDatasetsDatasetIdProjectsGet } from "galileo-generated/funcs/datasetsListDatasetProjectsDatasetsDatasetIdProjectsGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsListDatasetProjectsDatasetsDatasetIdProjectsGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsListDatasetProjectsDatasetsDatasetIdProjectsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDatasetProjectsDatasetsDatasetIdProjectsGetRequest](../../models/operations/listdatasetprojectsdatasetsdatasetidprojectsgetrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListDatasetProjectsDatasetsDatasetIdProjectsGetSecurity](../../models/operations/listdatasetprojectsdatasetsdatasetidprojectsgetsecurity.md)                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListDatasetProjectsResponse](../../models/listdatasetprojectsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## extendDatasetContentDatasetsExtendPost

Extends the dataset content

### Example Usage

<!-- UsageSnippet language="typescript" operationID="extend_dataset_content_datasets_extend_post" method="post" path="/datasets/extend" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.extendDatasetContentDatasetsExtendPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsExtendDatasetContentDatasetsExtendPost } from "galileo-generated/funcs/datasetsExtendDatasetContentDatasetsExtendPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsExtendDatasetContentDatasetsExtendPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsExtendDatasetContentDatasetsExtendPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.SyntheticDatasetExtensionRequest](../../models/syntheticdatasetextensionrequest.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ExtendDatasetContentDatasetsExtendPostSecurity](../../models/operations/extenddatasetcontentdatasetsextendpostsecurity.md)                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SyntheticDatasetExtensionResponse](../../models/syntheticdatasetextensionresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet

Get Dataset Synthetic Extend Status

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_synthetic_extend_status_datasets_extend__dataset_id__get" method="get" path="/datasets/extend/{dataset_id}" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.getDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsGetDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet } from "galileo-generated/funcs/datasetsGetDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsGetDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsGetDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGetRequest](../../models/operations/getdatasetsyntheticextendstatusdatasetsextenddatasetidgetrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetDatasetSyntheticExtendStatusDatasetsExtendDatasetIdGetSecurity](../../models/operations/getdatasetsyntheticextendstatusdatasetsextenddatasetidgetsecurity.md)   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.JobProgress](../../models/jobprogress.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## getDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGet

Return a variable preview derived from the sampled dataset input rows.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_variable_preview_datasets__dataset_id__variable_preview_get" method="get" path="/datasets/{dataset_id}/variable_preview" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.datasets.getDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGet({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { GalileoGeneratedCore } from "galileo-generated/core.js";
import { datasetsGetDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGet } from "galileo-generated/funcs/datasetsGetDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGet.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await datasetsGetDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGet(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    datasetId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsGetDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGetRequest](../../models/operations/getdatasetvariablepreviewdatasetsdatasetidvariablepreviewgetrequest.md)   | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `security`                                                                                                                                                                         | [operations.GetDatasetVariablePreviewDatasetsDatasetIdVariablePreviewGetSecurity](../../models/operations/getdatasetvariablepreviewdatasetsdatasetidvariablepreviewgetsecurity.md) | :heavy_check_mark:                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                  |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[models.DatasetInputJsonField[]](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |