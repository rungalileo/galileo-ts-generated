# SyntheticDataSourceDataset

Configuration for dataset examples in synthetic data generation.

## Example Usage

```typescript
import { SyntheticDataSourceDataset } from "galileo-generated/models";

let value: SyntheticDataSourceDataset = {
  datasetId: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `datasetId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `datasetVersionIndex` | *number*              | :heavy_minus_sign:    | N/A                   |
| `rowIds`              | *string*[]            | :heavy_minus_sign:    | N/A                   |