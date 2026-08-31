# AnnotationTemplateDB

## Example Usage

```typescript
import { AnnotationTemplateDB } from "galileo-generated/models";

let value: AnnotationTemplateDB = {
  name: "<value>",
  includeExplanation: false,
  constraints: {
    annotationType: "star",
  },
  id: "<value>",
  createdAt: new Date("2025-04-20T15:48:20.924Z"),
  createdBy: "<value>",
  position: 17256,
  usageCount: 861145,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `includeExplanation`                                                                          | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `criteria`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `constraints`                                                                                 | *models.AnnotationTemplateDBConstraints*                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `position`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usageCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of annotation ratings using the template.                                              |