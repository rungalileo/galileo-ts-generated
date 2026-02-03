# MessageEvent

An output message from the model.

## Example Usage

```typescript
import { MessageEvent } from "galileo-generated/models";

let value: MessageEvent = {
  type: "message",
  role: "function",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *"message"*                                                                                            | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Unique identifier for the event                                                                        |
| `status`                                                                                               | [models.EventStatus](../models/eventstatus.md)                                                         | :heavy_minus_sign:                                                                                     | Status of the event                                                                                    |
| `metadata`                                                                                             | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | Provider-specific metadata and additional fields                                                       |
| `errorMessage`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Error message if the event failed                                                                      |
| `role`                                                                                                 | [models.GalileoCoreSchemasLoggingLlmMessageRole](../models/galileocoreschemasloggingllmmessagerole.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `content`                                                                                              | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Text content of the message                                                                            |
| `contentParts`                                                                                         | Record<string, *any*>[]                                                                                | :heavy_minus_sign:                                                                                     | Structured content items (text, audio, images, etc.)                                                   |