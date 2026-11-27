# AnnotationQueueCreatedAtFilter

## Example Usage

```typescript
import { AnnotationQueueCreatedAtFilter } from "galileo-generated/models";

let value: AnnotationQueueCreatedAtFilter = {
  name: "created_at",
  operator: "gt",
  value: new Date("2024-02-29T14:13:19.992Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *"created_at"*                                                                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `operator`                                                                                           | [models.AnnotationQueueCreatedAtFilterOperator](../models/annotationqueuecreatedatfilteroperator.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `value`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |