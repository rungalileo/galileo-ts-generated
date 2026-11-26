# UpdateScorerRequest

## Example Usage

```typescript
import { UpdateScorerRequest } from "galileo-generated/models";

let value: UpdateScorerRequest = {
  defaults: {
    filters: [
      {
        name: "node_name",
        operator: "regex",
        value: "<value>",
        caseSensitive: true,
      },
    ],
    childSpanFilters: [
      {
        name: "node_name",
        operator: "contains",
        value: [
          "<value 1>",
        ],
        caseSensitive: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `tags`                                                                       | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `defaults`                                                                   | [models.ScorerDefaultsRequest](../models/scorerdefaultsrequest.md)           | :heavy_minus_sign:                                                           | N/A                                                                          |
| `modelType`                                                                  | [models.ModelType](../models/modeltype.md)                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `groundTruth`                                                                | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `defaultVersionId`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `userPrompt`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `scoreableNodeTypes`                                                         | *string*[]                                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `outputType`                                                                 | [models.OutputTypeEnum](../models/outputtypeenum.md)                         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `inputType`                                                                  | [models.InputTypeEnum](../models/inputtypeenum.md)                           | :heavy_minus_sign:                                                           | N/A                                                                          |
| `multimodalCapabilities`                                                     | [models.MultimodalCapability](../models/multimodalcapability.md)[]           | :heavy_minus_sign:                                                           | N/A                                                                          |
| `rollUpMethod`                                                               | [models.RollUpMethodDisplayOptions](../models/rollupmethoddisplayoptions.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `metricColorPickerConfig`                                                    | *models.UpdateScorerRequestMetricColorPickerConfig*                          | :heavy_minus_sign:                                                           | N/A                                                                          |