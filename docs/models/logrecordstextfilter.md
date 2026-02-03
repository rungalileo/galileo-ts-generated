# LogRecordsTextFilter

## Example Usage

```typescript
import { LogRecordsTextFilter } from "galileo-generated/models";

let value: LogRecordsTextFilter = {
  columnId: "<id>",
  operator: "one_of",
  value: [],
  type: "text",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `columnId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | ID of the column to filter.                                                      |
| `operator`                                                                       | [models.LogRecordsTextFilterOperator](../models/logrecordstextfilteroperator.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *models.LogRecordsTextFilterValue*                                               | :heavy_check_mark:                                                               | N/A                                                                              |
| `caseSensitive`                                                                  | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | *"text"*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |