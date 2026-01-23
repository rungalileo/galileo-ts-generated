# UpdateDatasetContentRequest

This structure represent the valid edits operations that can be performed on a dataset.
There edit operations are:
- Row edits: These edits are performed on a specific row of the dataset.
    - EditMode.id: The edit is performed on the index (numeric index). DEPRECATED
    - EditMode.row_id: The edit is performed on the row_id of the row.
- Global edits: These edits are performed on the entire dataset and should not be mixed with row edits.
    - EditMode.global_edit

## Example Usage

```typescript
import { UpdateDatasetContentRequest } from "galileo-generated/models";

let value: UpdateDatasetContentRequest = {
  edits: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `edits`            | *models.Edit*[]    | :heavy_check_mark: | N/A                |