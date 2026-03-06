# ProjectDBThin

## Example Usage

```typescript
import { ProjectDBThin } from "galileo-generated/models";

let value: ProjectDBThin = {
  id: "<value>",
  createdBy: "<value>",
  runs: [
    {
      createdBy: "<value>",
      numSamples: 781002,
      winner: false,
      id: "<value>",
      createdAt: new Date("2024-02-26T12:58:32.531Z"),
      updatedAt: new Date("2025-06-15T11:55:35.444Z"),
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
  createdAt: new Date("2025-11-25T13:00:54.561Z"),
  updatedAt: new Date("2025-10-21T04:44:46.407Z"),
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
| `runs`                                                                                        | [models.RunDBThin](../models/rundbthin.md)[]                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `bookmark`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |