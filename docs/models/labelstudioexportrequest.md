# LabelStudioExportRequest

Schema for requesting data to be sent to labelstudio.

Coming soon!

## Example Usage

```typescript
import { LabelStudioExportRequest } from "galileo-generated/models";

let value: LabelStudioExportRequest = {
  projectName: "<value>",
  projectId: "<value>",
  runId: "<value>",
  split: "inference",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `task`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `filterParams`                                   | [models.FilterParams](../models/filterparams.md) | :heavy_minus_sign:                               | N/A                                              |
| `compareTo`                                      | [models.Split](../models/split.md)               | :heavy_minus_sign:                               | N/A                                              |
| `mapThreshold`                                   | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `workspace`                                      | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `projectName`                                    | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `projectId`                                      | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `runId`                                          | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `split`                                          | [models.Split](../models/split.md)               | :heavy_check_mark:                               | N/A                                              |
| `inferenceName`                                  | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `labels`                                         | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |