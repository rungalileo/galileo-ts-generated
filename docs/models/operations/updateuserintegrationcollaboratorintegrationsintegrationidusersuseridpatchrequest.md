# UpdateUserIntegrationCollaboratorIntegrationsIntegrationIdUsersUserIdPatchRequest

## Example Usage

```typescript
import {
  UpdateUserIntegrationCollaboratorIntegrationsIntegrationIdUsersUserIdPatchRequest,
} from "galileo-generated/models/operations";

let value:
  UpdateUserIntegrationCollaboratorIntegrationsIntegrationIdUsersUserIdPatchRequest =
    {
      integrationId: "<value>",
      userId: "<value>",
      body: {
        role: "owner",
      },
    };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `integrationId`                                                 | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `userId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.CollaboratorUpdate](../../models/collaboratorupdate.md) | :heavy_check_mark:                                              | N/A                                                             |