# Edits

## Overview

### Available Operations

* [exportEditsDatabricksIntegrationsDatabricksEditsExportPost](#exporteditsdatabricksintegrationsdatabrickseditsexportpost) - Export Edits Databricks
* [exportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost](#exporteditsdatabricksunitycatalogintegrationsdatabricksunitycatalogeditsexportpost) - Export Edits Databricks Unity Catalog

## exportEditsDatabricksIntegrationsDatabricksEditsExportPost

Exports the resulting dataframe after a series of edits to databricks delta lake.

If overrides are provided, and the original edit had a task, the override MUST explicitly have a task set (typically
the same task as the edit)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_edits_databricks_integrations_databricks_edits_export_post" method="post" path="/integrations/databricks/edits/export" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.edits.exportEditsDatabricksIntegrationsDatabricksEditsExportPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      editIds: [
        "<value 1>",
      ],
      databaseName: "<value>",
      tableName: "<value>",
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
import { integrationsExportEditsDatabricksIntegrationsDatabricksEditsExportPost } from "galileo-generated/funcs/integrationsExportEditsDatabricksIntegrationsDatabricksEditsExportPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await integrationsExportEditsDatabricksIntegrationsDatabricksEditsExportPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      editIds: [
        "<value 1>",
      ],
      databaseName: "<value>",
      tableName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("integrationsExportEditsDatabricksIntegrationsDatabricksEditsExportPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExportEditsDatabricksIntegrationsDatabricksEditsExportPostRequest](../../models/operations/exporteditsdatabricksintegrationsdatabrickseditsexportpostrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ExportEditsDatabricksIntegrationsDatabricksEditsExportPostSecurity](../../models/operations/exporteditsdatabricksintegrationsdatabrickseditsexportpostsecurity.md) | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.DatabricksEditExportResponse](../../models/databrickseditexportresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |

## exportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost

Export Edits Databricks Unity Catalog

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_edits_databricks_unity_catalog_integrations_databricks_unity_catalog_edits_export_post" method="post" path="/integrations/databricks/unity-catalog/edits/export" -->
```typescript
import { GalileoGenerated } from "galileo-generated";

const galileoGenerated = new GalileoGenerated();

async function run() {
  const result = await galileoGenerated.edits.exportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost({
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      editIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      catalogName: "<value>",
      schemaName: "<value>",
      pslContentFileName: "<value>",
      tableName: "<value>",
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
  integrationsExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost,
} from "galileo-generated/funcs/integrationsExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost.js";

// Use `GalileoGeneratedCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const galileoGenerated = new GalileoGeneratedCore();

async function run() {
  const res = await integrationsExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost(galileoGenerated, {
    apiKeyHeader: process.env["GALILEOGENERATED_API_KEY_HEADER"] ?? "",
  }, {
    body: {
      editIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      catalogName: "<value>",
      schemaName: "<value>",
      pslContentFileName: "<value>",
      tableName: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("integrationsExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.ExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPostRequest](../../models/operations/exporteditsdatabricksunitycatalogintegrationsdatabricksunitycatalogeditsexportpostrequest.md)   | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `security`                                                                                                                                                                                                                     | [operations.ExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPostSecurity](../../models/operations/exporteditsdatabricksunitycatalogintegrationsdatabricksunitycatalogeditsexportpostsecurity.md) | :heavy_check_mark:                                                                                                                                                                                                             | The security requirements to use for the request.                                                                                                                                                                              |
| `options`                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                 |
| `options.retries`                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                               |

### Response

**Promise\<[models.DatabricksUnityCatalogExportEditsResponse](../../models/databricksunitycatalogexporteditsresponse.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.HTTPValidationError          | 422                                 | application/json                    |
| errors.GalileoGeneratedDefaultError | 4XX, 5XX                            | \*/\*                               |