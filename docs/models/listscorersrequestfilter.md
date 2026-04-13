# ListScorersRequestFilter


## Supported Types

### `models.ScorerCreatedAtFilter`

```typescript
const value: models.ScorerCreatedAtFilter = {
  name: "created_at",
  operator: "ne",
  value: new Date("2025-12-12T14:18:48.091Z"),
};
```

### `models.ScorerCreatorFilter`

```typescript
const value: models.ScorerCreatorFilter = {
  name: "creator",
  value: [],
};
```

### `models.ScorerExcludeMultimodalScorersFilter`

```typescript
const value: models.ScorerExcludeMultimodalScorersFilter = {
  name: "exclude_multimodal_scorers",
};
```

### `models.ScorerExcludeSlmScorersFilter`

```typescript
const value: models.ScorerExcludeSlmScorersFilter = {
  name: "exclude_slm_scorers",
};
```

### `models.ScorerIDFilter`

```typescript
const value: models.ScorerIDFilter = {
  name: "id",
  value: [],
};
```

### `models.ScorerLabelFilter`

```typescript
const value: models.ScorerLabelFilter = {
  name: "label",
  operator: "eq",
  value: "<value>",
};
```

### `models.ScorerModelTypeFilter`

```typescript
const value: models.ScorerModelTypeFilter = {
  name: "model_type",
  operator: "not_in",
  value: "ENUM_VALUE",
};
```

### `models.ScorerNameFilter`

```typescript
const value: models.ScorerNameFilter = {
  name: "name",
  operator: "contains",
  value: "<value>",
};
```

### `models.ScorerScoreableNodeTypesFilter`

```typescript
const value: models.ScorerScoreableNodeTypesFilter = {
  name: "scoreable_node_types",
  operator: "eq",
  value: "<value>",
};
```

### `models.ScorerTypeFilter`

```typescript
const value: models.ScorerTypeFilter = {
  name: "scorer_type",
  operator: "eq",
  value: "ENUM_VALUE",
};
```

### `models.ScorerTagsFilter`

```typescript
const value: models.ScorerTagsFilter = {
  name: "tags",
  operator: "eq",
  value: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.ScorerUpdatedAtFilter`

```typescript
const value: models.ScorerUpdatedAtFilter = {
  name: "updated_at",
  operator: "ne",
  value: new Date("2024-12-15T08:47:56.823Z"),
};
```

