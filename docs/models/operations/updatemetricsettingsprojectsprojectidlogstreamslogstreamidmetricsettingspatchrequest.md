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
                operator: "regex",
                key: "<key>",
                value: [
                  "<value 1>",
                  "<value 2>",
                ],
                caseSensitive: true,
              },
            ],
          },
        ],
        segmentFilters: [
          {
            filter: {
              name: "modality",
              operator: "not_in",
              value: "ENUM_VALUE",
            },
            sampleRate: 1389.08,
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