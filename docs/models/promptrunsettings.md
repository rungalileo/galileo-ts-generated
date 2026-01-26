# PromptRunSettings

Prompt run settings.

## Example Usage

```typescript
import { PromptRunSettings } from "galileo-generated/models";

let value: PromptRunSettings = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `logprobs`                           | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `topLogprobs`                        | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `echo`                               | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `n`                                  | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `reasoningEffort`                    | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `verbosity`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `deploymentName`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `modelAlias`                         | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `temperature`                        | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `maxTokens`                          | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `stopSequences`                      | *string*[]                           | :heavy_minus_sign:                   | N/A                                  |
| `topP`                               | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `topK`                               | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `frequencyPenalty`                   | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `presencePenalty`                    | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `tools`                              | Record<string, *any*>[]              | :heavy_minus_sign:                   | N/A                                  |
| `toolChoice`                         | *models.ToolChoice*                  | :heavy_minus_sign:                   | N/A                                  |
| `responseFormat`                     | Record<string, *string*>             | :heavy_minus_sign:                   | N/A                                  |
| `knownModels`                        | [models.Model](../models/model.md)[] | :heavy_minus_sign:                   | N/A                                  |