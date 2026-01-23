# UpsertDatasetContentRequest

## Example Usage

```typescript
import { UpsertDatasetContentRequest } from "galileo-generated/models";

let value: UpsertDatasetContentRequest = {
  datasetId: "<value>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The ID of the dataset to copy content from.                                                                                                |
| `versionIndex`                                                                                                                             | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The version index of the dataset to copy content from. If not provided, the content will be copied from the latest version of the dataset. |