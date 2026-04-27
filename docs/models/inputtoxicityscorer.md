# InputToxicityScorer

## Example Usage

```typescript
import { InputToxicityScorer } from "galileo-generated/models";

let value: InputToxicityScorer = {
  name: "input_toxicity",
  filters: [
    {
      name: "node_name",
      operator: "one_of",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *"input_toxicity"*                                                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `filters`                                                              | *models.InputToxicityScorerFilter*[]                                   | :heavy_minus_sign:                                                     | List of filters to apply to the scorer.                                |
| `type`                                                                 | [models.InputToxicityScorerType](../models/inputtoxicityscorertype.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `modelName`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Alias of the model to use for the scorer.                              |
| `numJudges`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | Number of judges for the scorer.                                       |