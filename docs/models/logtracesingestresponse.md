# LogTracesIngestResponse

## Example Usage

```typescript
import { LogTracesIngestResponse } from "galileo-generated/models";

let value: LogTracesIngestResponse = {
  projectId: "<value>",
  projectName: "<value>",
  recordsCount: 465506,
  tracesCount: 377307,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `logStreamId`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | Log stream id associated with the traces.                                                 |
| `experimentId`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | Experiment id associated with the traces.                                                 |
| `metricsTestingId`                                                                        | *string*                                                                                  | :heavy_minus_sign:                                                                        | Metrics testing id associated with the traces.                                            |
| `projectId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | Project id associated with the traces.                                                    |
| `projectName`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | Project name associated with the traces.                                                  |
| `sessionId`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | Session id associated with the traces.                                                    |
| `recordsCount`                                                                            | *number*                                                                                  | :heavy_check_mark:                                                                        | Total number of records ingested                                                          |
| `tracesCount`                                                                             | *number*                                                                                  | :heavy_check_mark:                                                                        | total number of traces ingested                                                           |
| `traceIds`                                                                                | *string*[]                                                                                | :heavy_minus_sign:                                                                        | List of trace IDs that were ingested. Only included if include_trace_ids=True in request. |