# CreateLLMScorerVersionRequest

## Example Usage

```typescript
import { CreateLLMScorerVersionRequest } from "galileo-generated/models";

let value: CreateLLMScorerVersionRequest = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `modelName`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `numJudges`                                                | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `scoreableNodeTypes`                                       | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `cotEnabled`                                               | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |
| `outputType`                                               | [models.OutputTypeEnum](../models/outputtypeenum.md)       | :heavy_minus_sign:                                         | N/A                                                        |
| `inputType`                                                | [models.InputTypeEnum](../models/inputtypeenum.md)         | :heavy_minus_sign:                                         | N/A                                                        |
| `instructions`                                             | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `chainPollTemplate`                                        | [models.ChainPollTemplate](../models/chainpolltemplate.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `userPrompt`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |