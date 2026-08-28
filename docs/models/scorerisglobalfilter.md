# ScorerIsGlobalFilter

Filters on the access scope tier: is_global=True (global metrics) vs
is_global=False (project-scoped metrics).

## Example Usage

```typescript
import { ScorerIsGlobalFilter } from "galileo-generated/models";

let value: ScorerIsGlobalFilter = {
  name: "is_global",
  value: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *"is_global"*                                                                    | :heavy_check_mark:                                                               | N/A                                                                              |
| `operator`                                                                       | [models.ScorerIsGlobalFilterOperator](../models/scorerisglobalfilteroperator.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `value`                                                                          | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |