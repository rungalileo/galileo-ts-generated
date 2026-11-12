# RemoveRecordsFromQueueRequest

Request to remove records from an annotation queue.

## Example Usage

```typescript
import { RemoveRecordsFromQueueRequest } from "galileo-generated/models";

let value: RemoveRecordsFromQueueRequest = {
  recordSelector: {
    type: "filter_tree",
    filterTree: {
      and: [
        {
          not: {
            or: [
              {
                and: [],
              },
            ],
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `recordSelector`                                                                  | *models.RemoveRecordsFromQueueRequestRecordSelector*                              | :heavy_check_mark:                                                                | Selector to specify which records to remove (either by record IDs or filter tree) |