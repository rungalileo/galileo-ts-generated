# PartialExtendedLlmSpanRecordOutputMetricInfo


## Supported Types

### `models.MetricComputing`

```typescript
const value: models.MetricComputing = {
  statusType: "computing",
};
```

### `models.MetricError`

```typescript
const value: models.MetricError = {
  statusType: "error",
};
```

### `models.MetricFailed`

```typescript
const value: models.MetricFailed = {
  statusType: "failed",
};
```

### `models.MetricNotApplicable`

```typescript
const value: models.MetricNotApplicable = {
  statusType: "not_applicable",
};
```

### `models.MetricNotComputed`

```typescript
const value: models.MetricNotComputed = {
  statusType: "not_computed",
};
```

### `models.MetricPending`

```typescript
const value: models.MetricPending = {
  statusType: "pending",
};
```

### `models.MetricRollUpOutput`

```typescript
const value: models.MetricRollUpOutput = {
  statusType: "roll_up",
  value: [
    "6f9ccbc9-0895-46fd-a6e3-78525af28980",
    "6888da8a-b53b-4890-bcc0-3b9e0ab0ce07",
    {
      start: 860498,
      end: 643257,
      value: 302973,
    },
  ],
};
```

### `models.MetricSuccessOutput`

```typescript
const value: models.MetricSuccessOutput = {
  statusType: "success",
  value: {
    rating: {
      feedbackType: "like_dislike",
      value: true,
    },
    createdAt: new Date("2025-12-03T20:20:08.877Z"),
    createdBy: "<value>",
  },
};
```

