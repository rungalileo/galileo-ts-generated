# LogStreamNameFilter

## Example Usage

```typescript
import { LogStreamNameFilter } from "galileo-generated/models";

let value: LogStreamNameFilter = {
  name: "name",
  operator: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *"name"*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `operator`                                                                     | [models.LogStreamNameFilterOperator](../models/logstreamnamefilteroperator.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `value`                                                                        | *models.LogStreamNameFilterValue*                                              | :heavy_check_mark:                                                             | N/A                                                                            |
| `caseSensitive`                                                                | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |