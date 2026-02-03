# UpdateScorerRequest

## Example Usage

```typescript
import { UpdateScorerRequest } from "galileo-generated/models";

let value: UpdateScorerRequest = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `tags`                                                         | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `defaults`                                                     | [models.ScorerDefaults](../models/scorerdefaults.md)           | :heavy_minus_sign:                                             | N/A                                                            |
| `modelType`                                                    | [models.ModelType](../models/modeltype.md)                     | :heavy_minus_sign:                                             | N/A                                                            |
| `groundTruth`                                                  | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `defaultVersionId`                                             | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `userPrompt`                                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `scoreableNodeTypes`                                           | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `outputType`                                                   | [models.OutputTypeEnum](../models/outputtypeenum.md)           | :heavy_minus_sign:                                             | N/A                                                            |
| `inputType`                                                    | [models.InputTypeEnum](../models/inputtypeenum.md)             | :heavy_minus_sign:                                             | N/A                                                            |
| `requiredScorers`                                              | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `rollUpMethod`                                                 | [models.NumericRollUpMethod](../models/numericrollupmethod.md) | :heavy_minus_sign:                                             | N/A                                                            |