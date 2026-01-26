# ScorerNameFilter

## Example Usage

```typescript
import { ScorerNameFilter } from "galileo-generated/models";

let value: ScorerNameFilter = {
  name: "name",
  operator: "contains",
  value: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *"name"*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `operator`                                                               | [models.ScorerNameFilterOperator](../models/scorernamefilteroperator.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `value`                                                                  | *models.ScorerNameFilterValue*                                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `caseSensitive`                                                          | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |