# NodeNameFilter

Filters on node names in scorer jobs.

## Example Usage

```typescript
import { NodeNameFilter } from "galileo-generated/models";

let value: NodeNameFilter = {
  name: "node_name",
  value: "<value>",
  operator: "ne",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *"node_name"*                                                        | :heavy_check_mark:                                                   | N/A                                                                  |
| `filterType`                                                         | *"string"*                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `value`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `operator`                                                           | [models.NodeNameFilterOperator](../models/nodenamefilteroperator.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `caseSensitive`                                                      | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |