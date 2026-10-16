# ListProjectUserCollaboratorsResponse

## Example Usage

```typescript
import { ListProjectUserCollaboratorsResponse } from "galileo-generated/models";

let value: ListProjectUserCollaboratorsResponse = {
  collaborators: [
    {
      id: "<value>",
      role: "editor",
      createdAt: new Date("2026-05-22T15:42:50.855Z"),
      userId: "<value>",
      firstName: null,
      lastName: "Mayert",
      email: "Ervin58@yahoo.com",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `startingToken`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `paginated`                                                              | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `nextStartingToken`                                                      | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `collaborators`                                                          | [models.ProjectUserCollaborator](../models/projectusercollaborator.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |