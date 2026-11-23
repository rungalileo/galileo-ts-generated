# NonLunaBillingUsageResponse

## Example Usage

```typescript
import { NonLunaBillingUsageResponse } from "galileo-generated/models";

let value: NonLunaBillingUsageResponse = {
  metric: "monthly_active_users",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `metric`                                                         | [models.Metric](../models/metric.md)                             | :heavy_check_mark:                                               | N/A                                                              |
| `projects`                                                       | [models.ProjectBillingUsage](../models/projectbillingusage.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `available`                                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `unavailableReason`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `total`                                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |