# LogRecordsIDFilter

## Example Usage

```typescript
import { LogRecordsIDFilter } from "galileo-generated/models";

let value: LogRecordsIDFilter = {
  columnId: "<id>",
  value: "<value>",
  type: "id",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `columnId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | ID of the column to filter.                                                  |
| `operator`                                                                   | [models.LogRecordsIDFilterOperator](../models/logrecordsidfilteroperator.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `value`                                                                      | *any*                                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | *"id"*                                                                       | :heavy_check_mark:                                                           | N/A                                                                          |