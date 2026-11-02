# AggregatedTraceViewGraph

## Example Usage

```typescript
import { AggregatedTraceViewGraph } from "galileo-generated/models";

let value: AggregatedTraceViewGraph = {
  nodes: [
    {
      id: "<id>",
      name: "<value>",
      type: "retriever",
      occurrences: 256942,
      hasChildren: false,
      metrics: {
        "key": {
          aggregationType: "numeric",
          name: "<value>",
          label: "<value>",
        },
      },
      traceCount: 40720,
      weight: 6780.99,
    },
  ],
  edges: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `nodes`                                                                  | [models.AggregatedTraceViewNode](../models/aggregatedtraceviewnode.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `edges`                                                                  | [models.AggregatedTraceViewEdge](../models/aggregatedtraceviewedge.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `edgeOccurrencesHistogram`                                               | [models.Histogram](../models/histogram.md)                               | :heavy_minus_sign:                                                       | Histogram of edge occurrence counts across the graph                     |