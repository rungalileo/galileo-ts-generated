# RemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePostRequest

## Example Usage

```typescript
import { RemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePostRequest } from "galileo-generated/models/operations";

let value:
  RemoveRecordsFromAnnotationQueueAnnotationQueuesQueueIdRecordsRemovePostRequest =
    {
      queueId: "<value>",
      body: {
        recordSelector: {
          type: "record_ids",
          recordIds: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      },
    };
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `queueId`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `body`                                                                                | [models.RemoveRecordsFromQueueRequest](../../models/removerecordsfromqueuerequest.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |