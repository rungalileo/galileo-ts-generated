# ListScorersResponse

## Example Usage

```typescript
import { ListScorersResponse } from "galileo-generated/models";

let value: ListScorersResponse = {
  scorers: [
    {
      id: "<value>",
      name: "<value>",
      scorerType: "decision",
      defaults: {
        filters: [
          {
            name: "metadata",
            operator: "regex",
            key: "<key>",
            value: "<value>",
            caseSensitive: true,
          },
        ],
        childSpanFilters: [
          {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
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