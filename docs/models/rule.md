# Rule

## Example Usage

```typescript
import { Rule } from "galileo-generated/models";

let value: Rule = {
  metric: "<value>",
  operator: "eq",
  targetValue: 5977.23,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `metric`                                                 | *string*                                                 | :heavy_check_mark:                                       | Name of the metric.                                      |
| `operator`                                               | [models.RuleOperator](../models/ruleoperator.md)         | :heavy_check_mark:                                       | N/A                                                      |
| `targetValue`                                            | *models.RuleTargetValue*                                 | :heavy_check_mark:                                       | Value to compare with for this metric (right hand side). |