# ExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPostRequest

## Example Usage

```typescript
import {
  ExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPostRequest,
} from "galileo-generated/models/operations";

let value:
  ExportEditsDatabricksUnityCatalogIntegrationsDatabricksUnityCatalogEditsExportPostRequest =
    {
      body: {
        editIds: [
          "<value 1>",
        ],
        catalogName: "<value>",
        schemaName: "<value>",
        pslContentFileName: "<value>",
        tableName: "<value>",
      },
    };
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `ignoreConflictingEdits`                                                                                  | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `body`                                                                                                    | [models.DatabricksUnityCatalogEditExportRequest](../../models/databricksunitycatalogeditexportrequest.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |