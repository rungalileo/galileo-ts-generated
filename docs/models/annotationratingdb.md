# AnnotationRatingDB

## Example Usage

```typescript
import { AnnotationRatingDB } from "galileo-generated/models";

let value: AnnotationRatingDB = {
  rating: {
    annotationType: "like_dislike",
    value: true,
  },
  createdAt: new Date("2024-12-23T14:24:06.705Z"),
  createdBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `explanation`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rating`                                                                                      | *models.AnnotationRatingDBRating*                                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |