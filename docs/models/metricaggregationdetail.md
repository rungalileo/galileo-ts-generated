# MetricAggregationDetail

## Example Usage

```typescript
import { MetricAggregationDetail } from "galileo-generated/models";

let value: MetricAggregationDetail = {
  id: "<id>",
  metricName: "<value>",
  aggregation: "P95",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Identifier for the metric in the response (e.g., 'w1', 'w2') |
| `metricName`                                                 | *string*                                                     | :heavy_check_mark:                                           | Name of the metric to aggregate                              |
| `aggregation`                                                | [models.MetricAggregation](../models/metricaggregation.md)   | :heavy_check_mark:                                           | N/A                                                          |