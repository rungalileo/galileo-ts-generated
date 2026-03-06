# DatasetAppendRow

## Example Usage

```typescript
import { DatasetAppendRow } from "galileo-generated/models";

let value: DatasetAppendRow = {
  editType: "append_row",
  values: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `editType`                                       | *"append_row"*                                   | :heavy_check_mark:                               | N/A                                              |
| `values`                                         | Record<string, *models.DatasetAppendRowValues2*> | :heavy_check_mark:                               | N/A                                              |
| `rowId`                                          | *string*                                         | :heavy_minus_sign:                               | N/A                                              |