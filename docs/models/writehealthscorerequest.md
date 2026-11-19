# WriteHealthScoreRequest

## Example Usage

```typescript
import { WriteHealthScoreRequest } from "galileo-generated/models";

let value: WriteHealthScoreRequest = {
  datasetId: "<value>",
  healthScoreType: "<value>",
  score: 6304.9,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `datasetId`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `healthScoreType`        | *string*                 | :heavy_check_mark:       | N/A                      |
| `score`                  | *number*                 | :heavy_check_mark:       | N/A                      |
| `secondary`              | Record<string, *number*> | :heavy_minus_sign:       | N/A                      |