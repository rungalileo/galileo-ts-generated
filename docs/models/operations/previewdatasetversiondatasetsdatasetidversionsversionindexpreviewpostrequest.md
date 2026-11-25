# PreviewDatasetVersionDatasetsDatasetIdVersionsVersionIndexPreviewPostRequest

## Example Usage

```typescript
import { PreviewDatasetVersionDatasetsDatasetIdVersionsVersionIndexPreviewPostRequest } from "galileo-generated/models/operations";

let value:
  PreviewDatasetVersionDatasetsDatasetIdVersionsVersionIndexPreviewPostRequest =
    {
      datasetId: "<value>",
      versionIndex: 52033,
      body: {
        mappings: {},
      },
    };
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `datasetId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `versionIndex`                                                                | *number*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `limit`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `cursor`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `body`                                                                        | [models.LunaDatasetPreviewRequest](../../models/lunadatasetpreviewrequest.md) | :heavy_check_mark:                                                            | N/A                                                                           |