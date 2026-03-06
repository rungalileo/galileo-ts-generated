# ContextRelevanceScorer

## Example Usage

```typescript
import { ContextRelevanceScorer } from "galileo-generated/models";

let value: ContextRelevanceScorer = {
  name: "context_relevance",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *"context_relevance"*                   | :heavy_check_mark:                      | N/A                                     |
| `filters`                               | *models.ContextRelevanceScorerFilter*[] | :heavy_minus_sign:                      | List of filters to apply to the scorer. |