# PreviewDatasetDatasetsDatasetIdPreviewPostResponse

## Example Usage

```typescript
import { PreviewDatasetDatasetsDatasetIdPreviewPostResponse } from "galileo-generated/models/operations";

let value: PreviewDatasetDatasetsDatasetIdPreviewPostResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [],
  },
  result: {
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
    rows: [
      {
        rowRef: "<value>",
        values: {},
      },
    ],
    totalRowCount: 501380,
    columnCount: 666062,
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `headers`                                                       | Record<string, *string*[]>                                      | :heavy_check_mark:                                              | N/A                                                             |
| `result`                                                        | *operations.ResponsePreviewDatasetDatasetsDatasetIdPreviewPost* | :heavy_check_mark:                                              | N/A                                                             |