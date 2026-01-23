# CreateUserProjectCollaboratorsProjectsProjectIdUsersPostRequest

## Example Usage

```typescript
import { CreateUserProjectCollaboratorsProjectsProjectIdUsersPostRequest } from "galileo-generated/models/operations";

let value: CreateUserProjectCollaboratorsProjectsProjectIdUsersPostRequest = {
  projectId: "<value>",
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
| `projectId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.UserCollaboratorCreate](../../models/usercollaboratorcreate.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |