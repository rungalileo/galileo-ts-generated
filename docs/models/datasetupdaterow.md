# DatasetUpdateRow

## Example Usage

```typescript
import { DatasetUpdateRow } from "galileo-generated/models";

let value: DatasetUpdateRow = {
  rowId: "<value>",
  editType: "update_row",
  values: {},
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `rowId`                                          | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `editType`                                       | *"update_row"*                                   | :heavy_check_mark:                               | N/A                                              |
| `values`                                         | Record<string, *models.DatasetUpdateRowValues2*> | :heavy_check_mark:                               | N/A                                              |