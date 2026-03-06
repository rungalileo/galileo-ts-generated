# MCPApprovalRequestEvent

MCP approval request - when human approval is needed for an MCP tool call.

## Example Usage

```typescript
import { MCPApprovalRequestEvent } from "galileo-generated/models";

let value: MCPApprovalRequestEvent = {
  type: "mcp_approval_request",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | *"mcp_approval_request"*                          | :heavy_check_mark:                                | N/A                                               |
| `id`                                              | *string*                                          | :heavy_minus_sign:                                | Unique identifier for the event                   |
| `status`                                          | [models.EventStatus](../models/eventstatus.md)    | :heavy_minus_sign:                                | Status of the event                               |
| `metadata`                                        | Record<string, *any*>                             | :heavy_minus_sign:                                | Provider-specific metadata and additional fields  |
| `errorMessage`                                    | *string*                                          | :heavy_minus_sign:                                | Error message if the event failed                 |
| `toolName`                                        | *string*                                          | :heavy_minus_sign:                                | Name of the MCP tool requiring approval           |
| `toolInvocation`                                  | Record<string, *any*>                             | :heavy_minus_sign:                                | Details of the tool invocation requiring approval |
| `approved`                                        | *boolean*                                         | :heavy_minus_sign:                                | Whether the request was approved                  |