# WriteScorerVersionHealthScoreScorersScorerIdVersionsVersionNumberHealthScoresPostRequest

## Example Usage

```typescript
import {
  WriteScorerVersionHealthScoreScorersScorerIdVersionsVersionNumberHealthScoresPostRequest,
} from "galileo-generated/models/operations";

let value:
  WriteScorerVersionHealthScoreScorersScorerIdVersionsVersionNumberHealthScoresPostRequest =
    {
      scorerId: "<value>",
      versionNumber: 12620,
      body: {
        datasetId: "<value>",
        healthScoreType: "<value>",
        score: 9196.6,
      },
    };
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `scorerId`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `versionNumber`                                                           | *number*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `body`                                                                    | [models.WriteHealthScoreRequest](../../models/writehealthscorerequest.md) | :heavy_check_mark:                                                        | N/A                                                                       |