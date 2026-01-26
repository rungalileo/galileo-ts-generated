# DatasetContent

## Example Usage

```typescript
import { DatasetContent } from "galileo-generated/models";

let value: DatasetContent = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `startingToken`                                | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `limit`                                        | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `paginated`                                    | *boolean*                                      | :heavy_minus_sign:                             | N/A                                            |
| `nextStartingToken`                            | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `columnNames`                                  | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `warningMessage`                               | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `rows`                                         | [models.DatasetRow](../models/datasetrow.md)[] | :heavy_minus_sign:                             | N/A                                            |