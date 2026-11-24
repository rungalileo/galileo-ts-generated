# FeedbackRatingDBInput

## Example Usage

```typescript
import { FeedbackRatingDBInput } from "galileo-generated/models";

let value: FeedbackRatingDBInput = {
  rating: {
    feedbackType: "star",
    value: 545859,
  },
  createdAt: new Date("2026-07-20T01:01:20.201Z"),
  createdBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `explanation`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rating`                                                                                      | *models.FeedbackRatingDBInputRating*                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |