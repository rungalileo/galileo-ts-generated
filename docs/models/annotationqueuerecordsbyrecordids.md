# AnnotationQueueRecordsByRecordIDs

## Example Usage

```typescript
import { AnnotationQueueRecordsByRecordIDs } from "galileo-generated/models";

let value: AnnotationQueueRecordsByRecordIDs = {
  type: "record_ids",
  recordIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `type`                           | *"record_ids"*                   | :heavy_check_mark:               | N/A                              |
| `recordIds`                      | *string*[]                       | :heavy_check_mark:               | List of log record IDs to select |