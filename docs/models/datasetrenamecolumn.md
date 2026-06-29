# DatasetRenameColumn

Rename a column in the dataset schema, preserving values.

## Example Usage

```typescript
import { DatasetRenameColumn } from "galileo-generated/models";

let value: DatasetRenameColumn = {
  editType: "rename_column",
  columnName: "<value>",
  newColumnName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `editType`         | *"rename_column"*  | :heavy_check_mark: | N/A                |
| `columnName`       | *string*           | :heavy_check_mark: | N/A                |
| `newColumnName`    | *string*           | :heavy_check_mark: | N/A                |