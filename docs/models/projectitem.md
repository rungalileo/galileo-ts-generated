# ProjectItem

Represents a single project item for the UI list.

## Example Usage

```typescript
import { ProjectItem } from "galileo-generated/models";

let value: ProjectItem = {
  id: "<value>",
  name: "<value>",
  createdAt: new Date("2025-02-22T20:06:22.888Z"),
  updatedAt: new Date("2025-12-02T13:31:47.628Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `bookmark`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numLogstreams`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Count of runs with task_type=15                                                               |
| `numExperiments`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | Count of runs with task_type=16                                                               |
| `createdByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `labels`                                                                                      | [models.ProjectLabels](../models/projectlabels.md)[]                                          | :heavy_minus_sign:                                                                            | List of labels associated with the project.                                                   |