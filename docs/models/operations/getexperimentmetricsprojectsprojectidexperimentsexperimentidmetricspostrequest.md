# GetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPostRequest

## Example Usage

```typescript
import { GetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPostRequest } from "galileo-generated/models/operations";

let value:
  GetExperimentMetricsProjectsProjectIdExperimentsExperimentIdMetricsPostRequest =
    {
      projectId: "<value>",
      experimentId: "<value>",
      body: {
        filters: [
          {
            columnId: "<id>",
            operator: "eq",
            value: "example input",
            caseSensitive: true,
            type: "text",
          },
        ],
      },
    };
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `experimentId`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `body`                                                                                                                     | [models.ExperimentMetricsRequest](../../models/experimentmetricsrequest.md)                                                | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        | {<br/>"filters": [<br/>{<br/>"case_sensitive": true,<br/>"name": "input",<br/>"operator": "eq",<br/>"type": "text",<br/>"value": "example input"<br/>}<br/>]<br/>} |