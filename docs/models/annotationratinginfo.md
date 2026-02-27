# AnnotationRatingInfo

## Example Usage

```typescript
import { AnnotationRatingInfo } from "galileo-generated/models";

let value: AnnotationRatingInfo = {
  annotationType: "score",
  value: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  explanation: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `annotationType`                                     | [models.AnnotationType](../models/annotationtype.md) | :heavy_check_mark:                                   | N/A                                                  |
| `value`                                              | *models.AnnotationRatingInfoValue*                   | :heavy_check_mark:                                   | N/A                                                  |
| `explanation`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |