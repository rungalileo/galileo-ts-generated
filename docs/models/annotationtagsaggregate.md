# AnnotationTagsAggregate

## Example Usage

```typescript
import { AnnotationTagsAggregate } from "galileo-generated/models";

let value: AnnotationTagsAggregate = {
  annotationType: "tags",
  counts: {
    "key": 781574,
  },
  unratedCount: 37775,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `annotationType`         | *"tags"*                 | :heavy_check_mark:       | N/A                      |
| `counts`                 | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `unratedCount`           | *number*                 | :heavy_check_mark:       | N/A                      |