# UpdateGroupIntegrationCollaboratorIntegrationsIntegrationIdGroupsGroupIdPatchRequest

## Example Usage

```typescript
import {
  UpdateGroupIntegrationCollaboratorIntegrationsIntegrationIdGroupsGroupIdPatchRequest,
} from "galileo-generated/models/operations";

let value:
  UpdateGroupIntegrationCollaboratorIntegrationsIntegrationIdGroupsGroupIdPatchRequest =
    {
      integrationId: "<value>",
      groupId: "<value>",
      body: {
        role: "viewer",
      },
    };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `integrationId`                                                 | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `groupId`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.CollaboratorUpdate](../../models/collaboratorupdate.md) | :heavy_check_mark:                                              | N/A                                                             |