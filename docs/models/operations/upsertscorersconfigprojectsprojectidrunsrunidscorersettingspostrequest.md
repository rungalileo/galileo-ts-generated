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
      segmentFilters: [
        {
          filter: {
            name: "modality",
            operator: "ne",
            value: "ENUM_VALUE",
          },
          sampleRate: 614.07,
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