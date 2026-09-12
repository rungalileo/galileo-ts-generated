# ListAnnotationQueueResponse

## Example Usage

```typescript
import { ListAnnotationQueueResponse } from "galileo-generated/models";

let value: ListAnnotationQueueResponse = {
  annotationQueues: [
    {
      id: "<value>",
      name: "<value>",
      description: "among consequently mortally orchestrate of",
      createdAt: new Date("2025-10-25T06:00:11.717Z"),
      updatedAt: new Date("2026-05-25T02:32:22.520Z"),
      createdByUser: {
        id: "<value>",
        email: "Garland.Barton@gmail.com",
      },
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `startingToken`                                                          | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `paginated`                                                              | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `nextStartingToken`                                                      | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `annotationQueues`                                                       | [models.AnnotationQueueResponse](../models/annotationqueueresponse.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |