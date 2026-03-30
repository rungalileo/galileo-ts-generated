# ListScorersResponse

## Example Usage

```typescript
import { ListScorersResponse } from "galileo-generated/models";

let value: ListScorersResponse = {
  scorers: [
    {
      id: "<value>",
      name: "<value>",
      scorerType: "luna",
      defaults: {
        filters: [
          {
            name: "metadata",
            operator: "ne",
            key: "<key>",
            value: "<value>",
          },
        ],
      },
      tags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `startingToken`                                        | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `paginated`                                            | *boolean*                                              | :heavy_minus_sign:                                     | N/A                                                    |
| `nextStartingToken`                                    | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `scorers`                                              | [models.ScorerResponse](../models/scorerresponse.md)[] | :heavy_minus_sign:                                     | N/A                                                    |