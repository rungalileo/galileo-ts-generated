# ResponseGetScorerPromptPreviewScorersVersionsScorerVersionIdPromptPreviewGet

Successful Response


## Supported Types

### `models.ScorerPromptPreviewResponse`

```typescript
const value: models.ScorerPromptPreviewResponse = {
  scorerId: "<id>",
  scorerVersionId: "<id>",
  messages: [
    {
      role: "<value>",
      content: "<value>",
    },
  ],
  normalizedInput: [
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {},
  ],
};
```

### `models.ScorerPromptPreviewUnavailableResponse`

```typescript
const value: models.ScorerPromptPreviewUnavailableResponse = {
  scorerId: "<id>",
  scorerVersionId: "<id>",
  reason: "run_settings_unavailable",
  message: "<value>",
};
```

