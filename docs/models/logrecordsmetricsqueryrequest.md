# LogRecordsMetricsQueryRequest

## Example Usage

```typescript
import { LogRecordsMetricsQueryRequest } from "galileo-generated/models";

let value: LogRecordsMetricsQueryRequest = {
  logStreamId: "00000000-0000-0000-0000-000000000000",
  filters: [
    {
      columnId: "<id>",
      operator: "eq",
      value: "example input",
      caseSensitive: true,
      type: "text",
    },
  ],
  startTime: new Date("2023-10-01T00:00:00Z"),
  endTime: new Date("2023-10-01T01:00:00Z"),
  groupBy: "model",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `logStreamId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Log stream id associated with the traces.                                                     |
| `experimentId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Experiment id associated with the traces.                                                     |
| `metricsTestingId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Metrics testing id associated with the traces.                                                |
| `filters`                                                                                     | *models.LogRecordsMetricsQueryRequestFilter*[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Include traces from this time onward.                                                         |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Include traces up to this time.                                                               |
| `interval`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `groupBy`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |