# ChoiceAggregate

## Example Usage

```typescript
import { ChoiceAggregate } from "galileo-generated/models";

let value: ChoiceAggregate = {
  feedbackType: "choice",
  counts: {
    "key": 525240,
    "key1": 656819,
    "key2": 410116,
  },
  unratedCount: 488982,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `feedbackType`           | *"choice"*               | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |