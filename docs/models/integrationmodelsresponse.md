# IntegrationModelsResponse

## Example Usage

```typescript
import { IntegrationModelsResponse } from "galileo-generated/models";

let value: IntegrationModelsResponse = {
  integrationName: "<value>",
  integrationId: "<value>",
  provider: "databricks",
  models: [
    "<value 1>",
  ],
  scorerModels: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `integrationName`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `integrationId`                                                                                                                | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `provider`                                                                                                                     | [models.IntegrationProvider](../models/integrationprovider.md)                                                                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `models`                                                                                                                       | *string*[]                                                                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `scorerModels`                                                                                                                 | *string*[]                                                                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `recommendedModels`                                                                                                            | Record<string, *string*[]>                                                                                                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `supportsNumJudges`                                                                                                            | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `supportsFileUploads`                                                                                                          | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `modelProperties`                                                                                                              | [models.ApiSchemasIntegrationLlmIntegrationModelProperties](../models/apischemasintegrationllmintegrationmodelproperties.md)[] | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |