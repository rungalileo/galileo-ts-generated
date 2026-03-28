# ScorerLabelFilter

## Example Usage

```typescript
import { ScorerLabelFilter } from "galileo-generated/models";

let value: ScorerLabelFilter = {
  name: "label",
  operator: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *"label"*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `operator`                                                                 | [models.ScorerLabelFilterOperator](../models/scorerlabelfilteroperator.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `value`                                                                    | *models.ScorerLabelFilterValue*                                            | :heavy_check_mark:                                                         | N/A                                                                        |
| `caseSensitive`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `strict`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |