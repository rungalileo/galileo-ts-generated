# PreviewDatasetDatasetsDatasetIdPreviewPostRequest

## Example Usage

```typescript
import { PreviewDatasetDatasetsDatasetIdPreviewPostRequest } from "galileo-generated/models/operations";

let value: PreviewDatasetDatasetsDatasetIdPreviewPostRequest = {
  datasetId: "<value>",
  body: {
    mappings: [
      {
        sourceColumn: "<value>",
        targetField: "ground_truth",
      },
    ],
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `datasetId`                                                             | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `cursor`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Defaults to 10 for semantic mappings and 100 for legacy column_mapping. |
| `startingToken`                                                         | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `ifMatch`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `body`                                                                  | *operations.PreviewRequest*                                             | :heavy_check_mark:                                                      | N/A                                                                     |