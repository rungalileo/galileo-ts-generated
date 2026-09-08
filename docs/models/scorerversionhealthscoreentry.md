# ScorerVersionHealthScoreEntry

## Example Usage

```typescript
import { ScorerVersionHealthScoreEntry } from "galileo-generated/models";

let value: ScorerVersionHealthScoreEntry = {
  id: "<value>",
  scorerVersionId: "<value>",
  scorerVersionNumber: 364801,
  datasetId: "<value>",
  healthScoreType: "<value>",
  score: 89.5,
  secondary: {
    "key": 8320.79,
  },
  computedAt: new Date("2024-02-01T08:04:14.624Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scorerVersionId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scorerVersionNumber`                                                                         | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `datasetId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `healthScoreType`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `score`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `secondary`                                                                                   | Record<string, *number*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `computedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |