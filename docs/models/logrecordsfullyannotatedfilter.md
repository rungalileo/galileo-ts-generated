# LogRecordsFullyAnnotatedFilter

Queue-scoped filter for records rated across all queue templates.

## Example Usage

```typescript
import { LogRecordsFullyAnnotatedFilter } from "galileo-generated/models";

let value: LogRecordsFullyAnnotatedFilter = {
  type: "fully_annotated",
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columnId`                                                                                                                                                  | *"fully_annotated"*                                                                                                                                         | :heavy_minus_sign:                                                                                                                                          | Queue-scoped filter identifier. This filter only works for annotation-queue searches that provide queue context.                                            |
| `type`                                                                                                                                                      | *"fully_annotated"*                                                                                                                                         | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `userIds`                                                                                                                                                   | *string*[]                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                          | Optional queue member IDs to require for full annotation in a queue-scoped search. If omitted, all tracked queue members visible to the requester are used. |