# ListAnnotationQueueCollaboratorsResponse

## Example Usage

```typescript
import { ListAnnotationQueueCollaboratorsResponse } from "galileo-generated/models";

let value: ListAnnotationQueueCollaboratorsResponse = {
  collaborators: [
    {
      id: "<value>",
      role: "owner",
      createdAt: new Date("2025-09-10T14:15:41.899Z"),
      userId: "<value>",
      firstName: "Ebony",
      lastName: "Kerluke",
      email: "Forrest.Haley25@yahoo.com",
      annotationQueueId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `startingToken`                                                                          | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `limit`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `paginated`                                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `nextStartingToken`                                                                      | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `collaborators`                                                                          | [models.UserAnnotationQueueCollaborator](../models/userannotationqueuecollaborator.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |