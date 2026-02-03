# RecomputeSettings


## Supported Types

### `models.RecomputeSettingsLogStream`

```typescript
const value: models.RecomputeSettingsLogStream = {
  mode: "log_stream_filters",
  runId: "<value>",
  filters: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

### `models.RecomputeSettingsObserve`

```typescript
const value: models.RecomputeSettingsObserve = {
  mode: "observe_filters",
  filters: [
    "<value 1>",
  ],
};
```

### `models.RecomputeSettingsProject`

```typescript
const value: models.RecomputeSettingsProject = {
  mode: "project",
};
```

### `models.RecomputeSettingsRuns`

```typescript
const value: models.RecomputeSettingsRuns = {
  mode: "runs",
  runIds: [],
};
```

