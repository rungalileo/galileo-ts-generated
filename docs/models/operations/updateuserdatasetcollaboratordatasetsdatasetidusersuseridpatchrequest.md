# UpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatchRequest

## Example Usage

```typescript
import { UpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateUserDatasetCollaboratorDatasetsDatasetIdUsersUserIdPatchRequest = {
    datasetId: "<value>",
    userId: "<value>",
    body: {
      role: "owner",
    },
  };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `datasetId`                                                     | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `userId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.CollaboratorUpdate](../../models/collaboratorupdate.md) | :heavy_check_mark:                                              | N/A                                                             |