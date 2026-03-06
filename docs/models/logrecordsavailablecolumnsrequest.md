# LogRecordsAvailableColumnsRequest

## Example Usage

```typescript
import { LogRecordsAvailableColumnsRequest } from "galileo-generated/models";

let value: LogRecordsAvailableColumnsRequest = {
  logStreamId: "00000000-0000-0000-0000-000000000000",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `logStreamId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Log stream id associated with the traces.                                                     |
| `experimentId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Experiment id associated with the traces.                                                     |
| `metricsTestingId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Metrics testing id associated with the traces.                                                |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |