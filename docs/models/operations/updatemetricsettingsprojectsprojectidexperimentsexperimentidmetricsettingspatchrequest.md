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
      body: {},
    };
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `experimentId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `body`                                                                | [models.MetricSettingsRequest](../../models/metricsettingsrequest.md) | :heavy_check_mark:                                                    | N/A                                                                   |