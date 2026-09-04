# UpdateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatchRequest

## Example Usage

```typescript
import { UpdateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatchRequest = {
    projectId: "<value>",
    groupId: "<value>",
    body: {
      role: "viewer",
    },
  };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectId`                                                     | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `groupId`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.CollaboratorUpdate](../../models/collaboratorupdate.md) | :heavy_check_mark:                                              | N/A                                                             |