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
            name: "node_name",
            operator: "eq",
            value: [],
            caseSensitive: true,
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