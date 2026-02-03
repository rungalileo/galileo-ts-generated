# ListGroupCollaboratorsResponse

## Example Usage

```typescript
import { ListGroupCollaboratorsResponse } from "galileo-generated/models";

let value: ListGroupCollaboratorsResponse = {
  collaborators: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `startingToken`                                              | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `limit`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `paginated`                                                  | *boolean*                                                    | :heavy_minus_sign:                                           | N/A                                                          |
| `nextStartingToken`                                          | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `collaborators`                                              | [models.GroupCollaborator](../models/groupcollaborator.md)[] | :heavy_check_mark:                                           | N/A                                                          |