# CategoricalMetricInfo

## Example Usage

```typescript
import { CategoricalMetricInfo } from "galileo-generated/models";

let value: CategoricalMetricInfo = {
  aggregationType: "categorical",
  name: "<value>",
  label: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `aggregationType`                                                 | *"categorical"*                                                   | :heavy_check_mark:                                                | Discriminator: categorical metrics aggregated as per-label counts |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | Unique identifier for the metric                                  |
| `label`                                                           | *string*                                                          | :heavy_check_mark:                                                | Human-readable display name for the metric                        |
| `categoryCounts`                                                  | Record<string, *number*>                                          | :heavy_minus_sign:                                                | Count of occurrences per category label across records            |