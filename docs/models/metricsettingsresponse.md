# MetricSettingsResponse

## Example Usage

```typescript
import { MetricSettingsResponse } from "galileo-generated/models";

let value: MetricSettingsResponse = {
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
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `scorers`                                            | [models.ScorerConfig](../models/scorerconfig.md)[]   | :heavy_check_mark:                                   | N/A                                                  |
| `segmentFilters`                                     | [models.SegmentFilter](../models/segmentfilter.md)[] | :heavy_minus_sign:                                   | List of segment filters to apply to the run.         |