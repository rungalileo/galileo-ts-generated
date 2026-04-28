# MetricColorPickerBoolean

Color picker configuration for boolean metrics.

Each constraint maps a boolean value to a color.

Example:
    {
        "type": "boolean",
        "constraints": [
            {"color": "green", "operator": "eq", "value": true},
            {"color": "red", "operator": "eq", "value": false}
        ]
    }

## Example Usage

```typescript
import { MetricColorPickerBoolean } from "galileo-generated/models";

let value: MetricColorPickerBoolean = {
  type: "boolean",
  constraints: [
    {
      color: "red",
      operator: "eq",
      value: false,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | *"boolean"*                                                            | :heavy_check_mark:                                                     | N/A                                                                    |
| `constraints`                                                          | [models.BooleanColorConstraint](../models/booleancolorconstraint.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |