# SetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPostRequest

## Example Usage

```typescript
import { SetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPostRequest } from "galileo-generated/models/operations";

let value:
  SetTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsPostRequest = {
    projectId: "<value>",
    experimentId: "<value>",
    body: {
      key: "<key>",
      value: "<value>",
      tagType: "<value>",
    },
  };
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `projectId`                                                       | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `experimentId`                                                    | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `body`                                                            | [models.RunTagCreateRequest](../../models/runtagcreaterequest.md) | :heavy_check_mark:                                                | N/A                                                               |