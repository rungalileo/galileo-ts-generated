# StarAggregate

## Example Usage

```typescript
import { StarAggregate } from "galileo-generated/models";

let value: StarAggregate = {
  feedbackType: "star",
  average: 5449.61,
  counts: {
    "key": 604987,
    "key1": 903253,
  },
  unratedCount: 189177,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `feedbackType`           | *"star"*                 | :heavy_check_mark:       | N/A                      |
| `average`                | *number*                 | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |