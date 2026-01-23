# DatasetCopyRecordData

Prepend or append trace or span data to dataset.

## Example Usage

```typescript
import { DatasetCopyRecordData } from "galileo-generated/models";

let value: DatasetCopyRecordData = {
  editType: "copy_record_data",
  projectId: "<value>",
  ids: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `editType`                                  | *"copy_record_data"*                        | :heavy_check_mark:                          | N/A                                         |
| `projectId`                                 | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `ids`                                       | *string*[]                                  | :heavy_check_mark:                          | List of trace or span IDs to copy data from |
| `prepend`                                   | *boolean*                                   | :heavy_minus_sign:                          | A flag to control appending vs prepending   |