# ValidateScorerLogRecordResponse

Response model for validating a scorer based on log records.

Returns the uuid of the experiment created with the copied log records to store the metric testing results.
Also returns the project_id so callers can poll /projects/{project_id}/traces/search.

## Example Usage

```typescript
import { ValidateScorerLogRecordResponse } from "galileo-generated/models";

let value: ValidateScorerLogRecordResponse = {
  metricsExperimentId: "<value>",
  projectId: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `metricsExperimentId` | *string*              | :heavy_check_mark:    | N/A                   |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |