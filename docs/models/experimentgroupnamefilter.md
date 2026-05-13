# ExperimentGroupNameFilter

## Example Usage

```typescript
import { ExperimentGroupNameFilter } from "galileo-generated/models";

let value: ExperimentGroupNameFilter = {
  name: "experiment_group_name",
  operator: "eq",
  value: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *"experiment_group_name"*                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `operator`                                                                                 | [models.ExperimentGroupNameFilterOperator](../models/experimentgroupnamefilteroperator.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `value`                                                                                    | *models.ExperimentGroupNameFilterValue*                                                    | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `caseSensitive`                                                                            | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |