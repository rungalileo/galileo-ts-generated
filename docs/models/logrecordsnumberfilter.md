# LogRecordsNumberFilter

## Example Usage

```typescript
import { LogRecordsNumberFilter } from "galileo-generated/models";

let value: LogRecordsNumberFilter = {
  columnId: "<id>",
  operator: "between",
  value: [],
  type: "number",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `columnId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the column to filter.                                                          |
| `operator`                                                                           | [models.LogRecordsNumberFilterOperator](../models/logrecordsnumberfilteroperator.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `value`                                                                              | *models.LogRecordsNumberFilterValue*                                                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `type`                                                                               | *"number"*                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |