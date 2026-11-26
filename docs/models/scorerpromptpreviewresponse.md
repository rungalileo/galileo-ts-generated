# ScorerPromptPreviewResponse

## Example Usage

```typescript
import { ScorerPromptPreviewResponse } from "galileo-generated/models";

let value: ScorerPromptPreviewResponse = {
  scorerId: "<id>",
  scorerVersionId: "<id>",
  messages: [
    {
      role: "<value>",
      content: "<value>",
    },
  ],
  normalizedInput: [
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {},
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `status`                                                                        | *"available"*                                                                   | :heavy_minus_sign:                                                              | N/A                                                                             |
| `label`                                                                         | *"Reconstructed evaluator prompt"*                                              | :heavy_minus_sign:                                                              | N/A                                                                             |
| `description`                                                                   | *"Uses the selected evaluator version with current run settings and log data."* | :heavy_minus_sign:                                                              | N/A                                                                             |
| `scorerId`                                                                      | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `scorerVersionId`                                                               | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `messages`                                                                      | [models.ScorerPromptMessage](../models/scorerpromptmessage.md)[]                | :heavy_check_mark:                                                              | N/A                                                                             |
| `normalizedInput`                                                               | Record<string, *any*>[]                                                         | :heavy_check_mark:                                                              | N/A                                                                             |