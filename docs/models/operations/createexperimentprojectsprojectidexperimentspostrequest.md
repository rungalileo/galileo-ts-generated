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
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `projectId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.ExperimentCreateRequest](../../models/experimentcreaterequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |