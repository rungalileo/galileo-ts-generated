# DecisionScorerTestConfiguration

The evaluator settings of a decision Test request, the same place as the LLM scorer_configuration.

scoreable_node_types holds exactly one node type. input_type defaults to the decision default
for it (get_decision_input_type).

## Example Usage

```typescript
import { DecisionScorerTestConfiguration } from "galileo-generated/models";

let value: DecisionScorerTestConfiguration = {
  outputType: "count",
  scoreableNodeTypes: [
    "retriever",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `outputType`                                         | [models.OutputTypeEnum](../models/outputtypeenum.md) | :heavy_check_mark:                                   | Enumeration of output types.                         |
| `scoreableNodeTypes`                                 | [models.StepType](../models/steptype.md)[]           | :heavy_check_mark:                                   | N/A                                                  |
| `inputType`                                          | [models.InputTypeEnum](../models/inputtypeenum.md)   | :heavy_minus_sign:                                   | N/A                                                  |
| `groundTruth`                                        | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |