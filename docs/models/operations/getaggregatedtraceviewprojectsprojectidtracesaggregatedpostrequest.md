# GetAggregatedTraceViewProjectsProjectIdTracesAggregatedPostRequest

## Example Usage

```typescript
import { GetAggregatedTraceViewProjectsProjectIdTracesAggregatedPostRequest } from "galileo-generated/models/operations";

let value: GetAggregatedTraceViewProjectsProjectIdTracesAggregatedPostRequest =
  {
    projectId: "<value>",
    body: {
      logStreamId: "<value>",
    },
  };
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `projectId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `body`                                                                          | [models.AggregatedTraceViewRequest](../../models/aggregatedtraceviewrequest.md) | :heavy_check_mark:                                                              | N/A                                                                             |