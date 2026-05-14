# GetIntegrationCostsIntegrationsCostsSummaryGetRequest

## Example Usage

```typescript
import { GetIntegrationCostsIntegrationsCostsSummaryGetRequest } from "galileo-generated/models/operations";

let value: GetIntegrationCostsIntegrationsCostsSummaryGetRequest = {
  startTime: new Date("2024-01-03T14:12:17.337Z"),
  endTime: new Date("2024-10-21T03:10:42.948Z"),
  interval: "daily",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of time range (UTC)                                                                     |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End of time range (UTC)                                                                       |
| `interval`                                                                                    | [models.CostInterval](../../models/costinterval.md)                                           | :heavy_check_mark:                                                                            | Aggregation interval                                                                          |