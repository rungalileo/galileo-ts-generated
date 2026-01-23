# DatabricksUnityCatalogExportResponse

## Example Usage

```typescript
import { DatabricksUnityCatalogExportResponse } from "galileo-generated/models";

let value: DatabricksUnityCatalogExportResponse = {
  results: [],
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
| `results`                                          | *any*[]                                            | :heavy_check_mark:                                 | N/A                                                |