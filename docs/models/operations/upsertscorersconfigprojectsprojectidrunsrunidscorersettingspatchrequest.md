# UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchRequest

## Example Usage

```typescript
import { UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchRequest } from "galileo-generated/models/operations";

let value:
  UpsertScorersConfigProjectsProjectIdRunsRunIdScorerSettingsPatchRequest = {
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
            operator: "eq",
            value: "ENUM_VALUE",
          },
          sampleRate: 2746.46,
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