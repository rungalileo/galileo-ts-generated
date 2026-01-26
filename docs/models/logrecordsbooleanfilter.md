# LogRecordsBooleanFilter

## Example Usage

```typescript
import { LogRecordsBooleanFilter } from "galileo-generated/models";

let value: LogRecordsBooleanFilter = {
  columnId: "<id>",
  value: true,
  type: "boolean",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `columnId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the column to filter.                                                            |
| `operator`                                                                             | [models.LogRecordsBooleanFilterOperator](../models/logrecordsbooleanfilteroperator.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `value`                                                                                | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"boolean"*                                                                            | :heavy_check_mark:                                                                     | N/A                                                                                    |