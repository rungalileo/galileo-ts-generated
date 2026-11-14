# ListStageResponse

## Example Usage

```typescript
import { ListStageResponse } from "galileo-generated/models";

let value: ListStageResponse = {
  stages: [],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `startingToken`                          | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `limit`                                  | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `paginated`                              | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `nextStartingToken`                      | *number*                                 | :heavy_minus_sign:                       | N/A                                      |
| `stages`                                 | [models.StageDB](../models/stagedb.md)[] | :heavy_check_mark:                       | N/A                                      |