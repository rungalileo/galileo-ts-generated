# FeedbackRatingDBOutputRating


## Supported Types

### `models.ChoiceRatingOutput`

```typescript
const value: models.ChoiceRatingOutput = {
  feedbackType: "choice",
  value: "<value>",
};
```

### `models.LikeDislikeRatingOutput`

```typescript
const value: models.LikeDislikeRatingOutput = {
  feedbackType: "like_dislike",
  value: true,
};
```

### `models.ScoreRatingOutput`

```typescript
const value: models.ScoreRatingOutput = {
  feedbackType: "score",
  value: 575658,
};
```

### `models.StarRatingOutput`

```typescript
const value: models.StarRatingOutput = {
  feedbackType: "star",
  value: 633788,
};
```

### `models.TagsRatingOutput`

```typescript
const value: models.TagsRatingOutput = {
  feedbackType: "tags",
  value: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.TextRatingOutput`

```typescript
const value: models.TextRatingOutput = {
  feedbackType: "text",
  value: "<value>",
};
```

### `models.TreeChoiceRatingOutput`

```typescript
const value: models.TreeChoiceRatingOutput = {
  feedbackType: "tree_choice",
  value: "<value>",
};
```

