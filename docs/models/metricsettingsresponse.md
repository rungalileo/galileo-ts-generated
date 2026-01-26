# MetricSettingsResponse

## Example Usage

```typescript
import { MetricSettingsResponse } from "galileo-generated/models";

let value: MetricSettingsResponse = {
  scorers: [
    {
      id: "<value>",
      scorerType: "code",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `scorers`                                            | [models.ScorerConfig](../models/scorerconfig.md)[]   | :heavy_check_mark:                                   | N/A                                                  |
| `segmentFilters`                                     | [models.SegmentFilter](../models/segmentfilter.md)[] | :heavy_minus_sign:                                   | List of segment filters to apply to the run.         |