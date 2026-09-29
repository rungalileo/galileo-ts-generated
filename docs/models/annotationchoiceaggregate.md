# AnnotationChoiceAggregate

## Example Usage

```typescript
import { AnnotationChoiceAggregate } from "galileo-generated/models";

let value: AnnotationChoiceAggregate = {
  annotationType: "choice",
  counts: {
    "key": 88702,
    "key1": 959252,
  },
  unratedCount: 293555,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `annotationType`         | *"choice"*               | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |