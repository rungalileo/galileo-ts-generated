# CompletenessScorer

## Example Usage

```typescript
import { CompletenessScorer } from "galileo-generated/models";

let value: CompletenessScorer = {
  name: "completeness",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *"completeness"*                                                     | :heavy_check_mark:                                                   | N/A                                                                  |
| `filters`                                                            | *models.CompletenessScorerFilter*[]                                  | :heavy_minus_sign:                                                   | List of filters to apply to the scorer.                              |
| `type`                                                               | [models.CompletenessScorerType](../models/completenessscorertype.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `modelName`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | Alias of the model to use for the scorer.                            |
| `numJudges`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Number of judges for the scorer.                                     |