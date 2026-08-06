# MetricSettingsRequest

## Example Usage

```typescript
import { MetricSettingsRequest } from "galileo-generated/models";

let value: MetricSettingsRequest = {
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
        operator: "one_of",
        value: "ENUM_VALUE",
      },
      sampleRate: 3546.17,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scorers`                                                        | [models.RuntimeScorerConfig](../models/runtimescorerconfig.md)[] | :heavy_minus_sign:                                               | List of Galileo scorers to enable.                               |
| `segmentFilters`                                                 | [models.SegmentFilter](../models/segmentfilter.md)[]             | :heavy_minus_sign:                                               | List of segment filters to apply to the run.                     |