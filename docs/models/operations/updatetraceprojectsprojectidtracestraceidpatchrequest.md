# UpdateTraceProjectsProjectIdTracesTraceIdPatchRequest

## Example Usage

```typescript
import { UpdateTraceProjectsProjectIdTracesTraceIdPatchRequest } from "galileo-generated/models/operations";

let value: UpdateTraceProjectsProjectIdTracesTraceIdPatchRequest = {
  traceId: "<value>",
  projectId: "<value>",
  body: {
    traceId: "<value>",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `traceId`                                                             | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `body`                                                                | [models.LogTraceUpdateRequest](../../models/logtraceupdaterequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |