# LogTraceUpdateResponse

## Example Usage

```typescript
import { LogTraceUpdateResponse } from "galileo-generated/models";

let value: LogTraceUpdateResponse = {
  projectId: "<value>",
  projectName: "<value>",
  recordsCount: 755117,
  traceId: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `logStreamId`                                  | *string*                                       | :heavy_minus_sign:                             | Log stream id associated with the traces.      |
| `experimentId`                                 | *string*                                       | :heavy_minus_sign:                             | Experiment id associated with the traces.      |
| `metricsTestingId`                             | *string*                                       | :heavy_minus_sign:                             | Metrics testing id associated with the traces. |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | Project id associated with the traces.         |
| `projectName`                                  | *string*                                       | :heavy_check_mark:                             | Project name associated with the traces.       |
| `sessionId`                                    | *string*                                       | :heavy_minus_sign:                             | Session id associated with the traces.         |
| `recordsCount`                                 | *number*                                       | :heavy_check_mark:                             | Total number of records ingested               |
| `traceId`                                      | *string*                                       | :heavy_check_mark:                             | Trace id associated with the updated trace.    |