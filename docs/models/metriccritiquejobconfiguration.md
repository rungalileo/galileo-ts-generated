# MetricCritiqueJobConfiguration

Info necessary to execute a metric critique job.

## Example Usage

```typescript
import { MetricCritiqueJobConfiguration } from "galileo-generated/models";

let value: MetricCritiqueJobConfiguration = {
  projectType: "prompt_evaluation",
  metricName: "<value>",
  critiqueIds: [],
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `projectType`              | *"prompt_evaluation"*      | :heavy_check_mark:         | N/A                        |
| `metricName`               | *string*                   | :heavy_check_mark:         | N/A                        |
| `scorerId`                 | *string*                   | :heavy_minus_sign:         | N/A                        |
| `critiqueIds`              | *string*[]                 | :heavy_check_mark:         | N/A                        |
| `recomputeSettings`        | *models.RecomputeSettings* | :heavy_minus_sign:         | N/A                        |