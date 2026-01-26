# ScorerTagsFilter

## Example Usage

```typescript
import { ScorerTagsFilter } from "galileo-generated/models";

let value: ScorerTagsFilter = {
  name: "tags",
  operator: "eq",
  value: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *"tags"*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `operator`                                                               | [models.ScorerTagsFilterOperator](../models/scorertagsfilteroperator.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `value`                                                                  | *models.ScorerTagsFilterValue*                                           | :heavy_check_mark:                                                       | N/A                                                                      |
| `caseSensitive`                                                          | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |