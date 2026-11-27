# LLMScorerLogRecordConfiguration

## Example Usage

```typescript
import { LLMScorerLogRecordConfiguration } from "galileo-generated/models";

let value: LLMScorerLogRecordConfiguration = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `modelAlias`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `numJudges`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `outputType`                                                           | [models.OutputTypeEnum](../models/outputtypeenum.md)                   | :heavy_minus_sign:                                                     | Enumeration of output types.                                           |
| `scoreableNodeTypes`                                                   | *string*[]                                                             | :heavy_minus_sign:                                                     | Types of nodes that can be scored by this scorer.                      |
| `cotEnabled`                                                           | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether chain of thought is enabled for this scorer.                   |
| `groundTruth`                                                          | *boolean*                                                              | :heavy_minus_sign:                                                     | Whether ground truth is enabled for this scorer.                       |
| `multimodalCapabilities`                                               | [models.MultimodalCapability](../models/multimodalcapability.md)[]     | :heavy_minus_sign:                                                     | Multimodal capabilities required by this scorer.                       |
| `inputType`                                                            | [models.InputTypeEnum](../models/inputtypeenum.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadataSelection`                                                    | [models.ScorerMetadataSelection](../models/scorermetadataselection.md) | :heavy_minus_sign:                                                     | N/A                                                                    |