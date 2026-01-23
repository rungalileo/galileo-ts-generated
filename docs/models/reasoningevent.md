# ReasoningEvent

Internal reasoning/thinking from the model (e.g., OpenAI o1/o3 reasoning tokens).

## Example Usage

```typescript
import { ReasoningEvent } from "galileo-generated/models";

let value: ReasoningEvent = {
  type: "reasoning",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"reasoning"*                                    | :heavy_check_mark:                               | N/A                                              |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | Unique identifier for the event                  |
| `status`                                         | [models.EventStatus](../models/eventstatus.md)   | :heavy_minus_sign:                               | Status of the event                              |
| `metadata`                                       | Record<string, *any*>                            | :heavy_minus_sign:                               | Provider-specific metadata and additional fields |
| `errorMessage`                                   | *string*                                         | :heavy_minus_sign:                               | Error message if the event failed                |
| `content`                                        | *string*                                         | :heavy_minus_sign:                               | The reasoning/thinking content                   |
| `summary`                                        | *models.Summary*                                 | :heavy_minus_sign:                               | Summary of the reasoning                         |