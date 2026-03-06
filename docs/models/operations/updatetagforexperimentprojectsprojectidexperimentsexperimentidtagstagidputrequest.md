# UpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPutRequest

## Example Usage

```typescript
import {
  UpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPutRequest,
} from "galileo-generated/models/operations";

let value:
  UpdateTagForExperimentProjectsProjectIdExperimentsExperimentIdTagsTagIdPutRequest =
    {
      projectId: "<value>",
      experimentId: "<value>",
      tagId: "<value>",
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
| `tagId`                                                           | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `body`                                                            | [models.RunTagCreateRequest](../../models/runtagcreaterequest.md) | :heavy_check_mark:                                                | N/A                                                               |