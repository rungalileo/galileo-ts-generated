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
      name: "<value>",
      label: "<value>",
    },
  },
  traceCount: 405729,
  weight: 12.2,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `type`                                                                   | [models.StepType](../models/steptype.md)                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `occurrences`                                                            | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `parentId`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `hasChildren`                                                            | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `metrics`                                                                | Record<string, [models.SystemMetricInfo](../models/systemmetricinfo.md)> | :heavy_check_mark:                                                       | N/A                                                                      |
| `traceCount`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `weight`                                                                 | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `insights`                                                               | [models.InsightSummary](../models/insightsummary.md)[]                   | :heavy_minus_sign:                                                       | N/A                                                                      |