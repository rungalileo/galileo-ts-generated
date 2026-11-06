# AggregatedTraceViewRequest

## Example Usage

```typescript
import { AggregatedTraceViewRequest } from "galileo-generated/models";

let value: AggregatedTraceViewRequest = {
  logStreamId: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `accessViewId`                                                                | *string*                                                                      | :heavy_minus_sign:                                                            | Assigned log view for restricted access.                                      |
| `logStreamId`                                                                 | *string*                                                                      | :heavy_check_mark:                                                            | Log stream id associated with the traces.                                     |
| `filters`                                                                     | *models.AggregatedTraceViewRequestFilter*[]                                   | :heavy_minus_sign:                                                            | Filters to apply on the traces. Note: Only trace-level filters are supported. |