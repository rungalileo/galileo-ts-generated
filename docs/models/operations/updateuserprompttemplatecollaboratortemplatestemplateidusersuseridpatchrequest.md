# UpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatchRequest

## Example Usage

```typescript
import { UpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateUserPromptTemplateCollaboratorTemplatesTemplateIdUsersUserIdPatchRequest =
    {
      templateId: "<value>",
      userId: "<value>",
      body: {
        role: "viewer",
      },
    };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `templateId`                                                    | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `userId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.CollaboratorUpdate](../../models/collaboratorupdate.md) | :heavy_check_mark:                                              | N/A                                                             |