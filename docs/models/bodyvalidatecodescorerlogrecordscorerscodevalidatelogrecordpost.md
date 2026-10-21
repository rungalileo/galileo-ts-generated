# BodyValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost

## Example Usage

```typescript
import { BodyValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost } from "galileo-generated/models";

let value: BodyValidateCodeScorerLogRecordScorersCodeValidateLogRecordPost = {
  file: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `file`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `logStreamId`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `experimentId`                                                                             | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `limit`                                                                                    | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `startingToken`                                                                            | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `filters`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | JSON string array of LogRecordsQueryFilter                                                 |
| `sort`                                                                                     | *string*                                                                                   | :heavy_minus_sign:                                                                         | JSON string of LogRecordsSortClause                                                        |
| `requiredScorers`                                                                          | *models.BodyValidateCodeScorerLogRecordScorersCodeValidateLogRecordPostRequiredScorers*    | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `scoreableNodeTypes`                                                                       | *models.BodyValidateCodeScorerLogRecordScorersCodeValidateLogRecordPostScoreableNodeTypes* | :heavy_minus_sign:                                                                         | N/A                                                                                        |