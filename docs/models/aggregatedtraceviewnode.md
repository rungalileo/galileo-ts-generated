# AggregatedTraceViewNode

## Example Usage

```typescript
import { AggregatedTraceViewNode } from "galileo-generated/models";

let value: AggregatedTraceViewNode = {
  id: "<id>",
  name: "<value>",
  type: "trace",
  occurrences: 485733,
  hasChildren: true,
  metrics: {
    "key": {
      aggregationType: "categorical",
      name: "<value>",
      label: "<value>",
    },
  },
  traceCount: 1220,
  weight: 8121.49,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | Identifier for this grouped graph node within the current response. |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `type`                                                              | [models.StepType](../models/steptype.md)                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `occurrences`                                                       | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `parentId`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `hasChildren`                                                       | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 |
| `metrics`                                                           | Record<string, *models.MetricsUnion*>                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `traceCount`                                                        | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `weight`                                                            | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `insights`                                                          | [models.InsightSummary](../models/insightsummary.md)[]              | :heavy_minus_sign:                                                  | Signals attached to spans represented by this node.                 |