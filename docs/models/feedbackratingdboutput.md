# FeedbackRatingDBOutput

## Example Usage

```typescript
import { FeedbackRatingDBOutput } from "galileo-generated/models";

let value: FeedbackRatingDBOutput = {
  rating: {
    feedbackType: "like_dislike",
    value: true,
  },
  createdAt: new Date("2025-10-22T10:12:41.216Z"),
  createdBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `explanation`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rating`                                                                                      | *models.FeedbackRatingDBOutputRating*                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |