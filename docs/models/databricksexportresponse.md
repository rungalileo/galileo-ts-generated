# DatabricksExportResponse

## Example Usage

```typescript
import { DatabricksExportResponse } from "galileo-generated/models";

let value: DatabricksExportResponse = {
  databaseName: "<value>",
  tableName: "<value>",
  projectId: "<value>",
  runId: "<value>",
  split: "validation",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `databaseName`                                     | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `tableName`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `catalogName`                                      | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
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
| `projectId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `runId`                                            | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `split`                                            | [models.Split](../models/split.md)                 | :heavy_check_mark:                                 | N/A                                                |
| `inferenceName`                                    | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |