# DatabricksEditExportResponse

## Example Usage

```typescript
import { DatabricksEditExportResponse } from "galileo-generated/models";

let value: DatabricksEditExportResponse = {
  editIds: [
    "<value 1>",
  ],
  databaseName: "<value>",
  tableName: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `task`                                             | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `filterParams`                                     | [models.FilterParams](../models/filterparams.md)   | :heavy_minus_sign:                                 | N/A                                                |
| `compareTo`                                        | [models.Split](../models/split.md)                 | :heavy_minus_sign:                                 | N/A                                                |
| `mapThreshold`                                     | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `allBut`                                           | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `fileType`                                         | [models.FileType](../models/filetype.md)           | :heavy_minus_sign:                                 | N/A                                                |
| `includeCols`                                      | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                |
| `colMapping`                                       | Record<string, *string*>                           | :heavy_minus_sign:                                 | N/A                                                |
| `hfFormat`                                         | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `taggingSchema`                                    | [models.TaggingSchema](../models/taggingschema.md) | :heavy_minus_sign:                                 | N/A                                                |
| `editIds`                                          | *string*[]                                         | :heavy_check_mark:                                 | N/A                                                |
| `editOverrides`                                    | [models.EditOverride](../models/editoverride.md)[] | :heavy_minus_sign:                                 | N/A                                                |
| `onlyExportEdited`                                 | *boolean*                                          | :heavy_minus_sign:                                 | N/A                                                |
| `minReviews`                                       | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `databaseName`                                     | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `tableName`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `contextId`                                        | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |