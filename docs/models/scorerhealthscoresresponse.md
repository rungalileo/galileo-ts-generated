# ScorerHealthScoresResponse

## Example Usage

```typescript
import { ScorerHealthScoresResponse } from "galileo-generated/models";

let value: ScorerHealthScoresResponse = {
  scores: [
    {
      id: "<value>",
      scorerVersionId: "<value>",
      scorerVersionNumber: 534180,
      datasetId: "<value>",
      healthScoreType: "<value>",
      score: 3541.74,
      secondary: null,
      computedAt: new Date("2026-04-03T16:36:52.949Z"),
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `scores`                                                                             | [models.ScorerVersionHealthScoreEntry](../models/scorerversionhealthscoreentry.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |