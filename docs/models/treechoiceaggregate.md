# TreeChoiceAggregate

## Example Usage

```typescript
import { TreeChoiceAggregate } from "galileo-generated/models";

let value: TreeChoiceAggregate = {
  feedbackType: "tree_choice",
  counts: {
    "key": 201355,
  },
  unratedCount: 600646,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `feedbackType`           | *"tree_choice"*          | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |