# ExportEditsDatabricksIntegrationsDatabricksEditsExportPostRequest

## Example Usage

```typescript
import { ExportEditsDatabricksIntegrationsDatabricksEditsExportPostRequest } from "galileo-generated/models/operations";

let value: ExportEditsDatabricksIntegrationsDatabricksEditsExportPostRequest = {
  body: {
    editIds: [],
    databaseName: "<value>",
    tableName: "<value>",
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `ignoreConflictingEdits`                                                          | *boolean*                                                                         | :heavy_minus_sign:                                                                | N/A                                                                               |
| `body`                                                                            | [models.DatabricksEditExportRequest](../../models/databrickseditexportrequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |