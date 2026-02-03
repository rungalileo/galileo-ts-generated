# DatasetNameFilter

## Example Usage

```typescript
import { DatasetNameFilter } from "galileo-generated/models";

let value: DatasetNameFilter = {
  name: "name",
  operator: "ne",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *"name"*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `operator`                                                                 | [models.DatasetNameFilterOperator](../models/datasetnamefilteroperator.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *models.DatasetNameFilterValue*                                            | :heavy_check_mark:                                                         | N/A                                                                        |
| `caseSensitive`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |