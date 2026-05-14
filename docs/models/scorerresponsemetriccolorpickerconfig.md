# ScorerResponseMetricColorPickerConfig


## Supported Types

### `models.MetricColorPickerBoolean`

```typescript
const value: models.MetricColorPickerBoolean = {
  type: "boolean",
  constraints: [
    {
      color: "red",
      operator: "eq",
      value: false,
    },
  ],
};
```

### `models.MetricColorPickerCategorical`

```typescript
const value: models.MetricColorPickerCategorical = {
  type: "categorical",
  constraints: [
    {
      color: "green",
      operator: "eq",
      value: [],
    },
  ],
};
```

### `models.MetricColorPickerMultiLabel`

```typescript
const value: models.MetricColorPickerMultiLabel = {
  type: "multi_label",
  constraints: [
    {
      color: "green",
      operator: "eq",
      value: [],
    },
  ],
};
```

### `models.MetricColorPickerNumeric`

```typescript
const value: models.MetricColorPickerNumeric = {
  type: "numeric",
  constraints: [
    {
      color: "red",
      operator: "gte",
      value: [],
    },
  ],
};
```

