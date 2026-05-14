# ExperimentCreateRequest

## Example Usage

```typescript
import { ExperimentCreateRequest } from "galileo-generated/models";

let value: ExperimentCreateRequest = {
  name: "<value>",
  scorers: [
    {
      filters: [
        {
          name: "node_name",
          operator: "one_of",
          value: [
            "<value 1>",
          ],
          caseSensitive: true,
        },
      ],
      id: "<value>",
      scorerType: "llm",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `taskType`                                                               | *16*                                                                     | :heavy_minus_sign:                                                       | N/A                                                                      |
| `playgroundId`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `promptTemplateVersionId`                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `dataset`                                                                | [models.ExperimentDatasetRequest](../models/experimentdatasetrequest.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `playgroundPromptId`                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `promptSettings`                                                         | [models.PromptRunSettings](../models/promptrunsettings.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scorers`                                                                | [models.ScorerConfig](../models/scorerconfig.md)[]                       | :heavy_minus_sign:                                                       | N/A                                                                      |
| `trigger`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `experimentGroupId`                                                      | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `experimentGroupName`                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |