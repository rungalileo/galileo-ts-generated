# CreateExperimentProjectsProjectIdExperimentsPostRequest

## Example Usage

```typescript
import { CreateExperimentProjectsProjectIdExperimentsPostRequest } from "galileo-generated/models/operations";

let value: CreateExperimentProjectsProjectIdExperimentsPostRequest = {
  projectId: "<value>",
  body: {
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
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `projectId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.ExperimentCreateRequest](../../models/experimentcreaterequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |