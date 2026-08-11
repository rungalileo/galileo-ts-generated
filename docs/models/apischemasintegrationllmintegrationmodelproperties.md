# ApiSchemasIntegrationLlmIntegrationModelProperties

## Example Usage

```typescript
import { ApiSchemasIntegrationLlmIntegrationModelProperties } from "galileo-generated/models";

let value: ApiSchemasIntegrationLlmIntegrationModelProperties = {
  alias: "<value>",
  name: "<value>",
  inputModalities: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `alias`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `inputModalities`                                                  | [models.ContentModality](../models/contentmodality.md)[]           | :heavy_check_mark:                                                 | N/A                                                                |
| `lifecycleState`                                                   | [models.ModelLifecycleState](../models/modellifecyclestate.md)     | :heavy_minus_sign:                                                 | N/A                                                                |
| `replacementAlias`                                                 | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `deprecationDate`                                                  | [Date](../types/rfcdate.md)                                        | :heavy_minus_sign:                                                 | N/A                                                                |
| `retirementDate`                                                   | [Date](../types/rfcdate.md)                                        | :heavy_minus_sign:                                                 | N/A                                                                |
| `multimodalCapabilities`                                           | [models.MultimodalCapability](../models/multimodalcapability.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |