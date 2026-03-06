# IntegrationModelsResponse

## Example Usage

```typescript
import { IntegrationModelsResponse } from "galileo-generated/models";

let value: IntegrationModelsResponse = {
  integrationName: "<value>",
  models: [
    "<value 1>",
  ],
  scorerModels: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `integrationName`                                        | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `models`                                                 | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `scorerModels`                                           | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |
| `recommendedModels`                                      | Record<string, *string*[]>                               | :heavy_minus_sign:                                       | N/A                                                      |
| `supportsNumJudges`                                      | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `modelProperties`                                        | [models.ModelProperties](../models/modelproperties.md)[] | :heavy_minus_sign:                                       | N/A                                                      |