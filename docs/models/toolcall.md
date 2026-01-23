# ToolCall

## Example Usage

```typescript
import { ToolCall } from "galileo-generated/models";

let value: ToolCall = {
  id: "<id>",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `id`                                                     | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `function`                                               | [models.ToolCallFunction](../models/toolcallfunction.md) | :heavy_check_mark:                                       | N/A                                                      |