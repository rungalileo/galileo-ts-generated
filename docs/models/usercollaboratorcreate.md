# UserCollaboratorCreate

Create a user collaborator using either user_id or email.

When using email, if the user doesn't exist in the organization,
they will be invited automatically.

## Example Usage

```typescript
import { UserCollaboratorCreate } from "galileo-generated/models";

let value: UserCollaboratorCreate = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `role`                                                   | [models.CollaboratorRole](../models/collaboratorrole.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `userId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `userEmail`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |