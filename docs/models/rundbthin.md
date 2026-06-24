# RunDBThin

## Example Usage

```typescript
import { RunDBThin } from "galileo-generated/models";

let value: RunDBThin = {
  createdBy: "<value>",
  numSamples: 659928,
  winner: false,
  id: "<value>",
  createdAt: new Date("2026-02-03T08:12:27.256Z"),
  updatedAt: new Date("2024-02-24T17:22:28.387Z"),
  lastUpdatedBy: "<value>",
  creator: {
    id: "<value>",
    email: "Fannie21@hotmail.com",
    organizationId: "<value>",
    organizationName: "<value>",
    createdAt: new Date("2026-12-16T08:21:29.962Z"),
    updatedAt: new Date("2024-01-30T09:49:31.375Z"),
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `numSamples`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `winner`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `datasetHash`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `datasetVersionId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `taskType`                                                                                    | [models.TaskType](../models/tasktype.md)                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `lastUpdatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runTags`                                                                                     | [models.RunTagDB](../models/runtagdb.md)[]                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `exampleContentId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `creator`                                                                                     | [models.UserDB](../models/userdb.md)                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `loggedSplits`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `loggedInferenceNames`                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |