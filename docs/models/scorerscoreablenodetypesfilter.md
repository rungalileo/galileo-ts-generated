# ScorerScoreableNodeTypesFilter

## Example Usage

```typescript
import { ScorerScoreableNodeTypesFilter } from "galileo-generated/models";

let value: ScorerScoreableNodeTypesFilter = {
  name: "scoreable_node_types",
  operator: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *"scoreable_node_types"*                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `operator`                                                                                           | [models.ScorerScoreableNodeTypesFilterOperator](../models/scorerscoreablenodetypesfilteroperator.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `value`                                                                                              | *models.ScorerScoreableNodeTypesFilterValue*                                                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `caseSensitive`                                                                                      | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |