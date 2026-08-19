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
      body: {
        scorers: [
          {
            id: "<value>",
            filters: [
              {
                name: "metadata",
                operator: "ne",
                key: "<key>",
                value: [
                  "<value 1>",
                  "<value 2>",
                ],
              },
            ],
          },
        ],
        segmentFilters: [
          {
            filter: {
              name: "modality",
              operator: "eq",
              value: "ENUM_VALUE",
            },
            sampleRate: 2746.46,
          },
        ],
      },
    };
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `logStreamId`                                                         | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `body`                                                                | [models.MetricSettingsRequest](../../models/metricsettingsrequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |