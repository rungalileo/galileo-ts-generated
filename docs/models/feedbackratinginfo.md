# FeedbackRatingInfo

## Example Usage

```typescript
import { FeedbackRatingInfo } from "galileo-generated/models";

let value: FeedbackRatingInfo = {
  feedbackType: "choice",
  value: true,
  explanation: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `feedbackType`                                   | [models.FeedbackType](../models/feedbacktype.md) | :heavy_check_mark:                               | N/A                                              |
| `value`                                          | *models.FeedbackRatingInfoValue*                 | :heavy_check_mark:                               | N/A                                              |
| `explanation`                                    | *string*                                         | :heavy_check_mark:                               | N/A                                              |