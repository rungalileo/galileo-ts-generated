# LunaBillingUsageResponse

## Example Usage

```typescript
import { LunaBillingUsageResponse } from "galileo-generated/models";

let value: LunaBillingUsageResponse = {
  metric: "luna_decision_input_tokens",
  total: 456565,
  credits: {
    organizationId: "b05925a9-80c2-427d-aa36-3c63d76b33bd",
    grantedTokens: 548011,
    consumedTokens: 578079,
    reservedTokens: 225992,
    availableTokens: 866534,
    exhausted: false,
  },
  creditsUnavailableReason: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `metric`                                                         | *"luna_decision_input_tokens"*                                   | :heavy_check_mark:                                               | N/A                                                              |
| `projects`                                                       | [models.ProjectBillingUsage](../models/projectbillingusage.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `available`                                                      | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |
| `unavailableReason`                                              | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `total`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `credits`                                                        | [models.CreditBalance](../models/creditbalance.md)               | :heavy_check_mark:                                               | N/A                                                              |
| `creditsUnavailableReason`                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |