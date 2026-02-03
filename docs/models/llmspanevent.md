# LlmSpanEvent


## Supported Types

### `models.ImageGenerationEvent`

```typescript
const value: models.ImageGenerationEvent = {
  type: "image_generation",
};
```

### `models.InternalToolCall`

```typescript
const value: models.InternalToolCall = {
  type: "internal_tool_call",
  name: "<value>",
};
```

### `models.MCPApprovalRequestEvent`

```typescript
const value: models.MCPApprovalRequestEvent = {
  type: "mcp_approval_request",
};
```

### `models.MCPCallEvent`

```typescript
const value: models.MCPCallEvent = {
  type: "mcp_call",
};
```

### `models.MCPListToolsEvent`

```typescript
const value: models.MCPListToolsEvent = {
  type: "mcp_list_tools",
};
```

### `models.MessageEvent`

```typescript
const value: models.MessageEvent = {
  type: "message",
  role: "function",
};
```

### `models.ReasoningEvent`

```typescript
const value: models.ReasoningEvent = {
  type: "reasoning",
};
```

### `models.WebSearchCallEvent`

```typescript
const value: models.WebSearchCallEvent = {
  type: "web_search_call",
  action: {
    type: "search",
  },
};
```

