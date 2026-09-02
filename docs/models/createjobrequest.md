# CreateJobRequest

## Example Usage

```typescript
import { CreateJobRequest } from "galileo-generated/models";

let value: CreateJobRequest = {
  projectId: "<value>",
  runId: "<value>",
  scorers: [],
  promptScorerSettings: {
    filters: [
      {
        name: "node_name",
        operator: "contains",
        value: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        caseSensitive: true,
      },
    ],
  },
  scorerConfig: {
    id: "<value>",
    filters: [
      {
        name: "node_name",
        operator: "one_of",
        value: "<value>",
        caseSensitive: true,
      },
    ],
  },
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `resourceLimits`                                                                                | [models.TaskResourceLimits](../models/taskresourcelimits.md)                                    | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `projectId`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `runId`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `jobId`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `jobName`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `shouldRetry`                                                                                   | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `userId`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `taskType`                                                                                      | [models.TaskType](../models/tasktype.md)                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `labels`                                                                                        | *models.CreateJobRequestLabels*                                                                 | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `nerLabels`                                                                                     | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `tasks`                                                                                         | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `nonInferenceLogged`                                                                            | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `migrationName`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `processExistingInferenceRuns`                                                                  | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `featureNames`                                                                                  | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `promptDatasetId`                                                                               | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `datasetId`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `datasetVersionIndex`                                                                           | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `promptTemplateVersionId`                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `monitorBatchId`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `protectTraceId`                                                                                | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `protectScorerPayload`                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `promptSettings`                                                                                | [models.PromptRunSettings](../models/promptrunsettings.md)                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `scorers`                                                                                       | *models.CreateJobRequestScorers2*                                                               | :heavy_minus_sign:                                                                              | For G2.0 we send all scorers as ScorerConfig, for G1.0 we send preset scorers  as GalileoScorer |
| `promptGeneratedScorersConfiguration`                                                           | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `promptScorerSettings`                                                                          | [models.BaseScorer](../models/basescorer.md)                                                    | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `scorerConfig`                                                                                  | [models.RuntimeScorerConfig](../models/runtimescorerconfig.md)                                  | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `lunaModel`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `segmentFilters`                                                                                | [models.SegmentFilter](../models/segmentfilter.md)[]                                            | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `isSession`                                                                                     | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `validationConfig`                                                                              | Record<string, *any*>                                                                           | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `uploadDataInSeparateTask`                                                                      | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `logMetricComputingRecords`                                                                     | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `multijudgeAverageBooleanMetrics`                                                               | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `storeMetricIds`                                                                                | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `traceIds`                                                                                      | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | N/A                                                                                             |