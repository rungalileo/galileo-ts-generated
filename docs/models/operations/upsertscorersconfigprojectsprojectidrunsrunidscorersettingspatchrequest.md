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