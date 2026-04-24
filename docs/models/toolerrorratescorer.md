# ToolErrorRateScorer

## Example Usage

```typescript
import { ToolErrorRateScorer } from "galileo-generated/models";

let value: ToolErrorRateScorer = {
  name: "tool_error_rate",
  filters: [
    {
      name: "node_name",
      operator: "ne",
      value: "<value>",
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *"tool_error_rate"*                                                    | :heavy_check_mark:                                                     | N/A                                                                    |
| `filters`                                                              | *models.ToolErrorRateScorerFilter*[]                                   | :heavy_minus_sign:                                                     | List of filters to apply to the scorer.                                |
| `type`                                                                 | [models.ToolErrorRateScorerType](../models/toolerrorratescorertype.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `modelName`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Alias of the model to use for the scorer.                              |