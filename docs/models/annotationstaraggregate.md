# AnnotationStarAggregate

## Example Usage

```typescript
import { AnnotationStarAggregate } from "galileo-generated/models";

let value: AnnotationStarAggregate = {
  annotationType: "star",
  average: 5461.52,
  counts: {
    "key": 632505,
  },
  unratedCount: 503127,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `annotationType`         | *"star"*                 | :heavy_check_mark:       | N/A                      |
| `average`                | *number*                 | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |