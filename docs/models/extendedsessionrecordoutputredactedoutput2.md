# ExtendedSessionRecordOutputRedactedOutput2

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

### `models.ExtendedSessionRecordOutputRedactedOutput1[]`

```typescript
const value: models.ExtendedSessionRecordOutputRedactedOutput1[] = [];
```

### `models.ControlResult`

```typescript
const value: models.ControlResult = {
  action: "deny",
  matched: true,
};
```

