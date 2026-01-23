# BucketedMetric

## Example Usage

```typescript
import { BucketedMetric } from "galileo-generated/models";

let value: BucketedMetric = {
  name: "<value>",
  buckets: {
    "key": 323748,
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `buckets`                | Record<string, *number*> | :heavy_check_mark:       | N/A                      |
| `average`                | *number*                 | :heavy_minus_sign:       | N/A                      |