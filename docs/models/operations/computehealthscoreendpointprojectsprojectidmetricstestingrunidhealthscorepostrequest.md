# ComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePostRequest

## Example Usage

```typescript
import {
  ComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePostRequest,
} from "galileo-generated/models/operations";

let value:
  ComputeHealthScoreEndpointProjectsProjectIdMetricsTestingRunIdHealthScorePostRequest =
    {
      projectId: "<value>",
      runId: "<value>",
      body: {
        scorerId: "<value>",
        outputType: "multilabel",
      },
    };
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `runId`                                                                       | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `body`                                                                        | [models.ComputeHealthScoreRequest](../../models/computehealthscorerequest.md) | :heavy_check_mark:                                                            | N/A                                                                           |