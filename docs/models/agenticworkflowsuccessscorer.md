# AgenticWorkflowSuccessScorer

## Example Usage

```typescript
import { AgenticWorkflowSuccessScorer } from "galileo-generated/models";

let value: AgenticWorkflowSuccessScorer = {
  name: "agentic_workflow_success",
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *"agentic_workflow_success"*                                                             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `filters`                                                                                | *models.AgenticWorkflowSuccessScorerFilter*[]                                            | :heavy_minus_sign:                                                                       | List of filters to apply to the scorer.                                                  |
| `type`                                                                                   | [models.AgenticWorkflowSuccessScorerType](../models/agenticworkflowsuccessscorertype.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `modelName`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Alias of the model to use for the scorer.                                                |
| `numJudges`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of judges for the scorer.                                                         |