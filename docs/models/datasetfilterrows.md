# DatasetFilterRows

This global operation filters a set of rows and discard the rest.

## Example Usage

```typescript
import { DatasetFilterRows } from "galileo-generated/models";

let value: DatasetFilterRows = {
  editType: "filter_rows",
  rowIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `editType`         | *"filter_rows"*    | :heavy_check_mark: | N/A                |
| `rowIds`           | *string*[]         | :heavy_check_mark: | N/A                |