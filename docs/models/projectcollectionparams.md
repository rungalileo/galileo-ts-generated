# ProjectCollectionParams

## Example Usage

```typescript
import { ProjectCollectionParams } from "galileo-generated/models";

let value: ProjectCollectionParams = {
  filters: [
    {
      name: "updated_at",
      operator: "gt",
      value: new Date("2025-12-20T06:01:33.020Z"),
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `filters`                                | *models.ProjectCollectionParamsFilter*[] | :heavy_minus_sign:                       | N/A                                      |
| `sort`                                   | *models.ProjectCollectionParamsSort*     | :heavy_minus_sign:                       | N/A                                      |