# MetadataFilter

Filters on metadata key-value pairs in scorer jobs.

## Example Usage

```typescript
import { MetadataFilter } from "galileo-generated/models";

let value: MetadataFilter = {
  name: "metadata",
  operator: "ne",
  key: "<key>",
  value: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *"metadata"*                                                         | :heavy_check_mark:                                                   | N/A                                                                  |
| `filterType`                                                         | *"map"*                                                              | :heavy_minus_sign:                                                   | N/A                                                                  |
| `operator`                                                           | [models.MetadataFilterOperator](../models/metadatafilteroperator.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `key`                                                                | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `value`                                                              | *models.MetadataFilterValue*                                         | :heavy_check_mark:                                                   | N/A                                                                  |