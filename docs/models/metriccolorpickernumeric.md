# MetricColorPickerNumeric

Color picker configuration for numeric metrics.

Each constraint maps a numeric condition to a color. The UI uses these
constraints to color-code metric values (e.g. green for high scores,
red for low scores).

Example:
    {
        "type": "numeric",
        "constraints": [
            {"color": "green", "operator": "gte", "value": 0.8},
            {"color": "yellow", "operator": "between", "value": [0.3, 0.8]},
            {"color": "red", "operator": "lt", "value": 0.3}
        ]
    }

## Example Usage

```typescript
import { MetricColorPickerNumeric } from "galileo-generated/models";

let value: MetricColorPickerNumeric = {
  type: "numeric",
  constraints: [
    {
      color: "red",
      operator: "gte",
      value: [],
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"numeric"*                                                            | :heavy_check_mark:                                                     | N/A                                                                    |
| `constraints`                                                          | [models.NumericColorConstraint](../models/numericcolorconstraint.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |