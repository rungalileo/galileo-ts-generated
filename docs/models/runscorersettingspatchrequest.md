# RunScorerSettingsPatchRequest

## Example Usage

```typescript
import { RunScorerSettingsPatchRequest } from "galileo-generated/models";

let value: RunScorerSettingsPatchRequest = {
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
  runId: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `scorers`                                            | [models.ScorerConfig](../models/scorerconfig.md)[]   | :heavy_minus_sign:                                   | List of Galileo scorers to enable.                   |
| `segmentFilters`                                     | [models.SegmentFilter](../models/segmentfilter.md)[] | :heavy_minus_sign:                                   | List of segment filters to apply to the run.         |
| `runId`                                              | *string*                                             | :heavy_check_mark:                                   | ID of the run.                                       |