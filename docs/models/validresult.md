# ValidResult

## Example Usage

```typescript
import { ValidResult } from "galileo-generated/models";

let value: ValidResult = {
  scoreType: "<value>",
  scoreableNodeTypes: [
    "session",
  ],
  testScores: [
    {
      nodeType: "session",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `resultType`                                                             | *"valid"*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scoreType`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `scoreableNodeTypes`                                                     | [models.NodeType](../models/nodetype.md)[]                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `includeLlmCredentials`                                                  | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `chainAggregation`                                                       | [models.ChainAggregationStrategy](../models/chainaggregationstrategy.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `testScores`                                                             | [models.TestScore](../models/testscore.md)[]                             | :heavy_check_mark:                                                       | N/A                                                                      |