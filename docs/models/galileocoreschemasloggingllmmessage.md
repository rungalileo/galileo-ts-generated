# GalileoCoreSchemasLoggingLlmMessage

## Example Usage

```typescript
import { GalileoCoreSchemasLoggingLlmMessage } from "galileo-generated/models";

let value: GalileoCoreSchemasLoggingLlmMessage = {
  content: "<value>",
  role: "function",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `content`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `role`                                                                                                 | [models.GalileoCoreSchemasLoggingLlmMessageRole](../models/galileocoreschemasloggingllmmessagerole.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `toolCallId`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `toolCalls`                                                                                            | [models.ToolCall](../models/toolcall.md)[]                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |