# UpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatchRequest

## Example Usage

```typescript
import { UpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatchRequest } from "galileo-generated/models/operations";

let value:
  UpdateAnnotationQueueUserRoleAnnotationQueuesQueueIdUsersUserIdPatchRequest =
    {
      queueId: "<value>",
      userId: "<value>",
      body: {
        role: "annotator",
      },
    };
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `queueId`                                                                                             | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `userId`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `body`                                                                                                | [models.AnnotationQueueUserCollaboratorUpdate](../../models/annotationqueueusercollaboratorupdate.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |