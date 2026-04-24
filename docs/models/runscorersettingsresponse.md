# RunScorerSettingsResponse

## Example Usage

```typescript
import { RunScorerSettingsResponse } from "galileo-generated/models";

let value: RunScorerSettingsResponse = {
  scorers: [],
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
| `scorers`                                            | [models.ScorerConfig](../models/scorerconfig.md)[]   | :heavy_check_mark:                                   | N/A                                                  |
| `segmentFilters`                                     | [models.SegmentFilter](../models/segmentfilter.md)[] | :heavy_minus_sign:                                   | List of segment filters to apply to the run.         |
| `runId`                                              | *string*                                             | :heavy_check_mark:                                   | ID of the run.                                       |