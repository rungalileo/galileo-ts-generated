# UpdateUserProjectCollaboratorProjectsProjectIdUsersUserIdPatchRequest

## Example Usage

```typescript
import { UpdateUserProjectCollaboratorProjectsProjectIdUsersUserIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateUserProjectCollaboratorProjectsProjectIdUsersUserIdPatchRequest = {
    projectId: "<value>",
    userId: "<value>",
    body: {
      role: "owner",
    },
  };
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `userId`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `body`                                                                        | [models.ProjectCollaboratorUpdate](../../models/projectcollaboratorupdate.md) | :heavy_check_mark:                                                            | N/A                                                                           |