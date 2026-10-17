# BaseScorer

## Example Usage

```typescript
import { BaseScorer } from "galileo-generated/models";

let value: BaseScorer = {
  filters: [
    {
      name: "node_name",
      operator: "not_in",
      value: [
        "<value 1>",
      ],
      caseSensitive: true,
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `scorerName`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `scores`                                                           | *any*[]                                                            | :heavy_minus_sign:                                                 | N/A                                                                |
| `indices`                                                          | *number*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `aggregates`                                                       | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `aggregateKeys`                                                    | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `extra`                                                            | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `filters`                                                          | *models.BaseScorerFilter*[]                                        | :heavy_minus_sign:                                                 | N/A                                                                |
| `metricName`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `chainpollTemplate`                                                | [models.ChainPollTemplate](../models/chainpolltemplate.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `modelAlias`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `numJudges`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `defaultModelAlias`                                                | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `groundTruth`                                                      | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `regexField`                                                       | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `registeredScorerId`                                               | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `generatedScorerId`                                                | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `scorerVersionId`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `userCode`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `canCopyToLlm`                                                     | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `scoreableNodeTypes`                                               | [models.NodeType](../models/nodetype.md)[]                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `cotEnabled`                                                       | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `outputType`                                                       | [models.OutputTypeEnum](../models/outputtypeenum.md)               | :heavy_minus_sign:                                                 | N/A                                                                |
| `inputType`                                                        | [models.InputTypeEnum](../models/inputtypeenum.md)                 | :heavy_minus_sign:                                                 | N/A                                                                |
| `multimodalCapabilities`                                           | [models.MultimodalCapability](../models/multimodalcapability.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `requiresToolsInLlmSpan`                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `requiredScorers`                                                  | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `requiredMetricIds`                                                | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `rollUpStrategy`                                                   | [models.RollUpStrategy](../models/rollupstrategy.md)               | :heavy_minus_sign:                                                 | N/A                                                                |
| `rollUpMethods`                                                    | *models.BaseScorerRollUpMethods*                                   | :heavy_minus_sign:                                                 | N/A                                                                |
| `prompt`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `loraTaskId`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `loraWeightsPath`                                                  | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `lunaInputType`                                                    | [models.LunaInputTypeEnum](../models/lunainputtypeenum.md)         | :heavy_minus_sign:                                                 | N/A                                                                |
| `lunaOutputType`                                                   | [models.LunaOutputTypeEnum](../models/lunaoutputtypeenum.md)       | :heavy_minus_sign:                                                 | N/A                                                                |
| `classNameToVocabIx`                                               | *models.BaseScorerClassNameToVocabIx*                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `scorerPathName`                                                   | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |