# MetricNotApplicable

## Example Usage

```typescript
import { MetricNotApplicable } from "galileo-generated/models";

let value: MetricNotApplicable = {
  statusType: "not_applicable",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statusType`                                                           | *"not_applicable"*                                                     | :heavy_check_mark:                                                     | N/A                                                                    |
| `scorerType`                                                           | [models.ScorerType](../models/scorertype.md)                           | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metricKeyAlias`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `message`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `emsErrorCode`                                                         | *number*                                                               | :heavy_minus_sign:                                                     | EMS error code from errors.yaml catalog for this not-applicable reason |
| `standardError`                                                        | [models.StandardError](../models/standarderror.md)                     | :heavy_minus_sign:                                                     | Structured EMS error resolved on-the-fly from errors.yaml catalog      |