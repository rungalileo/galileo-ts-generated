# ListScorersRequest

## Example Usage

```typescript
import { ListScorersRequest } from "galileo-generated/models";

let value: ListScorersRequest = {
  filters: [
    {
      name: "updated_at",
      operator: "eq",
      value: new Date("2026-08-22T14:12:27.963Z"),
    },
  ],
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `filters`                           | *models.ListScorersRequestFilter*[] | :heavy_minus_sign:                  | N/A                                 |
| `sort`                              | *models.ListScorersRequestSort*     | :heavy_minus_sign:                  | N/A                                 |