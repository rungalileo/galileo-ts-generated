# GroundTruthAdherenceScorer

## Example Usage

```typescript
import { GroundTruthAdherenceScorer } from "galileo-generated/models";

let value: GroundTruthAdherenceScorer = {
  name: "ground_truth_adherence",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `name`                                      | *"ground_truth_adherence"*                  | :heavy_check_mark:                          | N/A                                         |
| `filters`                                   | *models.GroundTruthAdherenceScorerFilter*[] | :heavy_minus_sign:                          | List of filters to apply to the scorer.     |
| `type`                                      | *"plus"*                                    | :heavy_minus_sign:                          | N/A                                         |
| `modelName`                                 | *string*                                    | :heavy_minus_sign:                          | Alias of the model to use for the scorer.   |
| `numJudges`                                 | *number*                                    | :heavy_minus_sign:                          | Number of judges for the scorer.            |