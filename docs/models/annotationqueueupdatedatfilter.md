# AnnotationQueueUpdatedAtFilter

## Example Usage

```typescript
import { AnnotationQueueUpdatedAtFilter } from "galileo-generated/models";

let value: AnnotationQueueUpdatedAtFilter = {
  name: "updated_at",
  operator: "ne",
  value: new Date("2024-12-07T21:09:50.277Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *"updated_at"*                                                                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `operator`                                                                                           | [models.AnnotationQueueUpdatedAtFilterOperator](../models/annotationqueueupdatedatfilteroperator.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `value`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |