# MetricColorPickerCategorical

Color picker configuration for categorical metrics.

Each constraint maps one or more category values to a color. A category
value must not appear in more than one constraint.

Example:
    {
        "type": "categorical",
        "constraints": [
            {"color": "green", "operator": "eq", "value": "pass"},
            {"color": "red", "operator": "one_of", "value": ["fail", "error"]}
        ]
    }

## Example Usage

```typescript
import { MetricColorPickerCategorical } from "galileo-generated/models";

let value: MetricColorPickerCategorical = {
  type: "categorical",
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
| `type`                                                                         | *"categorical"*                                                                | :heavy_check_mark:                                                             | N/A                                                                            |
| `constraints`                                                                  | [models.CategoricalColorConstraint](../models/categoricalcolorconstraint.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |