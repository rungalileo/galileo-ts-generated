# LogRecordsMetricsResponse

## Example Usage

```typescript
import { LogRecordsMetricsResponse } from "galileo-generated/models";

let value: LogRecordsMetricsResponse = {
  groupByColumns: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  aggregateMetrics: {
    "key": 7053.53,
  },
  bucketedMetrics: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `groupByColumns`                                                         | *string*[]                                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `aggregateMetrics`                                                       | Record<string, *models.AggregateMetrics*>                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `bucketedMetrics`                                                        | Record<string, [models.BucketedMetrics](../models/bucketedmetrics.md)[]> | :heavy_check_mark:                                                       | N/A                                                                      |