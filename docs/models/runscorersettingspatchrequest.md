# RunScorerSettingsPatchRequest

## Example Usage

```typescript
import { RunScorerSettingsPatchRequest } from "galileo-generated/models";

let value: RunScorerSettingsPatchRequest = {
  runId: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `scorers`                                            | [models.ScorerConfig](../models/scorerconfig.md)[]   | :heavy_minus_sign:                                   | List of Galileo scorers to enable.                   |
| `segmentFilters`                                     | [models.SegmentFilter](../models/segmentfilter.md)[] | :heavy_minus_sign:                                   | List of segment filters to apply to the run.         |
| `runId`                                              | *string*                                             | :heavy_check_mark:                                   | ID of the run.                                       |