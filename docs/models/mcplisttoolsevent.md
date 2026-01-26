# MCPListToolsEvent

MCP list tools event - when the model queries available MCP tools.

## Example Usage

```typescript
import { MCPListToolsEvent } from "galileo-generated/models";

let value: MCPListToolsEvent = {
  type: "mcp_list_tools",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"mcp_list_tools"*                               | :heavy_check_mark:                               | N/A                                              |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | Unique identifier for the event                  |
| `status`                                         | [models.EventStatus](../models/eventstatus.md)   | :heavy_minus_sign:                               | Status of the event                              |
| `metadata`                                       | Record<string, *any*>                            | :heavy_minus_sign:                               | Provider-specific metadata and additional fields |
| `errorMessage`                                   | *string*                                         | :heavy_minus_sign:                               | Error message if the event failed                |
| `serverName`                                     | *string*                                         | :heavy_minus_sign:                               | Name of the MCP server                           |
| `tools`                                          | Record<string, *any*>[]                          | :heavy_minus_sign:                               | List of available MCP tools                      |