# ExportBillingUsageBillingUsageExportGetRequest

## Example Usage

```typescript
import { ExportBillingUsageBillingUsageExportGetRequest } from "galileo-generated/models/operations";

let value: ExportBillingUsageBillingUsageExportGetRequest = {
  startTime: new Date("2025-09-12T15:25:14.453Z"),
  endTime: new Date("2025-03-15T14:01:31.357Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of time range (UTC)                                                                     |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End of time range (UTC)                                                                       |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional project filter; omit to export all projects                                          |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | IANA timezone used for display-only export metadata                                           |