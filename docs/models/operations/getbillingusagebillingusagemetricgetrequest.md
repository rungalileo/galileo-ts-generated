# GetBillingUsageBillingUsageMetricGetRequest

## Example Usage

```typescript
import { GetBillingUsageBillingUsageMetricGetRequest } from "galileo-generated/models/operations";

let value: GetBillingUsageBillingUsageMetricGetRequest = {
  metric: "total_users",
  startTime: new Date("2025-01-01T08:28:59.055Z"),
  endTime: new Date("2026-11-13T13:00:49.315Z"),
  interval: "daily",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metric`                                                                                      | [models.BillingUsageMetric](../../models/billingusagemetric.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of time range (UTC)                                                                     |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End of time range (UTC)                                                                       |
| `interval`                                                                                    | [models.CostInterval](../../models/costinterval.md)                                           | :heavy_check_mark:                                                                            | Aggregation interval                                                                          |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional project filter                                                                       |