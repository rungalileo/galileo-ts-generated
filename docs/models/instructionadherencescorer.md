# InstructionAdherenceScorer

## Example Usage

```typescript
import { InstructionAdherenceScorer } from "galileo-generated/models";

let value: InstructionAdherenceScorer = {
  name: "instruction_adherence",
  filters: [
    {
      name: "modality",
      operator: "eq",
      value: "ENUM_VALUE",
    },
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `name`                                      | *"instruction_adherence"*                   | :heavy_check_mark:                          | N/A                                         |
| `filters`                                   | *models.InstructionAdherenceScorerFilter*[] | :heavy_minus_sign:                          | List of filters to apply to the scorer.     |
| `type`                                      | *"plus"*                                    | :heavy_minus_sign:                          | N/A                                         |
| `modelName`                                 | *string*                                    | :heavy_minus_sign:                          | Alias of the model to use for the scorer.   |
| `numJudges`                                 | *number*                                    | :heavy_minus_sign:                          | Number of judges for the scorer.            |