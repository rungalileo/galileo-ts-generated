# UpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatchRequest

## Example Usage

```typescript
import {
  UpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatchRequest,
} from "galileo-generated/models/operations";

let value:
  UpdateMetricSettingsProjectsProjectIdLogStreamsLogStreamIdMetricSettingsPatchRequest =
    {
      projectId: "<value>",
      logStreamId: "<value>",
      body: {},
    };
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `logStreamId`                                                         | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `body`                                                                | [models.MetricSettingsRequest](../../models/metricsettingsrequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |