# ApiSchemasProjectGetProjectsPaginatedResponse

## Example Usage

```typescript
import { ApiSchemasProjectGetProjectsPaginatedResponse } from "galileo-generated/models";

let value: ApiSchemasProjectGetProjectsPaginatedResponse = {
  projects: [
    {
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
      createdAt: new Date("2025-05-25T16:30:58.906Z"),
      updatedAt: new Date("2025-07-26T04:19:39.268Z"),
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `startingToken`                              | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `limit`                                      | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `paginated`                                  | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `nextStartingToken`                          | *number*                                     | :heavy_minus_sign:                           | N/A                                          |
| `projects`                                   | [models.ProjectDB](../models/projectdb.md)[] | :heavy_check_mark:                           | N/A                                          |