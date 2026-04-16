# ValidateScorerLogRecordResponse

Response model for validating a scorer based on log records.

Returns the uuid of the experiment created with the copied log records to store the metric testing results.

## Example Usage

```typescript
import { ValidateScorerLogRecordResponse } from "galileo-generated/models";

let value: ValidateScorerLogRecordResponse = {
  metricsExperimentId: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `metricsExperimentId` | *string*              | :heavy_check_mark:    | N/A                   |