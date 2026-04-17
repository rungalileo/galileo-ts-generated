# ValidateLLMScorerLogRecordRequestFilter


## Supported Types

### `models.LogRecordsBooleanFilter`

```typescript
const value: models.LogRecordsBooleanFilter = {
  columnId: "<id>",
  value: true,
  type: "boolean",
};
```

### `models.LogRecordsCollectionFilter`

```typescript
const value: models.LogRecordsCollectionFilter = {
  columnId: "<id>",
  operator: "not_in",
  value: "<value>",
  type: "collection",
};
```

### `models.LogRecordsDateFilter`

```typescript
const value: models.LogRecordsDateFilter = {
  columnId: "<id>",
  operator: "lt",
  value: new Date("2025-05-07T02:20:34.719Z"),
  type: "date",
};
```

### `models.LogRecordsFullyAnnotatedFilter`

```typescript
const value: models.LogRecordsFullyAnnotatedFilter = {
  type: "fully_annotated",
};
```

### `models.LogRecordsIDFilter`

```typescript
const value: models.LogRecordsIDFilter = {
  columnId: "<id>",
  value: "<value>",
  type: "id",
};
```

### `models.LogRecordsNumberFilter`

```typescript
const value: models.LogRecordsNumberFilter = {
  columnId: "<id>",
  operator: "between",
  value: [],
  type: "number",
};
```

### `models.LogRecordsTextFilter`

```typescript
const value: models.LogRecordsTextFilter = {
  columnId: "<id>",
  operator: "one_of",
  value: [],
  type: "text",
};
```

