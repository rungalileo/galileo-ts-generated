# BaseScorerVersionDB

Scorer version from the scorer_versions table.

## Example Usage

```typescript
import { BaseScorerVersionDB } from "galileo-generated/models";

let value: BaseScorerVersionDB = {
  id: "<value>",
  version: 451991,
  scorerId: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `version`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `scorerId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `generatedScorer`                                                                              | [models.BaseGeneratedScorerDB](../models/basegeneratedscorerdb.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `registeredScorer`                                                                             | [models.BaseRegisteredScorerDB](../models/baseregisteredscorerdb.md)                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `finetunedScorer`                                                                              | [models.BaseFinetunedScorerDB](../models/basefinetunedscorerdb.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `modelName`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `numJudges`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `scoreableNodeTypes`                                                                           | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | List of node types that can be scored by this scorer. Defaults to llm/chat.                    |
| `cotEnabled`                                                                                   | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Whether to enable chain of thought for this scorer. Defaults to False for llm scorers.         |
| `outputType`                                                                                   | [models.OutputTypeEnum](../models/outputtypeenum.md)                                           | :heavy_minus_sign:                                                                             | What type of output to use for model-based scorers (sessions_normalized, trace_io_only, etc.). |
| `inputType`                                                                                    | [models.InputTypeEnum](../models/inputtypeenum.md)                                             | :heavy_minus_sign:                                                                             | What type of input to use for model-based scorers (sessions_normalized, trace_io_only, etc.).  |