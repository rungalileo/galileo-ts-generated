# ExperimentCreateRequest

## Example Usage

```typescript
import { ExperimentCreateRequest } from "galileo-generated/models";

let value: ExperimentCreateRequest = {
  name: "<value>",
  scorers: [
    {
      id: "<value>",
      filters: [
        {
          name: "metadata",
          operator: "regex",
          key: "<key>",
          value: [
            "<value 1>",
            "<value 2>",
          ],
          caseSensitive: true,
        },
      ],
      childSpanFilters: [
        {
          name: "metadata",
          operator: "not_in",
          key: "<key>",
          value: [
            "<value 1>",
            "<value 2>",
          ],
          caseSensitive: true,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `taskType`                                                                             | [models.ExperimentCreateRequestTaskType](../models/experimentcreaterequesttasktype.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `playgroundId`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `promptTemplateVersionId`                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `dataset`                                                                              | [models.ExperimentDatasetRequest](../models/experimentdatasetrequest.md)               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `playgroundPromptId`                                                                   | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `promptSettings`                                                                       | [models.PromptRunSettings](../models/promptrunsettings.md)                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `scorers`                                                                              | [models.RuntimeScorerConfig](../models/runtimescorerconfig.md)[]                       | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `trigger`                                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `experimentGroupId`                                                                    | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `experimentGroupName`                                                                  | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |