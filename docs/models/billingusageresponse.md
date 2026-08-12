# BillingUsageResponse

## Example Usage

```typescript
import { BillingUsageResponse } from "galileo-generated/models";

let value: BillingUsageResponse = {
  metric: "luna_tokens",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `metric`                                                         | [models.BillingUsageMetric](../models/billingusagemetric.md)     | :heavy_check_mark:                                               | N/A                                                              |
| `total`                                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `projects`                                                       | [models.ProjectBillingUsage](../models/projectbillingusage.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `available`                                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `unavailableReason`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |