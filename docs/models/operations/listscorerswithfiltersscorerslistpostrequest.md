# ListScorersWithFiltersScorersListPostRequest

## Example Usage

```typescript
import { ListScorersWithFiltersScorersListPostRequest } from "galileo-generated/models/operations";

let value: ListScorersWithFiltersScorersListPostRequest = {
  body: {
    filters: [
      {
        name: "updated_at",
        operator: "lt",
        value: new Date("2024-12-13T15:03:41.085Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `startingToken`                                                 | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `body`                                                          | [models.ListScorersRequest](../../models/listscorersrequest.md) | :heavy_check_mark:                                              | N/A                                                             |