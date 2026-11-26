# MessageOutput

## Example Usage

```typescript
import { MessageOutput } from "galileo-generated/models";

let value: MessageOutput = {
  content: [
    {
      type: "file",
      fileId: "<value>",
    },
  ],
  role: "assistant",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `content`                                                  | *models.MessageOutputContent2*                             | :heavy_check_mark:                                         | N/A                                                        |
| `role`                                                     | [models.MessageRoleOutput](../models/messageroleoutput.md) | :heavy_check_mark:                                         | N/A                                                        |
| `toolCallId`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `toolCalls`                                                | [models.ToolCall](../models/toolcall.md)[]                 | :heavy_minus_sign:                                         | N/A                                                        |