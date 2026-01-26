# PromptOptimizationConfiguration

Configuration for prompt optimization.

## Example Usage

```typescript
import { PromptOptimizationConfiguration } from "galileo-generated/models";

let value: PromptOptimizationConfiguration = {
  prompt: "<value>",
  evaluationCriteria: "<value>",
  taskDescription: "<value>",
  includesTarget: false,
  numRows: 215877,
  iterations: 396586,
  maxTokens: 17833,
  temperature: 8504.73,
  generationModelAlias: "<value>",
  evaluationModelAlias: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `prompt`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `evaluationCriteria`                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `taskDescription`                                    | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `includesTarget`                                     | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `numRows`                                            | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `iterations`                                         | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `maxTokens`                                          | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `temperature`                                        | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `generationModelAlias`                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `evaluationModelAlias`                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `integrationName`                                    | [models.LLMIntegration](../models/llmintegration.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `reasoningEffort`                                    | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `verbosity`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |