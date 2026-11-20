# LunaDatasetPreview

## Example Usage

```typescript
import { LunaDatasetPreview } from "galileo-generated/models";

let value: LunaDatasetPreview = {
  dataset: {
    kind: "draft",
    datasetId: "<value>",
    draftRevision: "<value>",
  },
  columns: [
    {
      key: "<key>",
      label: "<value>",
      sourceColumns: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
  rows: [],
  totalRowCount: 457538,
  columnCount: 529334,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dataset`                                                                  | *models.Dataset*                                                           | :heavy_check_mark:                                                         | N/A                                                                        |
| `columns`                                                                  | [models.LunaDatasetPreviewColumn](../models/lunadatasetpreviewcolumn.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `rows`                                                                     | [models.LunaDatasetPreviewRow](../models/lunadatasetpreviewrow.md)[]       | :heavy_check_mark:                                                         | N/A                                                                        |
| `totalRowCount`                                                            | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `columnCount`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `nextCursor`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |