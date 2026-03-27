# OutputSexistScorer

## Example Usage

```typescript
import { OutputSexistScorer } from "galileo-generated/models";

let value: OutputSexistScorer = {
  name: "output_sexist",
  filters: [
    {
      name: "metadata",
      operator: "eq",
      key: "<key>",
      value: [
        "<value 1>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *"output_sexist"*                                                    | :heavy_check_mark:                                                   | N/A                                                                  |
| `filters`                                                            | *models.OutputSexistScorerFilter*[]                                  | :heavy_minus_sign:                                                   | List of filters to apply to the scorer.                              |
| `type`                                                               | [models.OutputSexistScorerType](../models/outputsexistscorertype.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `modelName`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | Alias of the model to use for the scorer.                            |
| `numJudges`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | Number of judges for the scorer.                                     |