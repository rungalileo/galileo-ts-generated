# MetricThreshold

Threshold configuration for metrics.

Defines how metric values are bucketed and displayed, including whether
lower or higher values are considered better.

## Example Usage

```typescript
import { MetricThreshold } from "galileo-generated/models";

let value: MetricThreshold = {};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `inverted`                                                                                            | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Whether the column should be inverted for thresholds, i.e. if True, lower is better.                  |
| `buckets`                                                                                             | *models.Bucket*[]                                                                                     | :heavy_minus_sign:                                                                                    | Threshold buckets for the column. If the column is a metric, these are the thresholds for the column. |
| `displayValueLevels`                                                                                  | *string*[]                                                                                            | :heavy_minus_sign:                                                                                    | Ordered list of strings that raw values get transformed to for displaying.                            |