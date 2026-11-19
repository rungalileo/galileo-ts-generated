# ProjectDB

## Example Usage

```typescript
import { ProjectDB } from "galileo-generated/models";

let value: ProjectDB = {
  id: "<value>",
  createdBy: "<value>",
  createdByUser: {
    id: "<value>",
    email: "Garland.Barton@gmail.com",
  },
  runs: [
    {
      createdBy: "<value>",
      numSamples: 503861,
      winner: true,
      id: "<value>",
      createdAt: new Date("2026-07-28T08:12:47.036Z"),
      updatedAt: new Date("2026-09-17T02:38:40.669Z"),
      lastUpdatedBy: "<value>",
      creator: {
        id: "<value>",
        email: "Fannie21@hotmail.com",
        organizationId: "<value>",
        organizationName: "<value>",
        createdAt: new Date("2026-12-16T08:21:29.962Z"),
        updatedAt: new Date("2024-01-30T09:49:31.375Z"),
      },
    },
  ],
  createdAt: new Date("2024-10-17T06:37:43.576Z"),
  updatedAt: new Date("2024-11-16T06:32:50.784Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | [models.Permission](../models/permission.md)[]                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [models.ProjectType](../models/projecttype.md)                                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdByUser`                                                                               | [models.UserInfo](../models/userinfo.md)                                                      | :heavy_check_mark:                                                                            | A user's basic information, used for display purposes.                                        |
| `runs`                                                                                        | [models.RunDB](../models/rundb.md)[]                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `bookmark`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `labels`                                                                                      | [models.ProjectLabels](../models/projectlabels.md)[]                                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |