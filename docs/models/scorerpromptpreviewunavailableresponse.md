# ScorerPromptPreviewUnavailableResponse

## Example Usage

```typescript
import { ScorerPromptPreviewUnavailableResponse } from "galileo-generated/models";

let value: ScorerPromptPreviewUnavailableResponse = {
  scorerId: "<id>",
  scorerVersionId: "<id>",
  reason: "run_settings_unavailable",
  message: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `status`                                                                                         | *"unavailable"*                                                                                  | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `scorerId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `scorerVersionId`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `reason`                                                                                         | [models.ScorerPromptPreviewUnavailableReason](../models/scorerpromptpreviewunavailablereason.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `message`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |