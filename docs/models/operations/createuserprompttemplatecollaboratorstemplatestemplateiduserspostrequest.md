# CreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPostRequest

## Example Usage

```typescript
import { CreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPostRequest } from "galileo-generated/models/operations";

let value:
  CreateUserPromptTemplateCollaboratorsTemplatesTemplateIdUsersPostRequest = {
    templateId: "<value>",
    body: [
      {
        userId: "<value>",
      },
    ],
  };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `templateId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.UserCollaboratorCreate](../../models/usercollaboratorcreate.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |