# MetricError

## Example Usage

```typescript
import { MetricError } from "galileo-generated/models";

let value: MetricError = {
  statusType: "error",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `statusType`                                                      | *"error"*                                                         | :heavy_check_mark:                                                | N/A                                                               |
| `metricKeyAlias`                                                  | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `message`                                                         | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `emsErrorCode`                                                    | *number*                                                          | :heavy_minus_sign:                                                | EMS error code from errors.yaml catalog for this metric error     |
| `standardError`                                                   | [models.StandardError](../models/standarderror.md)                | :heavy_minus_sign:                                                | Structured EMS error resolved on-the-fly from errors.yaml catalog |