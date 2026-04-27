# ToolSelectionQualityScorer

## Example Usage

```typescript
import { ToolSelectionQualityScorer } from "galileo-generated/models";

let value: ToolSelectionQualityScorer = {
  name: "tool_selection_quality",
  filters: null,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *"tool_selection_quality"*                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `filters`                                                                            | *models.ToolSelectionQualityScorerFilter*[]                                          | :heavy_minus_sign:                                                                   | List of filters to apply to the scorer.                                              |
| `type`                                                                               | [models.ToolSelectionQualityScorerType](../models/toolselectionqualityscorertype.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `modelName`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | Alias of the model to use for the scorer.                                            |
| `numJudges`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | Number of judges for the scorer.                                                     |