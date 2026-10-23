# UpdateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatchRequest

## Example Usage

```typescript
import { UpdateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateGroupProjectCollaboratorProjectsProjectIdGroupsGroupIdPatchRequest = {
    projectId: "<value>",
    groupId: "<value>",
    body: {
      role: "owner",
    },
  };
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `groupId`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `body`                                                                        | [models.ProjectCollaboratorUpdate](../../models/projectcollaboratorupdate.md) | :heavy_check_mark:                                                            | N/A                                                                           |