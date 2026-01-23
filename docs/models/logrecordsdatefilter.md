# LogRecordsDateFilter

## Example Usage

```typescript
import { LogRecordsDateFilter } from "galileo-generated/models";

let value: LogRecordsDateFilter = {
  columnId: "<id>",
  operator: "lt",
  value: new Date("2025-05-07T02:20:34.719Z"),
  type: "date",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `columnId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the column to filter.                                                                   |
| `operator`                                                                                    | [models.LogRecordsDateFilterOperator](../models/logrecordsdatefilteroperator.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `value`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *"date"*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |