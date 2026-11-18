# PromptInjectionScorerFilter


## Supported Types

### `models.MetadataFilter`

```typescript
const value: models.MetadataFilter = {
  name: "metadata",
  operator: "regex",
  key: "<key>",
  value: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ModalityFilter`

```typescript
const value: models.ModalityFilter = {
  name: "modality",
  operator: "not_in",
  value: "ENUM_VALUE",
};
```

### `models.NodeNameFilter`

```typescript
const value: models.NodeNameFilter = {
  name: "node_name",
  operator: "regex",
  value: [
    "<value 1>",
  ],
};
```

