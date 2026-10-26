# AnnotationQueueNameFilter

## Example Usage

```typescript
import { AnnotationQueueNameFilter } from "galileo-generated/models";

let value: AnnotationQueueNameFilter = {
  name: "name",
  operator: "eq",
  value: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *"name"*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `operator`                                                                                 | [models.AnnotationQueueNameFilterOperator](../models/annotationqueuenamefilteroperator.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `value`                                                                                    | *models.AnnotationQueueNameFilterValue*                                                    | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `caseSensitive`                                                                            | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | N/A                                                                                        |