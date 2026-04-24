# BooleanColorConstraint

A color constraint for boolean metric values.

Assigns a color when a boolean score equals the given value.

Only the 'eq' operator is supported.

Example:
    {"color": "green", "operator": "eq", "value": true}
    {"color": "red", "operator": "eq", "value": false}

## Example Usage

```typescript
import { BooleanColorConstraint } from "galileo-generated/models";

let value: BooleanColorConstraint = {
  color: "green",
  operator: "eq",
  value: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `color`                                                      | [models.MetricColor](../models/metriccolor.md)               | :heavy_check_mark:                                           | Allowed colors for metric threshold visualization in the UI. |
| `operator`                                                   | *"eq"*                                                       | :heavy_check_mark:                                           | N/A                                                          |
| `value`                                                      | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |