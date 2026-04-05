# MetricColorPickerMultiLabel

Color picker configuration for multi-label metrics.

Behaves the same as categorical but intended for metrics that produce
multiple labels. A category value must not appear in more than one constraint.

Example:
    {
        "type": "multi_label",
        "constraints": [
            {"color": "green", "operator": "eq", "value": "relevant"},
            {"color": "yellow", "operator": "one_of", "value": ["partial", "related"]}
        ]
    }

## Example Usage

```typescript
import { MetricColorPickerMultiLabel } from "galileo-generated/models";

let value: MetricColorPickerMultiLabel = {
  type: "multi_label",
  constraints: [
    {
      color: "green",
      operator: "eq",
      value: [],
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *"multi_label"*                                                                | :heavy_check_mark:                                                             | N/A                                                                            |
| `constraints`                                                                  | [models.CategoricalColorConstraint](../models/categoricalcolorconstraint.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |