# AnnotationTemplateCreate

## Example Usage

```typescript
import { AnnotationTemplateCreate } from "galileo-generated/models";

let value: AnnotationTemplateCreate = {
  name: "<value>",
  constraints: {
    annotationType: "text",
  },
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `includeExplanation`                         | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `criteria`                                   | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `constraints`                                | *models.AnnotationTemplateCreateConstraints* | :heavy_check_mark:                           | N/A                                          |