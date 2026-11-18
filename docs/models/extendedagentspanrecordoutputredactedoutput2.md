# ExtendedAgentSpanRecordOutputRedactedOutput2

Redacted output of the trace or span.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `models.MessageOutput`

```typescript
const value: models.MessageOutput = {
  content: [
    {
      type: "file",
      fileId: "<value>",
    },
  ],
  role: "assistant",
};
```

### `models.DocumentOutput[]`

```typescript
const value: models.DocumentOutput[] = [];
```

### `models.ExtendedAgentSpanRecordOutputRedactedOutput1[]`

```typescript
const value: models.ExtendedAgentSpanRecordOutputRedactedOutput1[] = [
  {
    type: "text",
    text: "<value>",
  },
];
```

### `models.ControlResult`

```typescript
const value: models.ControlResult = {
  action: "deny",
  matched: true,
};
```

