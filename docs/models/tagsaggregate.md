# TagsAggregate

## Example Usage

```typescript
import { TagsAggregate } from "galileo-generated/models";

let value: TagsAggregate = {
  feedbackType: "tags",
  counts: {
    "key": 290442,
  },
  unratedCount: 221867,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `feedbackType`           | *"tags"*                 | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |