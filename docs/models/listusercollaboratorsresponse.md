# ListUserCollaboratorsResponse

## Example Usage

```typescript
import { ListUserCollaboratorsResponse } from "galileo-generated/models";

let value: ListUserCollaboratorsResponse = {
  collaborators: [
    {
      id: "<value>",
      role: "viewer",
      createdAt: new Date("2024-05-18T04:13:26.628Z"),
      userId: "<value>",
      firstName: "Dayne",
      lastName: "Kuhic",
      email: "Camren20@gmail.com",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `startingToken`                                            | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `limit`                                                    | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `paginated`                                                | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `nextStartingToken`                                        | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `collaborators`                                            | [models.UserCollaborator](../models/usercollaborator.md)[] | :heavy_check_mark:                                         | N/A                                                        |