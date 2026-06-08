# DatasetRemoveColumn

Drop a column from the dataset schema.

## Example Usage

```typescript
import { DatasetRemoveColumn } from "galileo-generated/models";

let value: DatasetRemoveColumn = {
  editType: "remove_column",
  columnName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `editType`         | *"remove_column"*  | :heavy_check_mark: | N/A                |
| `columnName`       | *string*           | :heavy_check_mark: | N/A                |