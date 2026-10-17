# ProjectGroupCollaborator

## Example Usage

```typescript
import { ProjectGroupCollaborator } from "galileo-generated/models";

let value: ProjectGroupCollaborator = {
  id: "<value>",
  role: "custom",
  createdAt: new Date("2026-12-24T20:31:27.145Z"),
  groupId: "<value>",
  groupName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | [models.CollaboratorRole](../models/collaboratorrole.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `groupId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `groupName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customAccessLevelId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `customAccessLevel`                                                                           | [models.ProjectCustomAccessLevelSummary](../models/projectcustomaccesslevelsummary.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |