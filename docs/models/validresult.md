# ValidResult

## Example Usage

```typescript
import { ValidResult } from "galileo-generated/models";

let value: ValidResult = {
  scoreType: "float",
  scoreableNodeTypes: [
    "agent",
  ],
  testScores: [
    {
      nodeType: "retriever",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `resultType`                                                             | *"valid"*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scoreType`                                                              | [models.ValidResultScoreType](../models/validresultscoretype.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `scoreableNodeTypes`                                                     | [models.NodeType](../models/nodetype.md)[]                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `includeLlmCredentials`                                                  | *boolean*                                                                | :heavy_minus_sign:                                                       | N/A                                                                      |
| `chainAggregation`                                                       | [models.ChainAggregationStrategy](../models/chainaggregationstrategy.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `testScores`                                                             | [models.TestScore](../models/testscore.md)[]                             | :heavy_check_mark:                                                       | N/A                                                                      |
| `environment`                                                            | [models.ScorerEnvironment](../models/scorerenvironment.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |