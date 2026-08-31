# MetricNotComputed

## Example Usage

```typescript
import { MetricNotComputed } from "galileo-generated/models";

let value: MetricNotComputed = {
  statusType: "not_computed",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `statusType`                                                         | *"not_computed"*                                                     | :heavy_check_mark:                                                   | N/A                                                                  |
| `metricKeyAlias`                                                     | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `message`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `emsErrorCode`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | EMS error code from errors.yaml catalog for this not-computed reason |
| `standardError`                                                      | [models.StandardError](../models/standarderror.md)                   | :heavy_minus_sign:                                                   | Structured EMS error resolved on-the-fly from errors.yaml catalog    |