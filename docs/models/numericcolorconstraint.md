# NumericColorConstraint

A color constraint for numeric metric values.

Assigns a color when a numeric score matches the given operator and value.

Operators and expected value shapes:
  - eq, gt, gte, lt, lte: value must be a single float.
  - between: value must be a list of exactly 2 floats [low, high] where low < high.
    The range is inclusive on both ends.

Example:
    {"color": "green", "operator": "gte", "value": 0.8}
    {"color": "yellow", "operator": "between", "value": [0.3, 0.7]}

## Example Usage

```typescript
import { NumericColorConstraint } from "galileo-generated/models";

let value: NumericColorConstraint = {
  color: "yellow",
  operator: "between",
  value: 4007.72,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `color`                                                                              | [models.MetricColor](../models/metriccolor.md)                                       | :heavy_check_mark:                                                                   | Allowed colors for metric threshold visualization in the UI.                         |
| `operator`                                                                           | [models.NumericColorConstraintOperator](../models/numericcolorconstraintoperator.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `value`                                                                              | *models.NumericColorConstraintValue*                                                 | :heavy_check_mark:                                                                   | N/A                                                                                  |