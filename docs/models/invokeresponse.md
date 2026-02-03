# InvokeResponse

## Example Usage

```typescript
import { InvokeResponse } from "galileo-generated/models";

let value: InvokeResponse = {
  text: "<value>",
  traceMetadata: {},
  stageMetadata: {
    projectId: "<value>",
    stageId: "<value>",
    stageName: "<value>",
    stageVersion: 397326,
    stageType: "local",
  },
  actionResult: {
    type: "OVERRIDE",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `status`                                                                   | [models.ExecutionStatus](../models/executionstatus.md)                     | :heavy_minus_sign:                                                         | Status of the execution.                                                   |
| `apiVersion`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `text`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Text from the request after processing the rules.                          |
| `traceMetadata`                                                            | [models.TraceMetadata](../models/tracemetadata.md)                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `stageMetadata`                                                            | [models.StageMetadata](../models/stagemetadata.md)                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `rulesetResults`                                                           | [models.RulesetResult](../models/rulesetresult.md)[]                       | :heavy_minus_sign:                                                         | Results of the rule execution.                                             |
| `metricResults`                                                            | Record<string, [models.MetricComputation](../models/metriccomputation.md)> | :heavy_minus_sign:                                                         | Results of the metric computation.                                         |
| `actionResult`                                                             | [models.ActionResult](../models/actionresult.md)                           | :heavy_check_mark:                                                         | N/A                                                                        |
| `metadata`                                                                 | Record<string, *string*>                                                   | :heavy_minus_sign:                                                         | Optional additional metadata. This being echoed back from the request.     |
| `headers`                                                                  | Record<string, *string*>                                                   | :heavy_minus_sign:                                                         | Optional additional HTTP headers that should be included in the response.  |