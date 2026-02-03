# ApiSchemasProjectV2GetProjectsPaginatedResponse

Response model for the V2 projects paginated endpoint.

## Example Usage

```typescript
import { ApiSchemasProjectV2GetProjectsPaginatedResponse } from "galileo-generated/models";

let value: ApiSchemasProjectV2GetProjectsPaginatedResponse = {
  projects: [
    {
      id: "<value>",
      name: "<value>",
      createdAt: new Date("2026-05-04T08:25:22.243Z"),
      updatedAt: new Date("2024-12-01T01:44:14.130Z"),
    },
  ],
  totalCount: 615862,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startingToken`                                  | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `limit`                                          | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `paginated`                                      | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `nextStartingToken`                              | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `projects`                                       | [models.ProjectItem](../models/projectitem.md)[] | :heavy_check_mark:                               | N/A                                              |
| `totalCount`                                     | *number*                                         | :heavy_check_mark:                               | Total number of projects matching the filters.   |