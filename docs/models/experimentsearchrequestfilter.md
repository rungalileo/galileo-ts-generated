# ExperimentSearchRequestFilter


## Supported Types

### `models.ExperimentCreatedAtFilter`

```typescript
const value: models.ExperimentCreatedAtFilter = {
  name: "created_at",
  operator: "ne",
  value: new Date("2026-12-07T11:55:26.708Z"),
};
```

### `models.ExperimentCreatedByFilter`

```typescript
const value: models.ExperimentCreatedByFilter = {
  name: "created_by",
  value: "<value>",
};
```

### `models.ExperimentIDFilter`

```typescript
const value: models.ExperimentIDFilter = {
  name: "id",
  value: [],
};
```

### `models.ExperimentNameFilter`

```typescript
const value: models.ExperimentNameFilter = {
  name: "name",
  operator: "contains",
  value: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.ExperimentUpdatedAtFilter`

```typescript
const value: models.ExperimentUpdatedAtFilter = {
  name: "updated_at",
  operator: "lte",
  value: new Date("2025-05-24T06:11:10.252Z"),
};
```

