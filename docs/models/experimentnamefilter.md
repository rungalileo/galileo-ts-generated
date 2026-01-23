# ExperimentNameFilter

## Example Usage

```typescript
import { ExperimentNameFilter } from "galileo-generated/models";

let value: ExperimentNameFilter = {
  name: "name",
  operator: "contains",
  value: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *"name"*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `operator`                                                                       | [models.ExperimentNameFilterOperator](../models/experimentnamefilteroperator.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *models.ExperimentNameFilterValue*                                               | :heavy_check_mark:                                                               | N/A                                                                              |
| `caseSensitive`                                                                  | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |