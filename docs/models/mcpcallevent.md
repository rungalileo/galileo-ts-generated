# MCPCallEvent

A Model Context Protocol (MCP) tool call.

MCP is a protocol for connecting LLMs to external tools/data sources.
This is distinct from internal tools because it involves external integrations.

## Example Usage

```typescript
import { MCPCallEvent } from "galileo-generated/models";

let value: MCPCallEvent = {
  type: "mcp_call",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"mcp_call"*                                     | :heavy_check_mark:                               | N/A                                              |
| `id`                                             | *string*                                         | :heavy_minus_sign:                               | Unique identifier for the event                  |
| `status`                                         | [models.EventStatus](../models/eventstatus.md)   | :heavy_minus_sign:                               | Status of the event                              |
| `metadata`                                       | Record<string, *any*>                            | :heavy_minus_sign:                               | Provider-specific metadata and additional fields |
| `errorMessage`                                   | *string*                                         | :heavy_minus_sign:                               | Error message if the event failed                |
| `toolName`                                       | *string*                                         | :heavy_minus_sign:                               | Name of the MCP tool being called                |
| `serverName`                                     | *string*                                         | :heavy_minus_sign:                               | Name of the MCP server                           |
| `arguments`                                      | Record<string, *any*>                            | :heavy_minus_sign:                               | Arguments for the MCP tool call                  |
| `result`                                         | Record<string, *any*>                            | :heavy_minus_sign:                               | Result from the MCP tool call                    |