# AnnotationQueueNumUsersFilter

## Example Usage

```typescript
import { AnnotationQueueNumUsersFilter } from "galileo-generated/models";

let value: AnnotationQueueNumUsersFilter = {
  name: "num_users",
  operator: "gte",
  value: [
    638.06,
    9231.14,
    2625.1,
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *"num_users"*                                                                                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `operator`                                                                                         | [models.AnnotationQueueNumUsersFilterOperator](../models/annotationqueuenumusersfilteroperator.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *models.AnnotationQueueNumUsersFilterValue*                                                        | :heavy_check_mark:                                                                                 | N/A                                                                                                |