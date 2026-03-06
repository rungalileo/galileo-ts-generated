# ProjectTypeFilter

## Example Usage

```typescript
import { ProjectTypeFilter } from "galileo-generated/models";

let value: ProjectTypeFilter = {
  name: "type",
  operator: "ne",
  value: "ENUM_VALUE",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *"type"*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `operator`                                                                 | [models.ProjectTypeFilterOperator](../models/projecttypefilteroperator.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *models.ProjectTypeFilterValue*                                            | :heavy_check_mark:                                                         | N/A                                                                        |