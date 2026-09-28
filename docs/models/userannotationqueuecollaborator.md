# UserAnnotationQueueCollaborator

User collaborator for an annotation queue, extends shared UserCollaborator with annotation_queue_id.

## Example Usage

```typescript
import { UserAnnotationQueueCollaborator } from "galileo-generated/models";

let value: UserAnnotationQueueCollaborator = {
  id: "<value>",
  role: "viewer",
  createdAt: new Date("2026-03-22T14:00:00.129Z"),
  userId: "<value>",
  firstName: null,
  lastName: "Baumbach",
  email: "Emanuel_Shields-Auer35@gmail.com",
  annotationQueueId: "<value>",
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
| `annotationQueueId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `trackProgress`                                                                               | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `progress`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |