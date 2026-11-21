# ExtendedWorkflowSpanRecordOutputInput2

Input to the trace or span.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `models.MessageOutput[]`

```typescript
const value: models.MessageOutput[] = [
  {
    content: [
      {
        type: "text",
        text: "<value>",
      },
    ],
    role: "agent",
  },
];
```

### `models.ExtendedWorkflowSpanRecordOutputInput1[]`

```typescript
const value: models.ExtendedWorkflowSpanRecordOutputInput1[] = [
  {
    type: "file",
    fileId: "<value>",
  },
];
```

