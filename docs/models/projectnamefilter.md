# ProjectNameFilter

## Example Usage

```typescript
import { ProjectNameFilter } from "galileo-generated/models";

let value: ProjectNameFilter = {
  name: "name",
  operator: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *"name"*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `operator`                                                                 | [models.ProjectNameFilterOperator](../models/projectnamefilteroperator.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *models.ProjectNameFilterValue*                                            | :heavy_check_mark:                                                         | N/A                                                                        |
| `caseSensitive`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |