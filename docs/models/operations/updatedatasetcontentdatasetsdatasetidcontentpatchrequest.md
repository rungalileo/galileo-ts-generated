# UpdateDatasetContentDatasetsDatasetIdContentPatchRequest

## Example Usage

```typescript
import { UpdateDatasetContentDatasetsDatasetIdContentPatchRequest } from "galileo-generated/models/operations";

let value: UpdateDatasetContentDatasetsDatasetIdContentPatchRequest = {
  datasetId: "<value>",
  ifMatch: "d89cce33-549d-4b6d-b220-afb641d859c8",
  body: {
    edits: [
      {
        editType: "prepend_row",
        values: {},
      },
    ],
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `datasetId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |
| `ifMatch`                                                                         | *string*                                                                          | :heavy_minus_sign:                                                                | ETag of the dataset as a version identifier.                                      | d89cce33-549d-4b6d-b220-afb641d859c8                                              |
| `body`                                                                            | [models.UpdateDatasetContentRequest](../../models/updatedatasetcontentrequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |