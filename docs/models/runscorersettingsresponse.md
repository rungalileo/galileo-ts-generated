# RunScorerSettingsResponse

## Example Usage

```typescript
import { RunScorerSettingsResponse } from "galileo-generated/models";

let value: RunScorerSettingsResponse = {
  scorers: [],
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
  runId: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `scorers`                                                        | [models.RuntimeScorerConfig](../models/runtimescorerconfig.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `segmentFilters`                                                 | [models.SegmentFilter](../models/segmentfilter.md)[]             | :heavy_minus_sign:                                               | List of segment filters to apply to the run.                     |
| `runId`                                                          | *string*                                                         | :heavy_check_mark:                                               | ID of the run.                                                   |