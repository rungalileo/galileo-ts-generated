# ProjectUserCollaborator

## Example Usage

```typescript
import { ProjectUserCollaborator } from "galileo-generated/models";

let value: ProjectUserCollaborator = {
  id: "<value>",
  role: "viewer",
  createdAt: new Date("2025-05-02T03:15:59.929Z"),
  userId: "<value>",
  firstName: "Juana",
  lastName: "Pagac",
  email: "Ibrahim83@gmail.com",
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
| `customAccessLevelId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `customAccessLevel`                                                                           | [models.ProjectCustomAccessLevelSummary](../models/projectcustomaccesslevelsummary.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |