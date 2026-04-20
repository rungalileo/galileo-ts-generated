# ContextRelevanceScorer

## Example Usage

```typescript
import { ContextRelevanceScorer } from "galileo-generated/models";

let value: ContextRelevanceScorer = {
  name: "context_relevance",
  filters: [
    {
      name: "node_name",
      operator: "one_of",
      value: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"context_relevance"*                   | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.ContextRelevanceScorerFilter*[] | :heavy_minus_sign:                      | List of filters to apply to the scorer. |