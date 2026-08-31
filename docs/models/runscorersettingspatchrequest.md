# RunScorerSettingsPatchRequest

## Example Usage

```typescript
import { RunScorerSettingsPatchRequest } from "galileo-generated/models";

let value: RunScorerSettingsPatchRequest = {
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
  runId: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scorers`                                                        | [models.RuntimeScorerConfig](../models/runtimescorerconfig.md)[] | :heavy_minus_sign:                                               | List of Galileo scorers to enable.                               |
| `segmentFilters`                                                 | [models.SegmentFilter](../models/segmentfilter.md)[]             | :heavy_minus_sign:                                               | List of segment filters to apply to the run.                     |
| `runId`                                                          | *string*                                                         | :heavy_check_mark:                                               | ID of the run.                                                   |