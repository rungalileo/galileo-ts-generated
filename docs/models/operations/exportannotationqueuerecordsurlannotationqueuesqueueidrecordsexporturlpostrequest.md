# ExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPostRequest

## Example Usage

```typescript
import {
  ExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPostRequest,
} from "galileo-generated/models/operations";

let value:
  ExportAnnotationQueueRecordsUrlAnnotationQueuesQueueIdRecordsExportUrlPostRequest =
    {
      queueId: "<value>",
      body: {
        recordSelector: {
          type: "record_ids",
          recordIds: [
            "<value 1>",
          ],
        },
      },
    };
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `queueId`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `body`                                                                              | [models.AnnotationQueueExportRequest](../../models/annotationqueueexportrequest.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |