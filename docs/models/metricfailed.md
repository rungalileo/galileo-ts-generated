# MetricFailed

## Example Usage

```typescript
import { MetricFailed } from "galileo-generated/models";

let value: MetricFailed = {
  statusType: "failed",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `statusType`                                                      | *"failed"*                                                        | :heavy_check_mark:                                                | N/A                                                               |
| `scorerType`                                                      | [models.ScorerType](../models/scorertype.md)                      | :heavy_minus_sign:                                                | N/A                                                               |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `emsErrorCode`                                                    | *number*                                                          | :heavy_minus_sign:                                                | EMS error code from errors.yaml catalog for this metric failure   |
| `standardError`                                                   | [models.StandardError](../models/standarderror.md)                | :heavy_minus_sign:                                                | Structured EMS error resolved on-the-fly from errors.yaml catalog |