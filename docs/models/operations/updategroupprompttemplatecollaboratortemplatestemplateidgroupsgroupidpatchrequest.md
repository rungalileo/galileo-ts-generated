# UpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatchRequest

## Example Usage

```typescript
import {
  UpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatchRequest,
} from "galileo-generated/models/operations";

let value:
  UpdateGroupPromptTemplateCollaboratorTemplatesTemplateIdGroupsGroupIdPatchRequest =
    {
      templateId: "<value>",
      groupId: "<value>",
      body: {
        role: "owner",
      },
    };
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `templateId`                                                    | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `groupId`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `body`                                                          | [models.CollaboratorUpdate](../../models/collaboratorupdate.md) | :heavy_check_mark:                                              | N/A                                                             |