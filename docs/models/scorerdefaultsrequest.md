# ScorerDefaultsRequest

Apply span selection limits to new settings while allowing stored defaults to load.

## Example Usage

```typescript
import { ScorerDefaultsRequest } from "galileo-generated/models";

let value: ScorerDefaultsRequest = {
  filters: [
    {
      name: "modality",
      operator: "not_in",
      value: "ENUM_VALUE",
    },
  ],
  childSpanFilters: [
    {
      name: "modality",
      operator: "ne",
      value: "ENUM_VALUE",
    },
  ],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `modelName`                                                                                                                     | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `numJudges`                                                                                                                     | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `filters`                                                                                                                       | *models.ScorerDefaultsRequestFilter*[]                                                                                          | :heavy_minus_sign:                                                                                                              | List of filters to apply to the scorer.                                                                                         |
| `childSpanFilters`                                                                                                              | *models.ScorerDefaultsRequestChildSpanFilter*[]                                                                                 | :heavy_minus_sign:                                                                                                              | Filters applied to descendants of the trace.                                                                                    |
| `scoreableNodeTypes`                                                                                                            | *string*[]                                                                                                                      | :heavy_minus_sign:                                                                                                              | List of node types that can be scored by this scorer. Defaults to llm/chat.                                                     |
| `cotEnabled`                                                                                                                    | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Whether to enable chain of thought for this scorer. Defaults to False for llm scorers.                                          |
| `outputType`                                                                                                                    | [models.OutputTypeEnum](../models/outputtypeenum.md)                                                                            | :heavy_minus_sign:                                                                                                              | What type of output to use for model-based scorers (boolean, categorical, etc.).                                                |
| `inputType`                                                                                                                     | [models.InputTypeEnum](../models/inputtypeenum.md)                                                                              | :heavy_minus_sign:                                                                                                              | What type of input to use for model-based scorers (sessions_normalized, trace_io_only, etc..).                                  |
| `metadataSelection`                                                                                                             | [models.ScorerMetadataSelection](../models/scorermetadataselection.md)                                                          | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `spanInputSelections`                                                                                                           | [models.SpanInputSelectionRequest](../models/spaninputselectionrequest.md)[]                                                    | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |
| `requireMatchingSpan`                                                                                                           | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | For trace scorers with named span selections, require a matching child span.                                                    |
| `invocation`                                                                                                                    | [models.ScorerInvocationConfig](../models/scorerinvocationconfig.md)                                                            | :heavy_minus_sign:                                                                                                              | Deprecated compatibility location for direct-invocation metadata. Use ScorerInfo.invocation or BaseScorerDB.invocation instead. |