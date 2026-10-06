# UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPostRequest

## Example Usage

```typescript
import { UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPostRequest } from "galileo-generated/models/operations";

let value:
  UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPostRequest = {
    projectId: "<value>",
    runId: "<value>",
    body: {
      scorers: [
        {
          id: "<value>",
          filters: [
            {
              name: "metadata",
              operator: "ne",
              key: "<key>",
              value: [
                "<value 1>",
                "<value 2>",
              ],
            },
          ],
        },
      ],
      segmentFilters: [
        {
          filter: {
            name: "modality",
            operator: "not_in",
            value: "ENUM_VALUE",
          },
          sampleRate: 1389.08,
        },
      ],
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