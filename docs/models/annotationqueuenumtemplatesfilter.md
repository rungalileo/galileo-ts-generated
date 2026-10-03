# AnnotationQueueNumTemplatesFilter

## Example Usage

```typescript
import { AnnotationQueueNumTemplatesFilter } from "galileo-generated/models";

let value: AnnotationQueueNumTemplatesFilter = {
  name: "num_templates",
  operator: "lte",
  value: [
    3690.51,
    9590.63,
    6134.75,
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *"num_templates"*                                                                                          | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `operator`                                                                                                 | [models.AnnotationQueueNumTemplatesFilterOperator](../models/annotationqueuenumtemplatesfilteroperator.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `value`                                                                                                    | *models.AnnotationQueueNumTemplatesFilterValue*                                                            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |