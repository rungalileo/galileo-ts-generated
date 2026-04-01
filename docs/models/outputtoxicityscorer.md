# OutputToxicityScorer

## Example Usage

```typescript
import { OutputToxicityScorer } from "galileo-generated/models";

let value: OutputToxicityScorer = {
  name: "output_toxicity",
  filters: [
    {
      name: "metadata",
      operator: "eq",
      key: "<key>",
      value: [],
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *"output_toxicity"*                                                      | :heavy_check_mark:                                                       | N/A                                                                      |
| `filters`                                                                | *models.OutputToxicityScorerFilter*[]                                    | :heavy_minus_sign:                                                       | List of filters to apply to the scorer.                                  |
| `type`                                                                   | [models.OutputToxicityScorerType](../models/outputtoxicityscorertype.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `modelName`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | Alias of the model to use for the scorer.                                |
| `numJudges`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | Number of judges for the scorer.                                         |