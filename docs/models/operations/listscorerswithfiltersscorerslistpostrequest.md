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
| `actions`                                                       | [models.ScorerAction](../../models/scoreraction.md)[]           | :heavy_minus_sign:                                              | Actions to include in the 'permissions' field of the scorers.   |
| `startingToken`                                                 | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `body`                                                          | [models.ListScorersRequest](../../models/listscorersrequest.md) | :heavy_check_mark:                                              | N/A                                                             |