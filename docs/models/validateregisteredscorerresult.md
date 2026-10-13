# ValidateRegisteredScorerResult

## Example Usage

```typescript
import { ValidateRegisteredScorerResult } from "galileo-generated/models";

let value: ValidateRegisteredScorerResult = {
  result: {
    scoreType: "<value>",
    scoreableNodeTypes: [],
    includeLlmCredentials: false,
    testScores: [],
  },
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `result`                                      | *models.ValidateRegisteredScorerResultResult* | :heavy_check_mark:                            | N/A                                           |
| `taskId`                                      | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `scorerSha256`                                | *string*                                      | :heavy_minus_sign:                            | N/A                                           |