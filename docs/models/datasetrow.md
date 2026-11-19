# DatasetRow

## Example Usage

```typescript
import { DatasetRow } from "galileo-generated/models";

let value: DatasetRow = {
  rowId: "<value>",
  index: 763220,
  values: [
    982664,
  ],
  valuesDict: {
    "key": "<value>",
  },
  metadata: {
    createdInVersion: 789960,
    createdAt: new Date("2025-11-12T08:14:12.299Z"),
    createdByUser: {
      id: "<value>",
      email: "Garland.Barton@gmail.com",
    },
    updatedInVersion: 158822,
    updatedAt: new Date("2026-01-25T18:06:49.680Z"),
    updatedByUser: {
      id: "<value>",
      email: "Lenore.Fritsch16@gmail.com",
    },
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `rowId`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `index`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `values`                                                     | *models.DatasetRowValue2*[]                                  | :heavy_check_mark:                                           | N/A                                                          |
| `valuesDict`                                                 | Record<string, *models.ValuesDict2*>                         | :heavy_check_mark:                                           | N/A                                                          |
| `metadata`                                                   | [models.DatasetRowMetadata](../models/datasetrowmetadata.md) | :heavy_check_mark:                                           | N/A                                                          |