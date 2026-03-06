# InternalToolCall

A tool call executed internally by the model during reasoning.

This represents internal tools like web search, code execution, file search, etc.
that the model invokes (not user-defined functions or MCP tools).

## Example Usage

```typescript
import { InternalToolCall } from "galileo-generated/models";

let value: InternalToolCall = {
  type: "internal_tool_call",
  name: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `type`                                                                            | *"internal_tool_call"*                                                            | :heavy_check_mark:                                                                | N/A                                                                               |
| `id`                                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Unique identifier for the event                                                   |
| `status`                                                                          | [models.EventStatus](../models/eventstatus.md)                                    | :heavy_minus_sign:                                                                | Status of the event                                                               |
| `metadata`                                                                        | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | Provider-specific metadata and additional fields                                  |
| `errorMessage`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | Error message if the event failed                                                 |
| `name`                                                                            | *string*                                                                          | :heavy_check_mark:                                                                | Name of the internal tool (e.g., 'web_search', 'code_interpreter', 'file_search') |
| `input`                                                                           | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | Input/arguments to the tool call                                                  |
| `output`                                                                          | Record<string, *any*>                                                             | :heavy_minus_sign:                                                                | Output/results from the tool call                                                 |