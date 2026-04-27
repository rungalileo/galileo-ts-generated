# ContextAdherenceScorer

## Example Usage

```typescript
import { ContextAdherenceScorer } from "galileo-generated/models";

let value: ContextAdherenceScorer = {
  name: "context_adherence",
  filters: [
    {
      name: "modality",
      operator: "not_in",
      value: "ENUM_VALUE",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *"context_adherence"*                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `filters`                                                                    | *models.ContextAdherenceScorerFilter*[]                                      | :heavy_minus_sign:                                                           | List of filters to apply to the scorer.                                      |
| `type`                                                                       | [models.ContextAdherenceScorerType](../models/contextadherencescorertype.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `modelName`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Alias of the model to use for the scorer.                                    |
| `numJudges`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | Number of judges for the scorer.                                             |