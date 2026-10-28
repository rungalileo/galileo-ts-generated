# AddRecordsToQueueRequest

Request to add records to an annotation queue.

## Example Usage

```typescript
import { AddRecordsToQueueRequest } from "galileo-generated/models";

let value: AddRecordsToQueueRequest = {
  projectId: "<value>",
  runId: "<value>",
  recordSelector: {
    type: "record_ids",
    recordIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Project ID containing the records                                              |
| `runId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Run ID (log stream, experiment, or metrics testing) containing the records     |
| `recordSelector`                                                               | *models.AddRecordsToQueueRequestRecordSelector*                                | :heavy_check_mark:                                                             | Selector to specify which records to add (either by record IDs or filter tree) |