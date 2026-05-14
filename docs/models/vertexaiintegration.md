# VertexAIIntegration

## Example Usage

```typescript
import { VertexAIIntegration } from "galileo-generated/models";

let value: VertexAIIntegration = {
  provider: "vertex_ai",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `multiModalConfig`                                                                       | [models.MultiModalModelIntegrationConfig](../models/multimodalmodelintegrationconfig.md) | :heavy_minus_sign:                                                                       | Configuration for multi-modal (file upload) capabilities.                                |
| `gcsConfig`                                                                              | [models.VertexAIGCSConfigResponse](../models/vertexaigcsconfigresponse.md)               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *"vertex_ai"*                                                                            | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `provider`                                                                               | *"vertex_ai"*                                                                            | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `extra`                                                                                  | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |