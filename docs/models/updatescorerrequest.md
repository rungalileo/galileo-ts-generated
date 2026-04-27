# UpdateScorerRequest

## Example Usage

```typescript
import { UpdateScorerRequest } from "galileo-generated/models";

let value: UpdateScorerRequest = {
  defaults: {
    filters: [
      {
        name: "metadata",
        operator: "ne",
        key: "<key>",
        value: "<value>",
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
| `defaults`                                                                   | [models.ScorerDefaults](../models/scorerdefaults.md)                         | :heavy_minus_sign:                                                           | N/A                                                                          |
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