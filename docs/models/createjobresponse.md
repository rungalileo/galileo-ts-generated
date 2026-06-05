# CreateJobResponse

## Example Usage

```typescript
import { CreateJobResponse } from "galileo-generated/models";

let value: CreateJobResponse = {
  projectId: "<value>",
  runId: "<value>",
  scorers: [
    {
      name: "chunk_attribution_utilization",
      type: "luna",
    },
  ],
  promptRegisteredScorersConfiguration: [
    {
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
  ],
  promptFinetunedScorersConfiguration: [
    {
      filters: [
        {
          name: "modality",
          operator: "one_of",
          value: "ENUM_VALUE",
        },
      ],
    },
  ],
  promptCustomizedScorersConfiguration: null,
  promptScorerSettings: {
    filters: [
      {
        name: "modality",
        operator: "ne",
        value: "ENUM_VALUE",
      },
    ],
  },
  scorerConfig: null,
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
  message: "<value>",
  link: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `resourceLimits`                                                                                           | [models.TaskResourceLimits](../models/taskresourcelimits.md)                                               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `projectId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `runId`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `jobId`                                                                                                    | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `jobName`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `shouldRetry`                                                                                              | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `userId`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `taskType`                                                                                                 | [models.TaskType](../models/tasktype.md)                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `labels`                                                                                                   | *models.CreateJobResponseLabels*                                                                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `nerLabels`                                                                                                | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `tasks`                                                                                                    | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `nonInferenceLogged`                                                                                       | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `migrationName`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `xray`                                                                                                     | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `processExistingInferenceRuns`                                                                             | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `featureNames`                                                                                             | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptDatasetId`                                                                                          | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `datasetId`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `datasetVersionIndex`                                                                                      | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptTemplateVersionId`                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `monitorBatchId`                                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `protectTraceId`                                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `protectScorerPayload`                                                                                     | *Uint8Array*                                                                                               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptSettings`                                                                                           | [models.PromptRunSettings](../models/promptrunsettings.md)                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `scorers`                                                                                                  | *models.CreateJobResponseScorers2*                                                                         | :heavy_minus_sign:                                                                                         | For G2.0 we send all scorers as ScorerConfig, for G1.0 we send preset scorers  as GalileoScorer            |
| `promptRegisteredScorersConfiguration`                                                                     | [models.RegisteredScorer](../models/registeredscorer.md)[]                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptGeneratedScorersConfiguration`                                                                      | *string*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptFinetunedScorersConfiguration`                                                                      | [models.FineTunedScorer](../models/finetunedscorer.md)[]                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptScorersConfiguration`                                                                               | [models.ScorersConfiguration](../models/scorersconfiguration.md)                                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptCustomizedScorersConfiguration`                                                                     | *models.CreateJobResponsePromptCustomizedScorersConfiguration*[]                                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `promptScorerSettings`                                                                                     | [models.BaseScorer](../models/basescorer.md)                                                               | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `scorerConfig`                                                                                             | [models.ScorerConfig](../models/scorerconfig.md)                                                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `subScorers`                                                                                               | [models.PromptgalileoSchemasScorerNameScorerName](../models/promptgalileoschemasscorernamescorername.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `lunaModel`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `segmentFilters`                                                                                           | [models.SegmentFilter](../models/segmentfilter.md)[]                                                       | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `isSession`                                                                                                | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `validationConfig`                                                                                         | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `uploadDataInSeparateTask`                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `logMetricComputingRecords`                                                                                | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `streamMetrics`                                                                                            | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `multijudgeAverageBooleanMetrics`                                                                          | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `storeMetricIds`                                                                                           | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `message`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `link`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |