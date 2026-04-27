# ListScorersWithFiltersScorersListPostRequest

## Example Usage

```typescript
import { ListScorersWithFiltersScorersListPostRequest } from "galileo-generated/models/operations";

let value: ListScorersWithFiltersScorersListPostRequest = {
  body: {
    filters: [
      {
        name: "tags",
        operator: "one_of",
        value: "<value>",
        caseSensitive: true,
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