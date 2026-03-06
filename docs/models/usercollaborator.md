# UserCollaborator

## Example Usage

```typescript
import { UserCollaborator } from "galileo-generated/models";

let value: UserCollaborator = {
  id: "<value>",
  role: "annotator",
  createdAt: new Date("2026-07-06T21:31:14.401Z"),
  userId: "<value>",
  firstName: "Marion",
  lastName: "Luettgen",
  email: "Anibal.Mayer@gmail.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | [models.CollaboratorRole](../models/collaboratorrole.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |