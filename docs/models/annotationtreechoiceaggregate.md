# AnnotationTreeChoiceAggregate

## Example Usage

```typescript
import { AnnotationTreeChoiceAggregate } from "galileo-generated/models";

let value: AnnotationTreeChoiceAggregate = {
  annotationType: "tree_choice",
  counts: {
    "key": 889893,
    "key1": 444064,
    "key2": 859189,
  },
  unratedCount: 954786,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `annotationType`         | *"tree_choice"*          | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |