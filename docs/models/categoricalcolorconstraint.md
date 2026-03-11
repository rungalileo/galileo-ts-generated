# CategoricalColorConstraint

A color constraint for categorical or multi-label metric values.

Assigns a color when a categorical score matches the given operator and value.

Operators and expected value shapes:
  - eq: value must be a single string.
  - one_of: value must be a list of strings.

Example:
    {"color": "green", "operator": "eq", "value": "pass"}
    {"color": "red", "operator": "one_of", "value": ["fail", "error"]}

## Example Usage

```typescript
import { CategoricalColorConstraint } from "galileo-generated/models";

let value: CategoricalColorConstraint = {
  color: "yellow",
  operator: "eq",
  value: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `color`                                                                                      | [models.MetricColor](../models/metriccolor.md)                                               | :heavy_check_mark:                                                                           | Allowed colors for metric threshold visualization in the UI.                                 |
| `operator`                                                                                   | [models.CategoricalColorConstraintOperator](../models/categoricalcolorconstraintoperator.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `value`                                                                                      | *models.CategoricalColorConstraintValue*                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |