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
          operator: "regex",
          key: "<key>",
          value: [
            "<value 1>",
            "<value 2>",
          ],
          caseSensitive: true,
        },
      ],
      childSpanFilters: [
        {
          name: "metadata",
          operator: "not_in",
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
        operator: "ne",
        value: "ENUM_VALUE",
      },
      sampleRate: 614.07,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scorers`                                                        | [models.RuntimeScorerConfig](../models/runtimescorerconfig.md)[] | :heavy_minus_sign:                                               | List of Galileo scorers to enable.                               |
| `segmentFilters`                                                 | [models.SegmentFilter](../models/segmentfilter.md)[]             | :heavy_minus_sign:                                               | List of segment filters to apply to the run.                     |