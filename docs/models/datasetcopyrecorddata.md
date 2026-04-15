# DatasetCopyRecordData

Prepend or append trace or span data to dataset.

## Example Usage

```typescript
import { DatasetCopyRecordData } from "galileo-generated/models";

let value: DatasetCopyRecordData = {
  editType: "copy_record_data",
  ids: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `editType`                                                                                                     | *"copy_record_data"*                                                                                           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `projectId`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `queueId`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `ids`                                                                                                          | *string*[]                                                                                                     | :heavy_check_mark:                                                                                             | List of trace or span IDs to copy data from                                                                    |
| `prepend`                                                                                                      | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | A flag to control appending vs prepending                                                                      |
| `useGeneratedOutputColumn`                                                                                     | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | If True, write trace output to generated_output column; if False, write to output column (backward compatible) |