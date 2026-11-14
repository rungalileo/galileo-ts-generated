# AnnotationRatingCreate

## Example Usage

```typescript
import { AnnotationRatingCreate } from "galileo-generated/models";

let value: AnnotationRatingCreate = {
  rating: {
    annotationType: "like_dislike",
    value: false,
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `explanation`                         | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `rating`                              | *models.AnnotationRatingCreateRating* | :heavy_check_mark:                    | N/A                                   |