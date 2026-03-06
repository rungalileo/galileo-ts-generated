# UpdateSpanProjectsProjectIdSpansSpanIdPatchRequest

## Example Usage

```typescript
import { UpdateSpanProjectsProjectIdSpansSpanIdPatchRequest } from "galileo-generated/models/operations";

let value: UpdateSpanProjectsProjectIdSpansSpanIdPatchRequest = {
  spanId: "<value>",
  projectId: "<value>",
  body: {
    spanId: "<value>",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `spanId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `projectId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | [models.LogSpanUpdateRequest](../../models/logspanupdaterequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |