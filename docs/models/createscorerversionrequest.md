# CreateScorerVersionRequest

## Example Usage

```typescript
import { CreateScorerVersionRequest } from "galileo-generated/models";

let value: CreateScorerVersionRequest = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `modelName`                                          | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `numJudges`                                          | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `scoreableNodeTypes`                                 | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `cotEnabled`                                         | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |
| `outputType`                                         | [models.OutputTypeEnum](../models/outputtypeenum.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `inputType`                                          | [models.InputTypeEnum](../models/inputtypeenum.md)   | :heavy_minus_sign:                                   | N/A                                                  |