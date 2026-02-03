# RuleResult

## Example Usage

```typescript
import { RuleResult } from "galileo-generated/models";

let value: RuleResult = {
  metric: "<value>",
  operator: "not_empty",
  targetValue: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `status`                                                 | [models.ExecutionStatus](../models/executionstatus.md)   | :heavy_minus_sign:                                       | Status of the execution.                                 |
| `metric`                                                 | *string*                                                 | :heavy_check_mark:                                       | Name of the metric.                                      |
| `operator`                                               | [models.RuleOperator](../models/ruleoperator.md)         | :heavy_check_mark:                                       | N/A                                                      |
| `targetValue`                                            | *models.RuleResultTargetValue*                           | :heavy_check_mark:                                       | Value to compare with for this metric (right hand side). |
| `value`                                                  | *any*                                                    | :heavy_minus_sign:                                       | Result of the metric computation.                        |
| `executionTime`                                          | *number*                                                 | :heavy_minus_sign:                                       | Execution time for the rule in seconds.                  |