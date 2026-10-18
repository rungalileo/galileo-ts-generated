# CreateDecisionScorerVersionRequest

The question and model for a new decision scorer version.

The inherited scoreable_node_types, output_type and input_type are optional, but each must
match the scorer when sent. The service checks these fields, and it checks answer_options
against the stored output_type.

## Example Usage

```typescript
import { CreateDecisionScorerVersionRequest } from "galileo-generated/models";

let value: CreateDecisionScorerVersionRequest = {
  modelName: "<value>",
  question: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `modelName`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `numJudges`                                              | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `scoreableNodeTypes`                                     | *string*[]                                               | :heavy_minus_sign:                                       | N/A                                                      |
| `cotEnabled`                                             | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `outputType`                                             | [models.OutputTypeEnum](../models/outputtypeenum.md)     | :heavy_minus_sign:                                       | N/A                                                      |
| `inputType`                                              | [models.InputTypeEnum](../models/inputtypeenum.md)       | :heavy_minus_sign:                                       | N/A                                                      |
| `question`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `answerOptions`                                          | *models.CreateDecisionScorerVersionRequestAnswerOptions* | :heavy_minus_sign:                                       | N/A                                                      |