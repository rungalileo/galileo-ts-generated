# ApiSchemasIntegrationLlmIntegrationModelProperties

## Example Usage

```typescript
import { ApiSchemasIntegrationLlmIntegrationModelProperties } from "galileo-generated/models";

let value: ApiSchemasIntegrationLlmIntegrationModelProperties = {
  alias: "<value>",
  name: "<value>",
  displayName: "Jerry32",
  inputModalities: [
    "video",
  ],
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `alias`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | Galileo model identifier used in settings and API requests to select this model.                    |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | Provider model identifier used to match the model to its configured provider deployment or profile. |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | Human-readable model name shown in the UI.                                                          |
| `inputModalities`                                                                                   | [models.ContentModality](../models/contentmodality.md)[]                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `lifecycleState`                                                                                    | [models.ModelLifecycleState](../models/modellifecyclestate.md)                                      | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `replacementAlias`                                                                                  | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `deprecationDate`                                                                                   | [Date](../types/rfcdate.md)                                                                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `retirementDate`                                                                                    | [Date](../types/rfcdate.md)                                                                         | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `multimodalCapabilities`                                                                            | [models.MultimodalCapability](../models/multimodalcapability.md)[]                                  | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |