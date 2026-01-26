# ListDatasetResponse

## Example Usage

```typescript
import { ListDatasetResponse } from "galileo-generated/models";

let value: ListDatasetResponse = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `startingToken`                              | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `paginated`                                  | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `nextStartingToken`                          | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `datasets`                                   | [models.DatasetDB](../models/datasetdb.md)[] | :heavy_minus_sign:                           | N/A                                          |