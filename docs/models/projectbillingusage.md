# ProjectBillingUsage

## Example Usage

```typescript
import { ProjectBillingUsage } from "galileo-generated/models";

let value: ProjectBillingUsage = {
  projectId: "<value>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `projectId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectName`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `total`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `dataPoints`                                                         | [models.BillingUsageDataPoint](../models/billingusagedatapoint.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |