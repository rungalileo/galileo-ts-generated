# UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchRequest

## Example Usage

```typescript
import { UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchRequest } from "galileo-generated/models/operations";

let value:
  UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchRequest = {
    projectId: "<value>",
    runId: "<value>",
    body: {
      runId: "<value>",
    },
  };
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `projectId`                                                                           | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `runId`                                                                               | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `body`                                                                                | [models.RunScorerSettingsPatchRequest](../../models/runscorersettingspatchrequest.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |