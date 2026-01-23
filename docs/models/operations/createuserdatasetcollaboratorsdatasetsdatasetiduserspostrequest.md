# CreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPostRequest

## Example Usage

```typescript
import { CreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPostRequest } from "galileo-generated/models/operations";

let value: CreateUserDatasetCollaboratorsDatasetsDatasetIdUsersPostRequest = {
  datasetId: "<value>",
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
| `datasetId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.UserCollaboratorCreate](../../models/usercollaboratorcreate.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |