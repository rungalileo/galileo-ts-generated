# NodeNameFilter

Filters on node names in scorer jobs.

## Example Usage

```typescript
import { NodeNameFilter } from "galileo-generated/models";

let value: NodeNameFilter = {
  name: "node_name",
  operator: "contains",
  value: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *"node_name"*                                                        | :heavy_check_mark:                                                   | N/A                                                                  |
| `operator`                                                           | [models.NodeNameFilterOperator](../models/nodenamefilteroperator.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `value`                                                              | *models.NodeNameFilterValue*                                         | :heavy_check_mark:                                                   | N/A                                                                  |
| `caseSensitive`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |