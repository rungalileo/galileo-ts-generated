# PromptInjectionScorer

## Example Usage

```typescript
import { PromptInjectionScorer } from "galileo-generated/models";

let value: PromptInjectionScorer = {
  name: "prompt_injection",
  filters: [
    {
      name: "node_name",
      operator: "eq",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *"prompt_injection"*                                                       | :heavy_check_mark:                                                         | N/A                                                                        |
| `filters`                                                                  | *models.PromptInjectionScorerFilter*[]                                     | :heavy_minus_sign:                                                         | List of filters to apply to the scorer.                                    |
| `type`                                                                     | [models.PromptInjectionScorerType](../models/promptinjectionscorertype.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `modelName`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Alias of the model to use for the scorer.                                  |
| `numJudges`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | Number of judges for the scorer.                                           |