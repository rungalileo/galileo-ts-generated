# EnableEvaluatorsProjectsProjectIdRunsRunIdScorerSettingsEvaluatorsEnablePostRequest

## Example Usage

```typescript
import {
  EnableEvaluatorsProjectsProjectIdRunsRunIdScorerSettingsEvaluatorsEnablePostRequest,
} from "galileo-generated/models/operations";

let value:
  EnableEvaluatorsProjectsProjectIdRunsRunIdScorerSettingsEvaluatorsEnablePostRequest =
    {
      projectId: "<value>",
      runId: "<value>",
      body: {
        evaluators: [],
      },
    };
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `projectId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `runId`                                                             | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | [models.RunEvaluatorsRequest](../../models/runevaluatorsrequest.md) | :heavy_check_mark:                                                  | N/A                                                                 |