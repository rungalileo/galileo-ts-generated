# AggregatedTraceViewResponse

## Example Usage

```typescript
import { AggregatedTraceViewResponse } from "galileo-generated/models";

let value: AggregatedTraceViewResponse = {
  graph: {
    nodes: [
      {
        id: "<id>",
        name: "<value>",
        type: "retriever",
        occurrences: 256942,
        hasChildren: false,
        metrics: {
          "key": {
            name: "<value>",
            label: "<value>",
          },
        },
        traceCount: 870893,
        weight: 407.2,
      },
    ],
    edges: [
      {
        source: "<value>",
        target: "<value>",
        weight: 1839.51,
        occurrences: 165589,
        traceCount: 360800,
        traceIds: [],
      },
    ],
  },
  numTraces: 558078,
  numSessions: 813511,
  hasAllTraces: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `graph`                                                                                       | [models.AggregatedTraceViewGraph](../models/aggregatedtraceviewgraph.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `numTraces`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of traces in the aggregated view                                                       |
| `numSessions`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of sessions in the aggregated view                                                     |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | created_at of earliest record of the aggregated view                                          |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | created_at of latest record of the aggregated view                                            |
| `hasAllTraces`                                                                                | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether all traces were returned                                                              |