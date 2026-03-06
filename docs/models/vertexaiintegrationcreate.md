# VertexAIIntegrationCreate

## Example Usage

```typescript
import { VertexAIIntegrationCreate } from "galileo-generated/models";

let value: VertexAIIntegrationCreate = {
  token: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `multiModalConfig`                                                                       | [models.MultiModalModelIntegrationConfig](../models/multimodalmodelintegrationconfig.md) | :heavy_minus_sign:                                                                       | Configuration for multi-modal (file upload) capabilities.                                |
| `gcsConfig`                                                                              | [models.VertexAIGCSConfig](../models/vertexaigcsconfig.md)                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `token`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |