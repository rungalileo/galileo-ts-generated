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
| `emsCapturedError`                                                       | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether any EMS error codes were encountered in the queried metrics      |
| `standardErrors`                                                         | Record<string, [models.StandardError](../models/standarderror.md)>       | :heavy_minus_sign:                                                       | Structured EMS errors for each error code encountered, keyed by code     |