# ListProjectGroupCollaboratorsResponse

## Example Usage

```typescript
import { ListProjectGroupCollaboratorsResponse } from "galileo-generated/models";

let value: ListProjectGroupCollaboratorsResponse = {
  collaborators: [
    {
      id: "<value>",
      role: "viewer",
      createdAt: new Date("2025-12-15T05:01:29.337Z"),
      groupId: "<value>",
      groupName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `startingToken`                                                            | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `paginated`                                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `nextStartingToken`                                                        | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `collaborators`                                                            | [models.ProjectGroupCollaborator](../models/projectgroupcollaborator.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |