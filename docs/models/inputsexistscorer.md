# InputSexistScorer

## Example Usage

```typescript
import { InputSexistScorer } from "galileo-generated/models";

let value: InputSexistScorer = {
  name: "input_sexist",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *"input_sexist"*                                                   | :heavy_check_mark:                                                 | N/A                                                                |
| `filters`                                                          | *models.InputSexistScorerFilter*[]                                 | :heavy_minus_sign:                                                 | List of filters to apply to the scorer.                            |
| `type`                                                             | [models.InputSexistScorerType](../models/inputsexistscorertype.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `modelName`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | Alias of the model to use for the scorer.                          |
| `numJudges`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Number of judges for the scorer.                                   |