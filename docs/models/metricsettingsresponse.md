# MetricSettingsResponse

## Example Usage

```typescript
import { MetricSettingsResponse } from "galileo-generated/models";

let value: MetricSettingsResponse = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scorers`                                                        | [models.RuntimeScorerConfig](../models/runtimescorerconfig.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `segmentFilters`                                                 | [models.SegmentFilter](../models/segmentfilter.md)[]             | :heavy_minus_sign:                                               | List of segment filters to apply to the run.                     |