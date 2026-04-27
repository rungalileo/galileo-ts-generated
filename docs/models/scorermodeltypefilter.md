# ScorerModelTypeFilter

## Example Usage

```typescript
import { ScorerModelTypeFilter } from "galileo-generated/models";

let value: ScorerModelTypeFilter = {
  name: "model_type",
  operator: "not_in",
  value: "ENUM_VALUE",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *"model_type"*                                                                     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `operator`                                                                         | [models.ScorerModelTypeFilterOperator](../models/scorermodeltypefilteroperator.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `value`                                                                            | *models.ScorerModelTypeFilterValue*                                                | :heavy_check_mark:                                                                 | N/A                                                                                |