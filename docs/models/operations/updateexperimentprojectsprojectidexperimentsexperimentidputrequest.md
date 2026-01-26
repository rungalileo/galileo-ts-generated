# UpdateExperimentProjectsProjectIdExperimentsExperimentIdPutRequest

## Example Usage

```typescript
import { UpdateExperimentProjectsProjectIdExperimentsExperimentIdPutRequest } from "galileo-generated/models/operations";

let value: UpdateExperimentProjectsProjectIdExperimentsExperimentIdPutRequest =
  {
    experimentId: "<value>",
    projectId: "<value>",
    body: {
      name: "<value>",
    },
  };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `experimentId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `projectId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.ExperimentUpdateRequest](../../models/experimentupdaterequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |