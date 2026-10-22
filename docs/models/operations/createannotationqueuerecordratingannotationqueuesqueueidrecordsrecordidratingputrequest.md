# CreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPutRequest

## Example Usage

```typescript
import {
  CreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPutRequest,
} from "galileo-generated/models/operations";

let value:
  CreateAnnotationQueueRecordRatingAnnotationQueuesQueueIdRecordsRecordIdRatingPutRequest =
    {
      queueId: "<value>",
      recordId: "<value>",
      annotationTemplateId: "<value>",
      body: {
        rating: {
          annotationType: "choice",
          value: "<value>",
        },
      },
    };
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `queueId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `recordId`                                                              | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `annotationTemplateId`                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `body`                                                                  | [models.AnnotationRatingCreate](../../models/annotationratingcreate.md) | :heavy_check_mark:                                                      | N/A                                                                     |