# FeedbackAggregate

## Example Usage

```typescript
import { FeedbackAggregate } from "galileo-generated/models";

let value: FeedbackAggregate = {
  aggregate: {
    feedbackType: "like_dislike",
    likeCount: 44937,
    dislikeCount: 12076,
    unratedCount: 963539,
  },
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `aggregate`                         | *models.FeedbackAggregateAggregate* | :heavy_check_mark:                  | N/A                                 |