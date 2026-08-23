# ScorerDefaults

## Example Usage

```typescript
import { ScorerDefaults } from "galileo-generated/models";

let value: ScorerDefaults = {
  filters: [
    {
      name: "metadata",
      operator: "eq",
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `modelName`                                                                                                                     | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `numJudges`                                                                                                                     | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `filters`                                                                                                                       | *models.ScorerDefaultsFilter*[]                                                                                                 | :heavy_minus_sign:                                                                                                              | List of filters to apply to the scorer.                                                                                         |
| `scoreableNodeTypes`                                                                                                            | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | List of node types that can be scored by this scorer. Defaults to llm/chat.                                                     |
| `cotEnabled`                                                                                                                    | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Whether to enable chain of thought for this scorer. Defaults to False for llm scorers.                                          |
| `outputType`                                                                                                                    | [models.OutputTypeEnum](../models/outputtypeenum.md)                                                                            | :heavy_minus_sign:                                                                                                              | What type of output to use for model-based scorers (boolean, categorical, etc.).                                                |
| `inputType`                                                                                                                     | [models.InputTypeEnum](../models/inputtypeenum.md)                                                                              | :heavy_minus_sign:                                                                                                              | What type of input to use for model-based scorers (sessions_normalized, trace_io_only, etc..).                                  |
| `invocation`                                                                                                                    | [models.ScorerInvocationConfig](../models/scorerinvocationconfig.md)                                                            | :heavy_minus_sign:                                                                                                              | Deprecated compatibility location for direct-invocation metadata. Use ScorerInfo.invocation or BaseScorerDB.invocation instead. |