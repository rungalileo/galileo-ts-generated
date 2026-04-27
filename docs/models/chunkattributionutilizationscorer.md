# ChunkAttributionUtilizationScorer

## Example Usage

```typescript
import { ChunkAttributionUtilizationScorer } from "galileo-generated/models";

let value: ChunkAttributionUtilizationScorer = {
  name: "chunk_attribution_utilization",
  filters: [
    {
      name: "metadata",
      operator: "ne",
      key: "<key>",
      value: [],
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *"chunk_attribution_utilization"*                                                                  | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `filters`                                                                                          | *models.ChunkAttributionUtilizationScorerFilter*[]                                                 | :heavy_minus_sign:                                                                                 | List of filters to apply to the scorer.                                                            |
| `type`                                                                                             | [models.ChunkAttributionUtilizationScorerType](../models/chunkattributionutilizationscorertype.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `modelName`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Alias of the model to use for the scorer.                                                          |