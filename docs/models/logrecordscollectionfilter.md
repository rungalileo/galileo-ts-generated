# LogRecordsCollectionFilter

## Example Usage

```typescript
import { LogRecordsCollectionFilter } from "galileo-generated/models";

let value: LogRecordsCollectionFilter = {
  columnId: "<id>",
  operator: "not_in",
  value: "<value>",
  type: "collection",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `columnId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the column to filter.                                                                  |
| `operator`                                                                                   | [models.LogRecordsCollectionFilterOperator](../models/logrecordscollectionfilteroperator.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *models.LogRecordsCollectionFilterValue*                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `caseSensitive`                                                                              | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `type`                                                                                       | *"collection"*                                                                               | :heavy_check_mark:                                                                           | N/A                                                                                          |