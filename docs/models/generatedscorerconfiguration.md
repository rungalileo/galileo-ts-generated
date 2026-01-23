# GeneratedScorerConfiguration

## Example Usage

```typescript
import { GeneratedScorerConfiguration } from "galileo-generated/models";

let value: GeneratedScorerConfiguration = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `modelAlias`                                         | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `numJudges`                                          | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `outputType`                                         | [models.OutputTypeEnum](../models/outputtypeenum.md) | :heavy_minus_sign:                                   | Enumeration of output types.                         |
| `scoreableNodeTypes`                                 | *string*[]                                           | :heavy_minus_sign:                                   | Types of nodes that can be scored by this scorer.    |
| `cotEnabled`                                         | *boolean*                                            | :heavy_minus_sign:                                   | Whether chain of thought is enabled for this scorer. |
| `groundTruth`                                        | *boolean*                                            | :heavy_minus_sign:                                   | Whether ground truth is enabled for this scorer.     |