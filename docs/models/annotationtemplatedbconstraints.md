# AnnotationTemplateDBConstraints


## Supported Types

### `models.ChoiceConstraints`

```typescript
const value: models.ChoiceConstraints = {
  annotationType: "choice",
  choices: [
    "<value 1>",
    "<value 2>",
  ],
};
```

### `models.LikeDislikeConstraints`

```typescript
const value: models.LikeDislikeConstraints = {
  annotationType: "like_dislike",
};
```

### `models.ScoreConstraints`

```typescript
const value: models.ScoreConstraints = {
  annotationType: "score",
  min: 472712,
  max: 25979,
};
```

### `models.StarConstraints`

```typescript
const value: models.StarConstraints = {
  annotationType: "star",
};
```

### `models.TagsConstraints`

```typescript
const value: models.TagsConstraints = {
  annotationType: "tags",
  tags: [
    "<value 1>",
  ],
};
```

### `models.TextConstraints`

```typescript
const value: models.TextConstraints = {
  annotationType: "text",
};
```

### `models.TreeChoiceDBConstraints`

```typescript
const value: models.TreeChoiceDBConstraints = {
  annotationType: "tree_choice",
  choicesTree: [
    {
      label: "<value>",
      id: "<id>",
    },
  ],
  choicesTreeYaml: "<value>",
};
```

