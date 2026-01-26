# ListPromptDatasetResponse

## Example Usage

```typescript
import { ListPromptDatasetResponse } from "galileo-generated/models";

let value: ListPromptDatasetResponse = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `startingToken`                                          | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `paginated`                                              | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `nextStartingToken`                                      | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `datasets`                                               | [models.PromptDatasetDB](../models/promptdatasetdb.md)[] | :heavy_minus_sign:                                       | N/A                                                      |