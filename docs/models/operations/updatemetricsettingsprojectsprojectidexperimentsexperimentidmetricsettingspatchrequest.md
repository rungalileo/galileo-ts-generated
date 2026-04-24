# UpdateMetricSettingsProjectsProjectIdExperimentsExperimentIdMetricSettingsPatchRequest

## Example Usage

```typescript
import {
  UpdateMetricSettingsProjectsProjectIdExperimentsExperimentIdMetricSettingsPatchRequest,
} from "galileo-generated/models/operations";

let value:
  UpdateMetricSettingsProjectsProjectIdExperimentsExperimentIdMetricSettingsPatchRequest =
    {
      projectId: "<value>",
      experimentId: "<value>",
      body: {
        scorers: [
          {
            filters: [
              {
                name: "node_name",
                operator: "one_of",
                value: [
                  "<value 1>",
                ],
                caseSensitive: true,
              },
            ],
            id: "<value>",
            scorerType: "llm",
          },
        ],
        segmentFilters: [
          {
            filter: {
              name: "node_name",
              operator: "ne",
              value: [
                "<value 1>",
                "<value 2>",
                "<value 3>",
              ],
              caseSensitive: true,
            },
            sampleRate: 7113.42,
          },
        ],
      },
    };
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `experimentId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `body`                                                                | [models.MetricSettingsRequest](../../models/metricsettingsrequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |