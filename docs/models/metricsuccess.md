# MetricSuccess

## Example Usage

```typescript
import { MetricSuccess } from "galileo-generated/models";

let value: MetricSuccess = {
  statusType: "success",
  value: [
    {
      rating: {
        feedbackType: "star",
        value: 978650,
      },
      createdAt: new Date("2026-04-30T12:52:20.290Z"),
      createdBy: "<value>",
    },
    "<value>",
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `statusType`                                                         | *"success"*                                                          | :heavy_check_mark:                                                   | N/A                                                                  |
| `scorerType`                                                         | [models.ScorerType](../models/scorertype.md)                         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `value`                                                              | *models.MetricSuccessValue*                                          | :heavy_check_mark:                                                   | N/A                                                                  |
| `displayValue`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `explanation`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `rationale`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `cost`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `modelAlias`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `numJudges`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `critique`                                                           | [models.MetricCritiqueColumnar](../models/metriccritiquecolumnar.md) | :heavy_minus_sign:                                                   | N/A                                                                  |