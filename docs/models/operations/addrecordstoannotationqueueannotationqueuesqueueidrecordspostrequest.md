# AddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPostRequest

## Example Usage

```typescript
import { AddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPostRequest } from "galileo-generated/models/operations";

let value:
  AddRecordsToAnnotationQueueAnnotationQueuesQueueIdRecordsPostRequest = {
    queueId: "<value>",
    body: {
      projectId: "<value>",
      runId: "<value>",
      recordSelector: {
        type: "filter_tree",
        filterTree: {
          not: {
            and: [],
          },
        },
      },
    },
  };
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `queueId`                                                                   | *string*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `body`                                                                      | [models.AddRecordsToQueueRequest](../../models/addrecordstoqueuerequest.md) | :heavy_check_mark:                                                          | N/A                                                                         |