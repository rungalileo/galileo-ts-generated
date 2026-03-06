# BulkDeleteDatasetsResponse

Response from bulk deletion operation.

## Example Usage

```typescript
import { BulkDeleteDatasetsResponse } from "galileo-generated/models";

let value: BulkDeleteDatasetsResponse = {
  deletedCount: 63720,
  message: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `deletedCount`                                                                                               | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `failedDeletions`                                                                                            | [models.ApiSchemasContentDatasetBulkDeleteFailure](../models/apischemascontentdatasetbulkdeletefailure.md)[] | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `message`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |