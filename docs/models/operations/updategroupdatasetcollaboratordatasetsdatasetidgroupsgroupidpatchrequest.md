# UpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatchRequest

## Example Usage

```typescript
import { UpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateGroupDatasetCollaboratorDatasetsDatasetIdGroupsGroupIdPatchRequest = {
    datasetId: "<value>",
    groupId: "<value>",
    body: {
      role: "viewer",
    },
  };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `datasetId`                                                     | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `groupId`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.CollaboratorUpdate](../../models/collaboratorupdate.md) | :heavy_check_mark:                                              | N/A                                                             |