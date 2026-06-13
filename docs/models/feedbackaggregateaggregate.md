# FeedbackAggregateAggregate


## Supported Types

### `models.ChoiceAggregate`

```typescript
const value: models.ChoiceAggregate = {
  feedbackType: "choice",
  counts: {
    "key": 525240,
    "key1": 656819,
    "key2": 410116,
  },
  unratedCount: 488982,
};
```

### `models.LikeDislikeAggregate`

```typescript
const value: models.LikeDislikeAggregate = {
  feedbackType: "like_dislike",
  likeCount: 434465,
  dislikeCount: 352270,
  unratedCount: 253491,
};
```

### `models.ScoreAggregate`

```typescript
const value: models.ScoreAggregate = {
  feedbackType: "score",
  average: 2641.18,
  unratedCount: 886416,
};
```

### `models.StarAggregate`

```typescript
const value: models.StarAggregate = {
  feedbackType: "star",
  average: 5449.61,
  counts: {
    "key": 604987,
    "key1": 903253,
  },
  unratedCount: 189177,
};
```

### `models.TagsAggregate`

```typescript
const value: models.TagsAggregate = {
  feedbackType: "tags",
  counts: {
    "key": 290442,
  },
  unratedCount: 221867,
};
```

### `models.TextAggregate`

```typescript
const value: models.TextAggregate = {
  feedbackType: "text",
  count: 196132,
  unratedCount: 238431,
};
```

