# AgenticSessionSuccessScorer

## Example Usage

```typescript
import { AgenticSessionSuccessScorer } from "galileo-generated/models";

let value: AgenticSessionSuccessScorer = {
  name: "agentic_session_success",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *"agentic_session_success"*                                                            | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `filters`                                                                              | *models.AgenticSessionSuccessScorerFilter*[]                                           | :heavy_minus_sign:                                                                     | List of filters to apply to the scorer.                                                |
| `type`                                                                                 | [models.AgenticSessionSuccessScorerType](../models/agenticsessionsuccessscorertype.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `modelName`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | Alias of the model to use for the scorer.                                              |
| `numJudges`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | Number of judges for the scorer.                                                       |