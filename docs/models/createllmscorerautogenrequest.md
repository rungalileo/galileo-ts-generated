# CreateLLMScorerAutogenRequest

## Example Usage

```typescript
import { CreateLLMScorerAutogenRequest } from "galileo-generated/models";

let value: CreateLLMScorerAutogenRequest = {
  instructions: "<value>",
  modelName: "<value>",
  outputType: "discrete",
  cotEnabled: false,
  scoreableNodeTypes: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `instructions`                                       | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `modelName`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `outputType`                                         | [models.OutputTypeEnum](../models/outputtypeenum.md) | :heavy_check_mark:                                   | Enumeration of output types.                         |
| `cotEnabled`                                         | *boolean*                                            | :heavy_check_mark:                                   | N/A                                                  |
| `scoreableNodeTypes`                                 | *string*[]                                           | :heavy_check_mark:                                   | N/A                                                  |