# ListDatasetVersionResponse

## Example Usage

```typescript
import { ListDatasetVersionResponse } from "galileo-generated/models";

let value: ListDatasetVersionResponse = {
  versions: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `startingToken`                                            | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `paginated`                                                | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `nextStartingToken`                                        | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `versions`                                                 | [models.DatasetVersionDB](../models/datasetversiondb.md)[] | :heavy_check_mark:                                         | N/A                                                        |